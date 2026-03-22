export default function LibraryToolbar({
  title = "All Games",
  gameCount = 0,
  filterLabel = "Installed",
  sortLabel = "Recently Played",
  viewMode = "grid",
  onViewModeChange,
}) {
  return (
    <div className="sticky top-0 z-40 px-8 py-4 bg-background-dark/80 backdrop-blur-md border-b border-white/5 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        <span className="text-slate-500 text-sm font-medium">
          {gameCount} Games
        </span>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 bg-surface-dark border border-white/5 px-3 py-1.5 rounded-lg text-slate-300 text-sm">
          <span className="material-symbols-outlined text-sm">filter_list</span>
          <span>
            Filter: <strong>{filterLabel}</strong>
          </span>
        </div>
        <div className="flex items-center gap-2 bg-surface-dark border border-white/5 px-3 py-1.5 rounded-lg text-slate-300 text-sm">
          <span className="material-symbols-outlined text-sm">
            sort_by_alpha
          </span>
          <span>
            Sort: <strong>{sortLabel}</strong>
          </span>
        </div>
        <div className="flex items-center gap-1 bg-surface-dark border border-white/5 p-1 rounded-lg">
          <button
            type="button"
            onClick={() => onViewModeChange?.("grid")}
            className={`size-7 flex items-center justify-center rounded-md ${
              viewMode === "grid"
                ? "bg-primary text-white"
                : "text-slate-500 hover:text-slate-100"
            }`}
          >
            <span className="material-symbols-outlined text-lg">grid_view</span>
          </button>
          <button
            type="button"
            onClick={() => onViewModeChange?.("list")}
            className={`size-7 flex items-center justify-center rounded-md ${
              viewMode === "list"
                ? "bg-primary text-white"
                : "text-slate-500 hover:text-slate-100"
            }`}
          >
            <span className="material-symbols-outlined text-lg">list</span>
          </button>
        </div>
      </div>
    </div>
  );
}
