import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

/** Display face: headings, the wordmark, and other short display strings. */
const clashDisplay = localFont({
  src: "./fonts/ClashDisplay-Variable.woff2",
  weight: "200 700",
  display: "swap",
  variable: "--font-clash",
});

/**
 * Text face for body copy. Clash Display is built for headlines — its tight
 * spacing and low x-height make sustained reading tiring at ~15px, which no
 * amount of contrast fixes. Inter is designed for exactly this job.
 * next/font downloads and self-hosts it at build time, so there's no
 * external request at runtime.
 */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

/**
 * Absolute base for OG/Twitter image URLs — without it, social previews
 * get relative paths and render blank. Resolved in priority order:
 *
 *   1. NEXT_PUBLIC_SITE_URL — set this once a custom domain is attached.
 *   2. VERCEL_PROJECT_PRODUCTION_URL — the project's stable production
 *      domain, so production previews don't point at a one-off deploy.
 *   3. VERCEL_URL — the per-deployment host, which is what preview builds get.
 *   4. localhost for `next dev`.
 *
 * Vercel's variables carry no protocol, hence the https:// prefix.
 */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Joshua Martinez",
  description:
    "Personal portfolio of Joshua Martinez — Computer Science student at the University of Nebraska-Lincoln. Ask his AI assistant anything.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Joshua Martinez — Software Engineer",
    description:
      "CS at University of Nebraska-Lincoln. Portfolio with a built-in AI assistant that answers questions about him.",
    images: ["/og.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joshua Martinez — Software Engineer",
    description:
      "CS at University of Nebraska-Lincoln. Portfolio with a built-in AI assistant.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${clashDisplay.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
