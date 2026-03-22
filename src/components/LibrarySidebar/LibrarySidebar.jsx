export default function LibrarySidebar() {
  return (
    <aside className="w-64 border-r border-white/5 bg-background-dark p-6 flex flex-col gap-8 shrink-0">
      <div>
        <h3 className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-4">
          Library
        </h3>
        <nav className="space-y-1">
          <a
            className="flex items-center gap-3 px-4 py-3 bg-primary/10 text-primary rounded-xl font-semibold"
            href="/library"
          >
            <span className="material-symbols-outlined">grid_view</span>
            All Games
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-100 hover:bg-white/5 rounded-xl transition-all"
            href="#"
          >
            <span className="material-symbols-outlined">download_done</span>
            Installed
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-100 hover:bg-white/5 rounded-xl transition-all"
            href="#"
          >
            <span className="material-symbols-outlined">favorite</span>
            Favorites
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-100 hover:bg-white/5 rounded-xl transition-all"
            href="#"
          >
            <span className="material-symbols-outlined">history</span>
            Recent
          </a>
        </nav>
      </div>
      <div>
        <h3 className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-4">
          Categories
        </h3>
        <nav className="space-y-1">
          <a
            className="flex items-center gap-3 px-4 py-2 text-slate-400 hover:text-slate-100 transition-colors text-sm"
            href="#"
          >
            Action
          </a>
          <a
            className="flex items-center gap-3 px-4 py-2 text-slate-400 hover:text-slate-100 transition-colors text-sm"
            href="#"
          >
            RPG
          </a>
          <a
            className="flex items-center gap-3 px-4 py-2 text-slate-400 hover:text-slate-100 transition-colors text-sm"
            href="#"
          >
            Strategy
          </a>
          <a
            className="flex items-center gap-3 px-4 py-2 text-slate-400 hover:text-slate-100 transition-colors text-sm"
            href="#"
          >
            Indie
          </a>
        </nav>
      </div>
      <div className="mt-auto">
        <div className="bg-surface-dark border border-white/5 p-4 rounded-2xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-100">Storage</span>
            <span className="text-[10px] text-slate-500 font-bold">
              78% Full
            </span>
          </div>
          <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
            <div className="bg-primary h-full w-[78%]" />
          </div>
          <button
            type="button"
            className="w-full mt-4 text-[10px] text-primary font-bold hover:underline"
          >
            Manage Storage
          </button>
        </div>
      </div>
    </aside>
  );
}
