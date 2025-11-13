import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pai Keys — Unified AI API Platform",
  description:
    "Pai Keys unifies GPT, Claude, Gemini, Llama, Mistral, Whisper, and Stable Diffusion behind one blazing-fast intelligent router.",
  metadataBase: new URL("https://agentic-2dc80730.vercel.app"),
  openGraph: {
    title: "Pai Keys — Unified AI API Platform",
    description:
      "Access every major AI model with a single API key. Intelligent routing, zero vendor lock-in.",
    url: "https://agentic-2dc80730.vercel.app",
    siteName: "Pai Keys",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pai Keys — Unified AI Routing",
    description:
      "One API key for GPT, Claude, Gemini, Llama, Mistral, Whisper & more. Fast, flexible, free.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
