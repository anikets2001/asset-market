"use client";

import { useState } from "react";

const TAB_IDS = ["description", "technical", "reviews", "versions"];

const TAB_LABELS = {
  description: "Description",
  technical: "Technical Details",
  reviews: "Reviews",
  versions: "Versions",
};

export default function AssetDetailTabs({
  reviewCount,
  descriptionContent,
  technicalText,
}) {
  const [active, setActive] = useState("description");

  const reviewsLabel = `${TAB_LABELS.reviews} (${reviewCount})`;

  return (
    <div className="border-b border-primary/20">
      <div className="flex gap-6 sm:gap-8 overflow-x-auto no-scrollbar">
        {TAB_IDS.map((id) => {
          const label =
            id === "reviews" ? reviewsLabel : TAB_LABELS[id];
          const isActive = active === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => setActive(id)}
              className={`px-2 py-4 text-sm whitespace-nowrap transition-colors ${
                isActive
                  ? "font-bold border-b-2 border-primary text-primary"
                  : "font-medium text-slate-500 hover:text-slate-100"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
      <div className="py-8 text-slate-400 text-sm leading-relaxed">
        {active === "description" && descriptionContent}
        {active === "technical" && <p>{technicalText}</p>}
        {active === "reviews" && (
          <p>
            Reviews are verified purchases only. Detailed ratings breakdown
            coming soon.
          </p>
        )}
        {active === "versions" && (
          <p>Version history and changelog will appear here for this asset.</p>
        )}
      </div>
    </div>
  );
}
