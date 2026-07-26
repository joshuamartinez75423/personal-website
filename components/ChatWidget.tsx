"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";

type ChatMessage = { role: "user" | "assistant"; content: string };

const MAX_INPUT_LENGTH = 500;
/** Only the most recent turns are sent — keeps request cost bounded. */
const HISTORY_LIMIT = 8;

export default function ChatWidget() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Keep the newest message in view as the reply streams in.
    const el = messagesRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const question = input.trim();
    if (!question || isLoading) return;

    setError(null);
    setInput("");
    const history = [...messages, { role: "user" as const, content: question }];
    setMessages(history);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history.slice(-HISTORY_LIMIT) }),
      });

      if (!res.ok || !res.body) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Something went wrong — try again.");
      }

      // Append an empty assistant message, then fill it as chunks stream in.
      setMessages((m) => [...m, { role: "assistant", content: "" }]);
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        setMessages((m) => {
          const updated = [...m];
          const last = updated[updated.length - 1];
          updated[updated.length - 1] = {
            ...last,
            content: last.content + chunk,
          };
          return updated;
        });
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong — try again."
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="chat-box">
      <p className="chat-label">{site.chatPrompt}</p>

      {messages.length > 0 && (
        <div className="chat-messages" ref={messagesRef}>
          {messages.map((m, i) => (
            <div
              key={i}
              className={`chat-msg ${
                m.role === "user" ? "chat-msg--user" : "chat-msg--assistant"
              }`}
            >
              {m.content ||
                (isLoading && i === messages.length - 1 ? "…" : "")}
            </div>
          ))}
        </div>
      )}

      <form className="chat-input-wrap" onSubmit={handleSubmit}>
        <input
          className="chat-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          maxLength={MAX_INPUT_LENGTH}
          placeholder={site.chatPlaceholder}
          aria-label={site.chatPrompt}
          disabled={isLoading}
        />
        <button className="chat-send" type="submit" disabled={isLoading}>
          {isLoading ? "…" : "Ask"}
        </button>
      </form>

      {error && <p className="chat-error">{error}</p>}
      <p className="chat-note">
        AI answers based on Joshua&apos;s site, resume, and GitHub — may not be
        perfect.
      </p>
    </div>
  );
}
