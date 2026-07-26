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
  title: "Joshua Martinez",
  description:
    "Personal portfolio of Joshua Martinez — Computer Science senior at the University of Nebraska-Lincoln.",
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
