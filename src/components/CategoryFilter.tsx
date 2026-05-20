"use client";

import { useTranslations } from "next-intl";
import { CATEGORIES } from "@/lib/tools";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  selected: string;
  onChange: (category: string) => void;
}

export default function CategoryFilter({ selected, onChange }: CategoryFilterProps) {
  const t = useTranslations("category");

  return (
    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
      {CATEGORIES.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={cn(
            "shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-all",
            selected === cat.id
              ? "bg-indigo-500 text-white shadow-sm"
              : "bg-white text-gray-600 border border-gray-200 hover:border-indigo-300 hover:text-indigo-600"
          )}
        >
          {t(cat.id as Parameters<typeof t>[0])}
        </button>
      ))}
    </div>
  );
}
