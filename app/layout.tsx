import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const clashDisplay = localFont({
  src: "./fonts/ClashDisplay-Variable.woff2",
  weight: "200 700",
  display: "swap",
  variable: "--font-clash",
});

export const metadata: Metadata = {
  // TODO: set metadataBase to the real domain at deploy time, e.g.
  // metadataBase: new URL("https://joshuamartinez.dev"),
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
    <html lang="en" className={clashDisplay.variable}>
      <body>{children}</body>
    </html>
  );
}
