import Image from "next/image";
import Link from "next/link";
import { gameAssetDetailHref } from "@/lib/gameAssetsRoute";
import { getAssetDetail } from "@/data/assetDetails";
import GameAssetsHeaderBack from "./GameAssetsHeaderBack";

const IMG_HERO =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBcE-GVaXmWbe6-7Fz0bVk8uew-_FfVXmDH4hPX4--emogmIt5GGihfed6zQDQAD3bXsjJRFJHHXOTXs8NTeBgjiZLFGMOrARGC6k7DmE8Ios89DaCxT6Z2OKnKDz6Tli4u2ZACZT6E0byU-68eifSn8RLbAINUL0DIugW_TFu8HYRG0LRyRfnlCGfYWGhjF9pHV1QEMxg090rzbaTBIJIeE0DX-Tn5G09RgqFrTeJcMUXM92bsmrh6Hof3BsZJh5ZBX6J4X_ZYi14";

const IMG_MYTHIC =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAZXXm6PCLJDVQh9tahj4iN7fh5ZQYzlxRwMjEI7ddg7iP4I7EMFJKjROm8LV-zQCJFdMbnJa4WVKWhCxNqmbWw4K5JIBtR0sA124HqRXal1lijGNQBu4783idCdGkQ6setfL2RHD5q2TJdQr7IuKKMXKSTE_G-rsjfUSzuKNdKKXBEOPO284EO0bem2k0JDRCO9Md5TYlXKm9tAITmoCtFWl8EQJZI5mmyo4W6XUBUUI9YEvJHA8zwiCIzJtk3eLjNq2SUzUTLKzY";

const IMG_WEAPON =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB6wQHk0eSQebLvBXbGTn8ft7llCIOMntDO5MVhFHVr3YIICvqQxlCQ4jpZ0w96IV6agVBVZYImRFddQtpkLJemGsELFCK5gkfvyQgQqV0Ay2OvTv4OqsPvbAJL4zR6zMLAFe56b8DRLM_gOp53jWSFYHM1Ebl0X0ofXgsrFfti6rw2Vyl1ddtWXx_EpVp8202_Uv0_ZtGuef1A2WHZYv-91ifWMY1yxVE7UdbmWXd7W1kyefeUQf73Idzf7OTp-v2oAbe5c_TYOWs";

const AVATAR =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCIzJYP1H_qRuw_c4aPMS2awe1YLo-P_9tUHsV_tlE-fidKF5v8tYvW0H9LjRH0q1wAVO77b79sB6C8mATzaU_Pvd-byvPR1_CSv8Ke46-GG7KpHYyQBn5KynNv4pfSQPgyIJk2XI9ROx40MeH137KwVhWSADqcIm3wfqVxh03VN6IGndSXzZAoAt23EfaAS9tJUQr6y6SmfWZLXGYtfsswHdZwoN1x1T5UZKLd-oYmXmKA0RWl7xW2fKSj-evTHCjS6ffwv61DxUY";

export default function GameAssetsPage({ gameTitle, gameId }) {
  const searchPlaceholder = `Search ${gameTitle} skins, bundles, accounts...`;
  const fantasyTown = getAssetDetail("fantasy-town-kit");

  return (
    <div className="bg-background-dark text-slate-100 min-h-screen selection:bg-primary selection:text-white overflow-x-hidden relative">
      <nav className="fixed top-0 left-0 w-full z-50 glass-header">
        <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between gap-4 sm:gap-8">
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0">
            <GameAssetsHeaderBack />
            <Link
              href="/"
              className="flex items-center gap-2 sm:gap-3 min-w-0"
            >
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(127,19,236,0.5)] shrink-0">
                <span className="material-symbols-outlined text-white text-2xl">
                  interests
                </span>
              </div>
              <span className="text-xl sm:text-2xl font-bold tracking-tighter text-white neon-glow-purple truncate">
                ASSETVERSE
              </span>
            </Link>
          </div>
          <div className="flex-1 max-w-2xl h-12 flex items-center bg-white/5 border border-white/10 rounded-xl overflow-hidden focus-within:border-primary/50 transition-all">
            <div className="relative group h-full">
              <button
                type="button"
                className="h-full px-4 flex items-center gap-2 text-sm font-medium border-r border-white/10 hover:bg-white/5 transition-colors whitespace-nowrap"
              >
                🕹️ {gameTitle}
                <span className="material-symbols-outlined text-sm">
                  expand_more
                </span>
              </button>
              <div className="absolute top-full left-0 w-48 mt-1 bg-background-dark border border-white/10 rounded-lg hidden group-hover:block shadow-2xl z-50">
                <a
                  className="flex items-center gap-3 px-4 py-3 hover:bg-primary/20 text-sm transition-colors"
                  href="#"
                >
                  <span className="material-symbols-outlined text-primary text-lg">
                    videogame_asset
                  </span>
                  BGMI
                </a>
                <a
                  className="flex items-center gap-3 px-4 py-3 hover:bg-primary/20 text-sm transition-colors"
                  href="#"
                >
                  <span className="material-symbols-outlined text-primary text-lg">
                    target
                  </span>
                  Valorant
                </a>
                <a
                  className="flex items-center gap-3 px-4 py-3 hover:bg-primary/20 text-sm transition-colors"
                  href="#"
                >
                  <span className="material-symbols-outlined text-primary text-lg">
                    eco
                  </span>
                  Fortnite
                </a>
              </div>
            </div>
            <div className="flex-1 flex items-center px-4 gap-3">
              <span className="material-symbols-outlined text-slate-400 text-xl">
                search
              </span>
              <input
                className="bg-transparent border-none focus:ring-0 w-full text-sm placeholder:text-slate-500 py-0 outline-none"
                placeholder={searchPlaceholder}
                type="search"
                name="q"
              />
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-8 shrink-0">
            <a
              className="text-sm font-semibold text-primary transition-colors border-b-2 border-primary pb-1"
              href="#"
            >
              Marketplace
            </a>
            <a
              className="text-sm font-semibold hover:text-primary transition-colors"
              href="#"
            >
              Explore
            </a>
            <a
              className="text-sm font-semibold hover:text-primary transition-colors"
              href="#"
            >
              Sell
            </a>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <button
              type="button"
              className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 transition-all"
            >
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-background-dark" />
            </button>
            <button
              type="button"
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 transition-all"
            >
              <span className="material-symbols-outlined">favorite</span>
            </button>
            <div className="relative group ml-2">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden border-2 border-primary/30 hover:border-primary transition-all cursor-pointer">
                <Image
                  src={AVATAR}
                  alt="User"
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-neon-green rounded-full border-2 border-background-dark shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 bg-black/40">
          <div className="max-w-[1440px] mx-auto px-6 h-12 flex items-center">
            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-1">
              <a
                className="flex items-center gap-2 px-4 py-1.5 rounded-full hover:bg-white/5 text-slate-300 text-xs font-semibold shrink-0 transition-all"
                href="#"
              >
                🔥 Trending
              </a>
              <a
                className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-white text-xs font-bold uppercase tracking-wider shrink-0"
                href="#"
              >
                🕹️ {gameTitle}
              </a>
              <a
                className="flex items-center gap-2 px-4 py-1.5 rounded-full hover:bg-white/5 text-slate-300 text-xs font-semibold shrink-0 transition-all"
                href="#"
              >
                🎯 Valorant
              </a>
              <a
                className="flex items-center gap-2 px-4 py-1.5 rounded-full hover:bg-white/5 text-slate-300 text-xs font-semibold shrink-0 transition-all"
                href="#"
              >
                🍀 Fortnite
              </a>
              <a
                className="flex items-center gap-2 px-4 py-1.5 rounded-full hover:bg-white/5 text-slate-300 text-xs font-semibold shrink-0 transition-all"
                href="#"
              >
                📦 UI Kits
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-40 px-6 max-w-[1440px] mx-auto pb-20">
        <section className="relative w-full aspect-[21/7] rounded-3xl overflow-hidden mb-12 group border border-white/5">
          <Image
            src={IMG_HERO}
            alt={`${gameTitle} assets hero`}
            fill
            className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-1000"
            sizes="(max-width: 1440px) 100vw, 1440px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/60 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-16 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-neon-green/10 text-neon-green border border-neon-green/20 rounded-full text-[10px] font-bold uppercase tracking-widest">
                Season 22 Live
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-[10px] font-bold uppercase tracking-widest">
                Premium Assets
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-4 tracking-tighter uppercase italic">
              Dominance <span className="text-primary">Redefined</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-lg leading-relaxed">
              Access the most exclusive {gameTitle} account bundles, mythic
              skins, and voice packs from verified elite sellers.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                className="bg-primary hover:bg-primary/90 text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-[0_10px_30px_-5px_rgba(127,19,236,0.6)]"
              >
                Explore Bundles
              </button>
              <button
                type="button"
                className="bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 px-8 rounded-xl backdrop-blur-md transition-all border border-white/10"
              >
                Sell Your Assets
              </button>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
        </section>

        <div className="flex gap-8">
          <aside className="w-64 shrink-0 hidden xl:block">
            <div className="sticky top-40 space-y-8">
              <div>
                <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-lg">
                    filter_list
                  </span>
                  Filters
                </h4>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                      Asset Category
                    </p>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <span className="w-4 h-4 rounded border border-white/20 bg-white/5 flex items-center justify-center group-hover:border-primary transition-colors">
                          <span className="w-2 h-2 bg-primary rounded-sm opacity-0 group-hover:opacity-100" />
                        </span>
                        <span className="text-sm text-slate-300 group-hover:text-white">
                          Mythic Bundles
                        </span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <span className="w-4 h-4 rounded border border-white/20 bg-white/5 flex items-center justify-center group-hover:border-primary transition-colors">
                          <span className="w-2 h-2 bg-primary rounded-sm opacity-0 group-hover:opacity-100" />
                        </span>
                        <span className="text-sm text-slate-300 group-hover:text-white">
                          Weapon Skins
                        </span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <span className="w-4 h-4 rounded border border-white/20 bg-white/5 flex items-center justify-center group-hover:border-primary transition-colors">
                          <span className="w-2 h-2 bg-primary rounded-sm opacity-0 group-hover:opacity-100" />
                        </span>
                        <span className="text-sm text-slate-300 group-hover:text-white">
                          Voice Packs
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                      Price Range
                    </p>
                    <div className="px-2">
                      <input
                        className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                        type="range"
                        min={0}
                        max={100}
                        defaultValue={50}
                      />
                      <div className="flex justify-between mt-2">
                        <span className="text-xs text-slate-500">$50</span>
                        <span className="text-xs text-slate-500">$5000</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                      Seller Rank
                    </p>
                    <div className="space-y-2">
                      <button
                        type="button"
                        className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 hover:border-primary cursor-pointer transition-colors text-left"
                      >
                        <span className="material-symbols-outlined text-sm text-yellow-500">
                          verified
                        </span>
                        Verified Elite
                      </button>
                      <button
                        type="button"
                        className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 hover:border-primary cursor-pointer transition-colors text-left"
                      >
                        <span className="material-symbols-outlined text-sm text-primary">
                          workspace_premium
                        </span>
                        Top Rated
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent border border-primary/20">
                <p className="text-xs text-slate-300 mb-3">
                  Want to earn from your gaming skills?
                </p>
                <button
                  type="button"
                  className="w-full py-2 bg-primary text-white text-xs font-bold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Become a Seller
                </button>
              </div>
            </div>
          </aside>

          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <h3 className="text-xl font-bold flex flex-wrap items-center gap-3 italic">
                <span className="w-2 h-8 bg-primary rounded-full shrink-0" />
                <span className="uppercase">
                  Exploring {gameTitle} assets
                </span>
                <span className="text-slate-500 text-sm font-normal not-italic">
                  (124 results)
                </span>
              </h3>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors"
                >
                  <span className="material-symbols-outlined text-xl">
                    grid_view
                  </span>
                </button>
                <button
                  type="button"
                  className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors"
                >
                  <span className="material-symbols-outlined text-xl">list</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link
                href={gameAssetDetailHref(gameId, "ultimate-mythic-bundle")}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all asset-card-glow group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={IMG_MYTHIC}
                    alt="Mythic Bundle"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-red-500 text-white text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-tighter italic">
                      Hot
                    </span>
                    <span className="bg-primary text-white text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-tighter">
                      Verified
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-yellow-400 text-sm material-symbol-fill">
                        star
                      </span>
                      <span className="text-xs font-bold">4.9</span>
                      <span className="text-[10px] text-slate-400">
                        (242 sales)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-white group-hover:text-primary transition-colors truncate pr-4">
                      Ultimate Mythic Account Bundle
                    </h4>
                    <span className="shrink-0 material-symbols-outlined text-slate-500 hover:text-red-500 pointer-events-none">
                      favorite
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="relative w-5 h-5 rounded-full overflow-hidden shrink-0">
                      <Image
                        src={AVATAR}
                        alt="Seller"
                        fill
                        className="object-cover"
                        sizes="20px"
                      />
                    </span>
                    <span className="text-xs text-slate-400">
                      by <span className="text-slate-200 font-medium">GhostGamer</span>
                    </span>
                    <span className="w-1.5 h-1.5 bg-neon-green rounded-full shadow-[0_0_5px_rgba(34,197,94,1)]" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold text-white">$1,299.00</div>
                    <span className="p-2.5 bg-primary/10 group-hover:bg-primary text-primary group-hover:text-white rounded-xl transition-all pointer-events-none">
                      <span className="material-symbols-outlined text-lg">
                        shopping_cart
                      </span>
                    </span>
                  </div>
                </div>
              </Link>

              <Link
                href={gameAssetDetailHref(gameId, "m416-glacier-skin")}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all asset-card-glow group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={IMG_WEAPON}
                    alt="Weapon Skin"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-neon-green text-black text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-tighter italic">
                      New
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-yellow-400 text-sm material-symbol-fill">
                        star
                      </span>
                      <span className="text-xs font-bold">4.8</span>
                      <span className="text-[10px] text-slate-400">
                        (89 sales)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-white group-hover:text-primary transition-colors truncate pr-4">
                      Lvl 7 M416 Glacier Skin
                    </h4>
                    <span className="shrink-0 material-symbols-outlined text-slate-500 hover:text-red-500 pointer-events-none">
                      favorite
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="relative w-5 h-5 rounded-full overflow-hidden shrink-0">
                      <Image
                        src={AVATAR}
                        alt="Seller"
                        fill
                        className="object-cover"
                        sizes="20px"
                      />
                    </span>
                    <span className="text-xs text-slate-400">
                      by <span className="text-slate-200 font-medium">IceKing</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold text-white">$450.00</div>
                    <span className="p-2.5 bg-primary/10 group-hover:bg-primary text-primary group-hover:text-white rounded-xl transition-all pointer-events-none">
                      <span className="material-symbols-outlined text-lg">
                        shopping_cart
                      </span>
                    </span>
                  </div>
                </div>
              </Link>

              <Link
                href={gameAssetDetailHref(gameId, "fantasy-town-kit")}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all asset-card-glow group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={fantasyTown.mainImage}
                    alt="Fantasy Town Kit"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-primary text-white text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-tighter">
                      3D Kit
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-white group-hover:text-primary transition-colors truncate pr-4">
                      Fantasy Town Kit
                    </h4>
                    <span className="shrink-0 material-symbols-outlined text-slate-500 hover:text-red-500 pointer-events-none">
                      favorite
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="relative w-5 h-5 rounded-full overflow-hidden shrink-0">
                      <Image
                        src={AVATAR}
                        alt="Seller"
                        fill
                        className="object-cover"
                        sizes="20px"
                      />
                    </span>
                    <span className="text-xs text-slate-400">
                      by{" "}
                      <span className="text-slate-200 font-medium">
                        PixelForge Studio
                      </span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold text-white">$24.99</div>
                    <span className="p-2.5 bg-primary/10 group-hover:bg-primary text-primary group-hover:text-white rounded-xl transition-all pointer-events-none">
                      <span className="material-symbols-outlined text-lg">
                        shopping_cart
                      </span>
                    </span>
                  </div>
                </div>
              </Link>

              <Link
                href={gameAssetDetailHref(gameId, "conqueror-rank-bundle")}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all asset-card-glow group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={IMG_MYTHIC}
                    alt="Rank bundle"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-red-500 text-white text-[10px] font-black px-2 py-0.5 rounded italic">
                      HOT
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-white group-hover:text-primary transition-colors truncate mb-2">
                    Conqueror Rank Push Bundle
                  </h4>
                  <div className="flex items-center gap-2 mb-4 text-xs text-slate-400">
                    by RankBoost Elite
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold text-white">$120.00</div>
                    <span className="p-2.5 bg-primary/10 group-hover:bg-primary text-primary group-hover:text-white rounded-xl transition-all pointer-events-none">
                      <span className="material-symbols-outlined">
                        shopping_cart
                      </span>
                    </span>
                  </div>
                </div>
              </Link>

              <Link
                href={gameAssetDetailHref(gameId, "exotic-voice-ghost")}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all asset-card-glow group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={IMG_WEAPON}
                    alt="Voice pack"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-white group-hover:text-primary transition-colors truncate mb-2">
                    Exotic Voice Pack: Ghost
                  </h4>
                  <div className="flex items-center gap-2 mb-4 text-xs text-slate-400">
                    by AudioPro
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold text-white">$45.00</div>
                    <span className="p-2.5 bg-primary/10 group-hover:bg-primary text-primary group-hover:text-white rounded-xl transition-all pointer-events-none">
                      <span className="material-symbols-outlined">
                        shopping_cart
                      </span>
                    </span>
                  </div>
                </div>
              </Link>

              <Link
                href={gameAssetDetailHref(gameId, "legendary-xsuit-silvanus")}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all asset-card-glow group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={IMG_HERO}
                    alt="X-Suit"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-white group-hover:text-primary transition-colors truncate mb-2">
                    Legendary X-Suit: Silvanus
                  </h4>
                  <div className="flex items-center gap-2 mb-4 text-xs text-slate-400">
                    by MythicMarket
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold text-white">$980.00</div>
                    <span className="p-2.5 bg-primary/10 group-hover:bg-primary text-primary group-hover:text-white rounded-xl transition-all pointer-events-none">
                      <span className="material-symbols-outlined">
                        shopping_cart
                      </span>
                    </span>
                  </div>
                </div>
              </Link>

              <Link
                href={gameAssetDetailHref(gameId, "streamer-ui-pack")}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all asset-card-glow group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={IMG_HERO}
                    alt="Streamer UI Pack"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-primary text-white text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-tighter">
                      Verified
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-white group-hover:text-primary transition-colors truncate pr-4">
                      Streamer Overlays &amp; UI Pack
                    </h4>
                    <span className="shrink-0 material-symbols-outlined text-slate-500 hover:text-red-500 pointer-events-none">
                      favorite
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="relative w-5 h-5 rounded-full overflow-hidden shrink-0">
                      <Image
                        src={AVATAR}
                        alt="Seller"
                        fill
                        className="object-cover"
                        sizes="20px"
                      />
                    </span>
                    <span className="text-xs text-slate-400">
                      by{" "}
                      <span className="text-slate-200 font-medium">
                        DesignVault
                      </span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold text-white">$29.99</div>
                    <span className="p-2.5 bg-primary/10 group-hover:bg-primary text-primary group-hover:text-white rounded-xl transition-all pointer-events-none">
                      <span className="material-symbols-outlined text-lg">
                        shopping_cart
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="mt-12 flex justify-center items-center gap-4">
              <button
                type="button"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-all"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary text-white font-bold"
                >
                  1
                </button>
                <button
                  type="button"
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-all font-bold"
                >
                  2
                </button>
                <button
                  type="button"
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-all font-bold"
                >
                  3
                </button>
              </div>
              <button
                type="button"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-all"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/5 bg-black/60 py-20 px-6">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center shadow-[0_0_15px_rgba(127,19,236,0.4)]">
                <span className="material-symbols-outlined text-white text-lg font-bold">
                  interests
                </span>
              </div>
              <h3 className="text-xl font-bold tracking-tighter text-white">
                ASSETVERSE
              </h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              The premier destination for elite game assets. Built for pro
              gamers, designed for the metaverse.
            </p>
            <div className="flex gap-3">
              <a
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-lg">
                  alternate_email
                </span>
              </a>
              <a
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-lg">share</span>
              </a>
              <a
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-lg">
                  videocam
                </span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">
              Marketplace
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  BGMI Items
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Valorant Skins
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Fortnite Bundles
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  UI Kits &amp; FX
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">
              Resources
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Seller Hub
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Verification
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Escrow System
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  API Docs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">
              Secure Marketplace
            </h4>
            <div className="bg-white/5 p-4 rounded-xl border border-white/5">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-neon-green">
                  verified_user
                </span>
                <span className="text-xs font-bold text-white">
                  Fraud Protection
                </span>
              </div>
              <p className="text-[10px] text-slate-500 leading-tight">
                Every transaction is protected by our proprietary AssetVerse
                Escrow security layer.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em]">
            © 2024 ASSETVERSE LTD. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
            <a
              className="text-[10px] text-slate-500 hover:text-white uppercase tracking-widest"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-[10px] text-slate-500 hover:text-white uppercase tracking-widest"
              href="#"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>

      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[800px] pointer-events-none purple-radial-glow z-[-1]"
        aria-hidden
      />
      <div
        className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none z-[-1]"
        aria-hidden
      />
    </div>
  );
}
