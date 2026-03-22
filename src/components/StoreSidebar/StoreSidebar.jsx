"use client";

import { useState } from "react";

const GENRES = [
  { id: "action", label: "Action", checked: false },
  { id: "rpg", label: "RPG", checked: true },
  { id: "strategy", label: "Strategy", checked: false },
  { id: "adventure", label: "Adventure", checked: false },
  { id: "simulation", label: "Simulation", checked: false },
];

const PLAYER_SUPPORT = [
  { id: "single", label: "Single-player", checked: false },
  { id: "multi", label: "Multi-player", checked: false },
  { id: "coop", label: "Co-op", checked: false },
];

export default function StoreSidebar() {
  const [genres, setGenres] = useState(GENRES);
  const [playerSupport, setPlayerSupport] = useState(PLAYER_SUPPORT);

  const toggleGenre = (id) => {
    setGenres((prev) =>
      prev.map((g) => (g.id === id ? { ...g, checked: !g.checked } : g))
    );
  };

  const togglePlayerSupport = (id) => {
    setPlayerSupport((prev) =>
      prev.map((p) => (p.id === id ? { ...p, checked: !p.checked } : p))
    );
  };

  const clearFilters = () => {
    setGenres((prev) => prev.map((g) => ({ ...g, checked: g.id === "rpg" })));
    setPlayerSupport((prev) => prev.map((p) => ({ ...p, checked: false })));
  };

  return (
    <aside className="w-72 border-r border-white/5 bg-surface-dark/30 p-6 flex flex-col gap-8 sticky top-[65px] h-[calc(100vh-65px)] overflow-y-auto custom-scrollbar">
      <div>
        <h3 className="text-slate-100 font-bold text-sm uppercase tracking-wider mb-4">
          Genres
        </h3>
        <div className="space-y-2">
          {genres.map((genre) => (
            <label
              key={genre.id}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <input
                type="checkbox"
                checked={genre.checked}
                onChange={() => toggleGenre(genre.id)}
                className="rounded border-white/10 bg-white/5 text-primary focus:ring-primary focus:ring-offset-0"
              />
              <span
                className={`text-sm transition-colors ${
                  genre.checked
                    ? "text-slate-100 font-medium"
                    : "text-slate-400 group-hover:text-white"
                }`}
              >
                {genre.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-slate-100 font-bold text-sm uppercase tracking-wider mb-4">
          Price Range
        </h3>
        <div className="space-y-4">
          <input
            type="range"
            className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex items-center justify-between">
            <span className="text-slate-400 text-xs">$0</span>
            <span className="text-slate-400 text-xs">$100+</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-4">
          <button
            type="button"
            className="py-1.5 px-3 bg-white/5 border border-white/10 rounded-lg text-xs hover:bg-white/10 transition-colors"
          >
            Under $10
          </button>
          <button
            type="button"
            className="py-1.5 px-3 bg-white/5 border border-white/10 rounded-lg text-xs hover:bg-white/10 transition-colors"
          >
            Under $20
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-slate-100 font-bold text-sm uppercase tracking-wider mb-4">
          Player Support
        </h3>
        <div className="space-y-2">
          {playerSupport.map((item) => (
            <label
              key={item.id}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => togglePlayerSupport(item.id)}
                className="rounded border-white/10 bg-white/5 text-primary focus:ring-primary focus:ring-offset-0"
              />
              <span className="text-slate-400 group-hover:text-white text-sm transition-colors">
                {item.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="mt-auto pt-6 border-t border-white/5">
        <button
          type="button"
          onClick={clearFilters}
          className="w-full py-3 bg-primary/10 text-primary border border-primary/20 rounded-xl font-bold hover:bg-primary hover:text-white transition-all"
        >
          Clear Filters
        </button>
      </div>
    </aside>
  );
}
