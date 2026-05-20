"use client";

import React, { useState, useMemo } from "react";
import { useTranslations, useLocale } from "next-intl";
import { TOOLS, getToolsByCategory, searchTools } from "@/lib/tools";
import ToolCard from "@/components/ToolCard";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import AdSlot from "@/components/AdSlot";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function DirectoryClient() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const t = useTranslations("tool");
  const tSite = useTranslations("site");
  const tSearch = useTranslations("search");
  const locale = useLocale();

  const filteredTools = useMemo(() => {
    if (query.trim()) return searchTools(query);
    return getToolsByCategory(category);
  }, [query, category]);

  const featuredTools = TOOLS.filter((tool) => tool.featured);
  const showFeatured = !query && category === "all";

  const sectionTitle = query
    ? tSearch("resultsFor", { query })
    : category === "all"
    ? t("allTools")
    : t("categoryTools", { category });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🤖</span>
            <span className="font-bold text-gray-900 text-lg">{tSite("name")}</span>
          </div>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <a
              href="mailto:alscksgh@gmail.com"
              className="text-sm text-indigo-600 hover:text-indigo-700 font-medium hidden sm:block"
            >
              {tSite("submitRequest")}
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 to-violet-600 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight">
            {tSite("tagline")}
          </h1>
          <p className="text-indigo-200 mb-8 text-base sm:text-lg">
            {tSite("description", { count: TOOLS.length })}
          </p>
          <SearchBar value={query} onChange={setQuery} placeholder={tSearch("placeholder")} />
        </div>
      </section>

      {/* Ad Banner */}
      <div className="max-w-6xl mx-auto px-4 mt-6">
        <AdSlot slot="banner" />
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Featured */}
        {showFeatured && (
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">{t("featuredTools")}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {featuredTools.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} locale={locale} />
              ))}
            </div>
          </section>
        )}

        {/* Category Filter */}
        {!query && (
          <div className="mb-6">
            <CategoryFilter selected={category} onChange={setCategory} />
          </div>
        )}

        {/* Tool Grid */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">{sectionTitle}</h2>
            <span className="text-sm text-gray-500">{t("count", { count: filteredTools.length })}</span>
          </div>

          {filteredTools.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <p className="text-4xl mb-3">🔍</p>
              <p className="font-medium">{tSearch("noResults")}</p>
              <p className="text-sm mt-1">{tSearch("noResultsHint")}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredTools.map((tool, i) => (
                <React.Fragment key={tool.slug}>
                  <ToolCard tool={tool} locale={locale} />
                  {i === 5 && (
                    <div className="sm:col-span-2 lg:col-span-3">
                      <AdSlot slot="inline" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white mt-16 py-8 px-4 text-center text-sm text-gray-400">
        <p className="font-semibold text-gray-600 mb-1">🤖 {tSite("name")}</p>
        <p>{tSite("tagline")}</p>
        <p className="mt-3">
          {tSite("submitEmail")}{" "}
          <a href="mailto:alscksgh@gmail.com" className="text-indigo-500 hover:underline">
            alscksgh@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
}
