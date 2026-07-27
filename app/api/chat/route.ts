import { GoogleGenAI } from "@google/genai";
import { buildSystemPrompt } from "@/lib/systemPrompt";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const MAX_MESSAGES = 12;
const MAX_MESSAGE_LENGTH = 500;

// Simple per-IP rate limiter. In-memory, so it resets on redeploy and is
// per-server-instance — fine for a portfolio site; swap for a KV-backed
// limiter (e.g. Upstash) if traffic ever warrants it.
const RATE_LIMIT = 10;
const RATE_WINDOW_MS = 60_000;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const windowStart = Date.now() - RATE_WINDOW_MS;
  const recent = (hits.get(ip) ?? []).filter((t) => t > windowStart);
  if (recent.length >= RATE_LIMIT) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(Date.now());
  hits.set(ip, recent);
  return false;
}

type ChatMessage = { role: "user" | "assistant"; content: string };

/** Returns the validated messages, or null if the payload is malformed. */
function validateMessages(body: unknown): ChatMessage[] | null {
  if (typeof body !== "object" || body === null) return null;
  const { messages } = body as { messages?: unknown };
  if (!Array.isArray(messages) || messages.length === 0) return null;
  if (messages.length > MAX_MESSAGES) return null;

  for (const m of messages) {
    if (typeof m !== "object" || m === null) return null;
    const { role, content } = m as { role?: unknown; content?: unknown };
    if (role !== "user" && role !== "assistant") return null;
    if (typeof content !== "string" || content.length === 0) return null;
    if (content.length > MAX_MESSAGE_LENGTH) return null;
  }
  // Conversations must end with the visitor's question.
  if ((messages[messages.length - 1] as ChatMessage).role !== "user") {
    return null;
  }
  return messages as ChatMessage[];
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return Response.json(
      { error: "Too many messages — give it a minute and try again." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const messages = validateMessages(body);
  if (!messages) {
    return Response.json(
      { error: "Invalid messages payload." },
      { status: 400 }
    );
  }

  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      try {
        const stream = await ai.models.generateContentStream({
          // Pinned rather than "gemini-flash-latest": the alias points at the
          // newest Flash, and brand-new models get tiny free-tier daily
          // quotas (3.6-flash: 20/day). One generation back keeps the
          // mature quota. (2.5-flash is closed to new accounts.)
          model: "gemini-3.5-flash",
          contents: messages.map((m) => ({
            role: m.role === "assistant" ? "model" : "user",
            parts: [{ text: m.content }],
          })),
          config: {
            systemInstruction: buildSystemPrompt(),
            maxOutputTokens: 2000,
          },
        });
        for await (const chunk of stream) {
          if (chunk.text) controller.enqueue(encoder.encode(chunk.text));
        }
      } catch (err) {
        console.error("Chat stream error:", err);
        const isQuota =
          typeof err === "object" &&
          err !== null &&
          (err as { status?: number }).status === 429;
        controller.enqueue(
          encoder.encode(
            isQuota
              ? "\n\n[The assistant is at its daily limit — please try again later, or reach Joshua via the links below.]"
              : "\n\n[Sorry — something went wrong. Try again.]"
          )
        );
      }
      controller.close();
    },
  });

  return new Response(readable, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

/*
 * To switch back to Claude: `npm install @anthropic-ai/sdk` (already installed),
 * set ANTHROPIC_API_KEY in .env.local (already there), and replace the
 * streaming section above with:
 *
 *   import Anthropic from "@anthropic-ai/sdk";
 *   const client = new Anthropic();
 *   ...
 *   const stream = client.messages.stream({
 *     model: "claude-opus-4-8",
 *     max_tokens: 1000,
 *     system: buildSystemPrompt(),
 *     messages,
 *   });
 *   stream.on("text", (delta) => controller.enqueue(encoder.encode(delta)));
 *   await stream.finalMessage();
 */
