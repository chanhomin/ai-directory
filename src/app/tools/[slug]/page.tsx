import { notFound } from "next/navigation";
import Link from "next/link";
import { ExternalLink, ArrowLeft, Tag, Check } from "lucide-react";
import { getToolBySlug, TOOLS, PRICING_LABELS, PRICING_COLORS, CATEGORIES } from "@/lib/tools";
import { cn } from "@/lib/utils";
import AdSlot from "@/components/AdSlot";

export function generateStaticParams() {
  return TOOLS.map((tool) => ({ slug: tool.slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) notFound();

  const categoryLabel =
    CATEGORIES.find((c) => c.id === tool.category)?.label ?? tool.category;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            AI 툴킷으로 돌아가기
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-10">
        {/* Tool Header */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-6 shadow-sm">
          <div className="flex items-start gap-5">
            <div className="text-5xl w-20 h-20 flex items-center justify-center bg-gray-50 rounded-2xl border border-gray-100 shrink-0">
              {tool.logo}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-2xl font-extrabold text-gray-900">
                  {tool.name}
                </h1>
                <span
                  className={cn(
                    "text-sm font-semibold px-3 py-1 rounded-full",
                    PRICING_COLORS[tool.pricing]
                  )}
                >
                  {PRICING_LABELS[tool.pricing]}
                </span>
              </div>
              <p className="text-gray-500 mt-1 text-base">{tool.tagline}</p>
              <div className="flex items-center gap-2 mt-2 text-sm text-gray-400">
                <Tag className="w-3.5 h-3.5" />
                <span>{categoryLabel}</span>
              </div>
            </div>
          </div>

          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-sm"
          >
            <ExternalLink className="w-4 h-4" />
            {tool.name} 방문하기
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Description */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="font-bold text-gray-900 text-lg mb-3">소개</h2>
              <p className="text-gray-600 leading-relaxed">{tool.description}</p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="font-bold text-gray-900 text-lg mb-3">태그</h2>
              <div className="flex flex-wrap gap-2">
                {tool.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-indigo-50 text-indigo-700 text-sm font-medium px-3 py-1.5 rounded-xl"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Pricing Plans */}
            {tool.plans.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h2 className="font-bold text-gray-900 text-lg mb-4">요금제</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {tool.plans.map((plan) => (
                    <div
                      key={plan.name}
                      className={cn(
                        "rounded-xl border p-4",
                        plan.highlighted
                          ? "border-indigo-400 bg-indigo-50 ring-1 ring-indigo-400"
                          : "border-gray-200 bg-gray-50"
                      )}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-gray-900 text-sm">{plan.name}</span>
                          {plan.highlighted && (
                            <span className="text-xs bg-indigo-500 text-white px-2 py-0.5 rounded-full font-medium">
                              추천
                            </span>
                          )}
                        </div>
                        <span className={cn(
                          "font-bold text-sm",
                          plan.highlighted ? "text-indigo-600" : "text-gray-700"
                        )}>
                          {plan.price}
                        </span>
                      </div>
                      <ul className="space-y-1.5">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-xs text-gray-600">
                            <Check className={cn(
                              "w-3.5 h-3.5 mt-0.5 shrink-0",
                              plan.highlighted ? "text-indigo-500" : "text-gray-400"
                            )} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <AdSlot slot="inline" />
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-3">정보</h3>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-gray-500">카테고리</dt>
                  <dd className="font-medium text-gray-700">{categoryLabel}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">가격</dt>
                  <dd className="font-medium text-gray-700">
                    {PRICING_LABELS[tool.pricing]}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">등록일</dt>
                  <dd className="font-medium text-gray-700">{tool.addedAt}</dd>
                </div>
              </dl>
            </div>

            <AdSlot slot="sidebar" />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white mt-10 py-6 px-4 text-center text-sm text-gray-400">
        <Link href="/" className="text-indigo-500 hover:underline font-medium">
          ← AI 툴킷 홈으로
        </Link>
      </footer>
    </div>
  );
}
