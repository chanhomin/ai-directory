"use client";

import Link from "next/link";
import { ExternalLink, Star } from "lucide-react";
import { useTranslations } from "next-intl";
import { Tool, PRICING_LABELS, PRICING_LABELS_EN, PRICING_COLORS, getToolText } from "@/lib/tools";
import { cn } from "@/lib/utils";

interface ToolCardProps {
  tool: Tool;
  locale: string;
}

export default function ToolCard({ tool, locale }: ToolCardProps) {
  const t = useTranslations("tool");
  const { tagline } = getToolText(tool, locale);
  const pricingLabel = locale === "en" ? PRICING_LABELS_EN[tool.pricing] : PRICING_LABELS[tool.pricing];

  return (
    <div
      className={cn(
        "group relative bg-white rounded-2xl border border-gray-200 p-5 hover:shadow-lg hover:border-indigo-300 transition-all duration-200",
        tool.featured && "ring-2 ring-indigo-500 ring-offset-1"
      )}
    >
      {tool.featured && (
        <div className="absolute -top-3 left-4 flex items-center gap-1 bg-indigo-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
          <Star className="w-3 h-3 fill-white" />
          {t("featured")}
        </div>
      )}

      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="text-3xl w-12 h-12 flex items-center justify-center bg-gray-50 rounded-xl border border-gray-100">
            {tool.logo}
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-base group-hover:text-indigo-600 transition-colors">
              {tool.name}
            </h3>
            <span className={cn("inline-block text-xs font-medium px-2 py-0.5 rounded-full mt-0.5", PRICING_COLORS[tool.pricing])}>
              {pricingLabel}
            </span>
          </div>
        </div>
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="shrink-0 p-2 text-gray-400 hover:text-indigo-500 hover:bg-indigo-50 rounded-lg transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <p className="mt-3 text-sm text-gray-500 leading-relaxed line-clamp-2">{tagline}</p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {tool.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md">
            {tag}
          </span>
        ))}
      </div>

      <Link
        href={`/${locale}/tools/${tool.slug}`}
        className="mt-4 block w-full text-center text-sm font-medium text-indigo-600 hover:text-indigo-700 bg-indigo-50 hover:bg-indigo-100 py-2 rounded-xl transition-colors"
      >
        {t("viewDetail")}
      </Link>
    </div>
  );
}
