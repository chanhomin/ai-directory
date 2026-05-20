"use client";

// AdSense 광고 슬롯 컴포넌트 - 실제 사용 시 data-ad-client와 data-ad-slot 값을 교체하세요
interface AdSlotProps {
  slot: "banner" | "sidebar" | "inline";
  className?: string;
}

export default function AdSlot({ slot, className = "" }: AdSlotProps) {
  const sizes = {
    banner: "h-24 w-full",
    sidebar: "h-64 w-full",
    inline: "h-28 w-full",
  };

  return (
    <div
      className={`${sizes[slot]} bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center ${className}`}
    >
      <div className="text-center text-gray-400">
        <p className="text-xs font-medium">광고</p>
        <p className="text-xs opacity-60">AdSense {slot}</p>
      </div>
    </div>
  );
}
