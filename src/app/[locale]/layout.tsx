import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export const metadata: Metadata = {
  title: {
    default: "AI Toolkit — Best AI Tools Directory",
    template: "%s | AI Toolkit",
  },
  description: "Explore the best AI tools by category. Writing, image generation, coding, productivity and more.",
  keywords: "AI tools, artificial intelligence, ChatGPT, Midjourney, Claude, AI directory",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
