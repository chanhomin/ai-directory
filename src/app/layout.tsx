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
  title: "AI 툴킷 — 최고의 AI 도구 디렉토리",
  description:
    "최고의 AI 도구들을 카테고리별로 탐색하세요. 글쓰기, 이미지 생성, 코딩, 생산성 등 다양한 AI 툴을 한곳에서.",
  keywords: "AI 도구, AI 툴, 인공지능, ChatGPT, Midjourney, Claude, AI 디렉토리",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
