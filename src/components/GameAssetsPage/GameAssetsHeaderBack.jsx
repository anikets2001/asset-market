"use client";

import { useRouter } from "next/navigation";

export default function GameAssetsHeaderBack({ href }) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => {
        if (href) {
          router.replace(href);
        } else {
          router.back();
        }
      }}
      className="shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 hover:border-white/20 transition-all"
      aria-label="Go back"
      title="Go back"
    >
      <span className="material-symbols-outlined text-xl">arrow_back</span>
    </button>
  );
}
