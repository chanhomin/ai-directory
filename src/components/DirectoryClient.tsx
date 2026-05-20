"use client";

import React, { useState, useMemo } from "react";
import { TOOLS, getToolsByCategory, searchTools } from "@/lib/tools";
import ToolCard from "@/components/ToolCard";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import AdSlot from "@/components/AdSlot";

export default function DirectoryClient() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const filteredTools = useMemo(() => {
    if (query.trim()) return searchTools(query);
    return getToolsByCategory(category);
  }, [query, category]);

  const featuredTools = TOOLS.filter((t) => t.featured);
  const showFeatured = !query && category === "all";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🤖</span>
            <span className="font-bold text-gray-900 text-lg">AI 툴킷</span>
          </div>
          <a
            href="mailto:alscksgh@gmail.com"
            className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
          >
            도구 등록 요청 →
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 to-violet-600 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight">
            최고의 AI 도구를 한곳에서
          </h1>
          <p className="text-indigo-200 mb-8 text-base sm:text-lg">
            {TOOLS.length}개의 엄선된 AI 툴을 카테고리별로 탐색하세요
          </p>
          <SearchBar value={query} onChange={setQuery} />
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
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              ⭐ 추천 AI 도구
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {featuredTools.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} />
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
            <h2 className="text-xl font-bold text-gray-900">
              {query
                ? `"${query}" 검색 결과`
                : category === "all"
                ? "전체 AI 도구"
                : `${category} 도구`}
            </h2>
            <span className="text-sm text-gray-500">
              {filteredTools.length}개
            </span>
          </div>

          {filteredTools.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <p className="text-4xl mb-3">🔍</p>
              <p className="font-medium">검색 결과가 없습니다</p>
              <p className="text-sm mt-1">다른 키워드로 검색해보세요</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredTools.map((tool, i) => (
                <React.Fragment key={tool.slug}>
                  <ToolCard tool={tool} />
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
        <p className="font-semibold text-gray-600 mb-1">🤖 AI 툴킷</p>
        <p>최고의 AI 도구를 한곳에서 탐색하세요</p>
        <p className="mt-3">
          도구 등록 문의:{" "}
          <a
            href="mailto:alscksgh@gmail.com"
            className="text-indigo-500 hover:underline"
          >
            alscksgh@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
}
