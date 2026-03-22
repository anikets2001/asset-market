"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gameAssetsHref } from "@/lib/gameAssetsRoute";
import StoreHeader from "../StoreHeader/StoreHeader";
import StoreSidebar from "../StoreSidebar/StoreSidebar";

const NEW_RELEASES = [
  {
    id: "1",
    assetsGameId: "1",
    title: "Shadow Protocol",
    genre: "Cyberpunk RPG",
    price: "$59.99",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4wmXD7RPKiO-zu7ZN28Ys7YsYSjeuhZ9vu9Z9RWj-MAHV9SM8dACP3HYm2gBDDkGpYGYhz6GeC8CnlhkmcpB_lepnlQTt7Dp1uxdOQjj2fpXm0JBewn2a1_yoBSlOCKiMztijVlEee2yRqNP988zOBIODOSiebp7mhVH7X9HJdbO9c3PqhF2dgRhYgozclMQc-hKA746OSR56tWE0rWmEEKiK1EAf7GGNuiWHY8ArnxqbCf9DPIO6s7dl1P1pd9-wCU0BDAgrGoY",
    rating: "4.8",
  },
  {
    id: "2",
    assetsGameId: "2",
    title: "Dragon's Peak",
    genre: "Open World Adventure",
    price: "$49.99",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsjCDu07094PMrqWqRIamrIzZJbYVUSEaQWXIbOJ1fP6fx6dN9IE8Xwf5lPVyVc9a6BPyh12mC7_fEDHv0Z4mMHl_1BJ542UxJOM-_7zLInVOhYk5l37arrbZbke89ubW4rUE0NCp3Aa1bSEiw0kBudMzmyllEnPENK2v7xHGsbDCjibSzy-06tTnec0a27iFfb6V4UMHRD6aU_Kc3GwhCUwNSQ1HYAMv8CbZZqTgLX234qpFioNtgXnkJ3nJPrtvTHBYwLF5vvRs",
    rating: "4.5",
  },
  {
    id: "3",
    assetsGameId: "3",
    title: "Craft Origins",
    genre: "Sandbox Creative",
    price: "$24.99",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZJ3W8re6Xq1RMgif5v-57N7fHCLjQo71mb_wr_i7FPNrHqqWHO_W6AK7JOORp2XWkOdgYB7Tgmhdqg_-wlu9kbh266VTZvtCa7GOoKT6VCx4Tl1nE-DhuvhyayyFBOQMwWN_8_o24JpsL3yLQox1e4AL5iKCZOzRTMMT50epflhb5YGeF70o6bD4DQ4j41q3SzTLuf45ZtneHFzcNOhAKyCIUaQt8RZjvWDb2VjaBlp7vZBKEODKD3f-0Z6aBRpWj_oFe6npdM0A",
    rating: "4.9",
  },
  {
    id: "4",
    assetsGameId: "4",
    title: "Velocity X",
    genre: "Racing Simulation",
    price: "$34.99",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxY4jGj070G7Eo3fSZmGDXyMDa6f2NEuGTN53UEK_P1x-GrGWj8GY4_1kLNbR76wY6qqPZ4udUbG4pxNA8FKx-zllg5vj76381vuN6byFcaNgt5V511SaH15kHHdiz5SgR4XV_PCG9D5XQYhfqkcRoXK70XyucmHDvS8AzfYyW-fH2XVW1qAZoC6Dc1TwlxNcRbb803AW9nF2XE9ZlNOljdG3nxxtTMohVjpCfK5oDCrmd66zmD53o1w4dtqrR3TiUgBvBb5Lw-dk",
    rating: "4.2",
  },
];

const SPECIAL_OFFERS = [
  {
    id: "1",
    assetsGameId: "5",
    title: "Final Survival: Enhanced",
    discount: "-60%",
    originalPrice: "$49.99",
    price: "$19.99",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCf5py2HnwcqRT_WE7I8BhJd8n_guCPt0MPQUfOw3vJspFrzq3nsCiaHujgOLs57PGkf8eJyg_lLmmHnvXgCUQT3DUbEvpL5kpyE10HODMwBDwTRxhIfNhwsZwIQPlf7zmU9sQKfYXtRlEx8YlxCyFg8rOAJvZL55Jy_j3SnJ3Znwid3E_He0zNdfdWc0X5Z-Mmx6KX09925CNgqritSjv7bDGet2OE9PeVrarcGe6vmj0eo0rMenVLf3uHw3stA_ZI_OOznPGV6Rw",
  },
  {
    id: "2",
    assetsGameId: "store-arcane",
    title: "Arcane Tactics",
    discount: "-40%",
    originalPrice: "$29.99",
    price: "$17.99",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoyp9LlAY4l5xFNmFLd3U_nfQBCbWTY7SmNN7a0HiTkJRSBHLoxgS61_CLEWY2S80MkeiTFTk8WLZtMSTlWMj535DDKL1InY-vGbnIsQZk4ZtMD_XYoznJOFnnTxOA5lQt329WRetuPlUq0sHTg_b5od43sifS8Zw1rn2T_KKvJmAuKVehvtPObjmQhFRcyKuvw95Y6-3bS241g2mu9cYfO9ZcQ62NF0VByOlj8T4oDF9G4V7KROclgRkhMJ3vnIeZKLMphFNvMEI",
  },
];

const TOP_SELLERS = [
  {
    id: "1",
    assetsGameId: "6",
    rank: "01",
    title: "Cyber Overdrive: Renegade",
    tags: "Action, Shooter",
    stars: 4,
    price: "$44.99",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGGJUkAIFr1OtFdIixicbTNvTRczzUcGzX0ybxxoEzIb9hcKZ_OBwFW0jNtSR9JKx3E_WqvLkkboyKPSB2h9oPOFd0yWoJlGCrZKQ2aSdP-u214RdCluLJADtdQ2eZRl-ENNfR1L08h5YEOIGwMY1Jp8StAIrpYS0Xvcqic_wzS-mtPBiM3MlVj_exL4YBAP48AnSFSeXzgj3rnGXmHWUMgE713IpCazjJhggo85vJ7HqnodsjkSesyaPJNFyde3AitOYTseYE1xI",
  },
  {
    id: "2",
    assetsGameId: "7",
    rank: "02",
    title: "Shadow Blade 3",
    tags: "Stealth, Adventure",
    stars: 5,
    price: "$29.99",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuARHRONQicms0IB8BQPsT4iPqXVSyU55qGK5jYDJiRVj3FXF6brITTKKpXb340NYAA2sQDlAhcJU5zM0SCxhko1WsZgJgDSTT2phOkgQXYWN-hrVZ166V6Y3KhJgXhjhdPjTOm6FoiUIcKIG7RF1oKlIT8Ffp9sAZXLwC-JqXik1gKPrwW_kfh1WBmr-x2lFVC2S50CFneJNZySfvcGn9VexOjdaitR00joD-Z1NyCfYvCTzmPbHAHcHXEf59AxPLfKquzN6f8_Gq8",
  },
  {
    id: "3",
    assetsGameId: "store-gladiators",
    rank: "03",
    title: "Gladiators of Dawn",
    tags: "Battle Royale, Strategy",
    stars: 4,
    price: "$14.99",
    halfStar: true,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgMfs1IjtAiizfo_OCbsnkx61yzfTbOJhPq9oBYT3ppCbrztqCIK-bpjy9c4DnbuXq5TkKvc8ItXH-5NzHDten5QwMSLqFGUI-lbCz2arpgTbS4_FYLV8KcM6zP2PJAsmvpDiplWLzOm51DvGGXyIpzyKiHoZ8QpvZdZRT1pQgNajr0HIiJINV3Du4PR5stGsJW2DHqujPST2C1O1EUBdTwkSh1Sv1fCKUZsLeDXF3T_oIfkq5Ut4n6vaOQ7u1ORWs0N8P8Wz_Mp0",
  },
];

export default function StorePage() {
  const [topFilter, setTopFilter] = useState("Trending");

  return (
    <div className="relative flex min-h-screen flex-col">
      <StoreHeader />
      <div className="flex flex-1">
        <StoreSidebar />
        <main className="flex-1 overflow-y-auto px-8 py-6 custom-scrollbar">
          {/* Hero - Summer Sale */}
          <section className="mb-12 relative overflow-hidden rounded-2xl group border border-white/5">
            <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZO8t2qhfeyXVhTW961aU8MXT40xiGLCkBcSFLdUvWlbEDlAp1ZcFnha8HATH6-BJ23U_2PmFiUjs_yEhw2CVqIezu9rV-o9OskpzjYjHhQDZAcCy20nfzj3WiIUU9PQBCk6WHS-LEWF68W4X_jahuhKXD5BrSGrbSnynL9xYCMnfTZ9nZQPN_5Ghz0h2lOU8XOkuYo7uQTxWQQaOunnQnyuOup_ISUur4SfZis4Yo1pVlhK1WRDQLMDicLeNvpDe0wiqJEtscQcE"
                alt="Summer Sale background"
                fill
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/60 to-transparent" />
            <div className="relative z-10 p-10 flex flex-col justify-center h-full min-h-[400px]">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500 text-black font-black text-[10px] uppercase tracking-tighter rounded-full mb-6 w-fit">
                <span className="material-symbols-outlined text-xs">local_fire_department</span> Summer Sale 2024
              </div>
              <h1 className="text-6xl font-black text-white leading-none mb-4 uppercase italic">
                Mega Deals
                <br />
                <span className="text-primary">Up to -75%</span>
              </h1>
              <p className="text-slate-300 max-w-md text-lg mb-8">
                Save big on your favorite titles from July 1st to July 14th. Limited time offers updated daily.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold text-white">02</span>
                    <span className="text-[10px] uppercase text-slate-500 font-bold">Days</span>
                  </div>
                  <div className="text-3xl font-bold text-white">:</div>
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold text-white">14</span>
                    <span className="text-[10px] uppercase text-slate-500 font-bold">Hrs</span>
                  </div>
                  <div className="text-3xl font-bold text-white">:</div>
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold text-white">45</span>
                    <span className="text-[10px] uppercase text-slate-500 font-bold">Min</span>
                  </div>
                </div>
                <button
                  type="button"
                  className="ml-6 px-10 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-black text-lg transition-all transform hover:scale-105 shadow-xl shadow-primary/30"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </section>

          {/* New Releases */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">new_releases</span> New Releases
              </h2>
              <Link href="#" className="text-primary text-sm font-semibold hover:underline">
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {NEW_RELEASES.map((game) => (
                <Link
                  key={game.id}
                  href={gameAssetsHref(game.assetsGameId)}
                  className="group bg-surface-dark/40 rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all cursor-pointer block"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={game.image}
                      alt={`${game.title} cover`}
                      fill
                      className="object-cover transition-transform group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                      <span className="material-symbols-outlined text-yellow-400 text-sm">star</span> {game.rating}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-bold mb-1 truncate">{game.title}</h3>
                    <p className="text-slate-500 text-xs mb-4">{game.genre}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-white">{game.price}</span>
                      <span
                        className="size-10 bg-primary/20 text-primary rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all"
                        aria-hidden
                      >
                        <span className="material-symbols-outlined">add_shopping_cart</span>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Special Offers */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">percent</span> Special Offers
              </h2>
              <Link href="#" className="text-primary text-sm font-semibold hover:underline">
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {SPECIAL_OFFERS.map((offer) => (
                <Link
                  key={offer.id}
                  href={gameAssetsHref(offer.assetsGameId)}
                  className="relative h-64 rounded-3xl overflow-hidden group cursor-pointer border border-white/5 block"
                >
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white font-black px-4 py-1 rounded-full text-lg shadow-lg">
                      {offer.discount}
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{offer.title}</h3>
                      <p className="text-slate-300 text-sm line-through">{offer.originalPrice}</p>
                      <p className="text-3xl font-black text-white">{offer.price}</p>
                    </div>
                    <span className="px-6 py-3 bg-primary text-white rounded-full font-bold group-hover:bg-primary/90 transition-all flex items-center gap-2">
                      <span className="material-symbols-outlined">shopping_cart</span> Buy Now
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Top Sellers */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-100">Top Sellers</h2>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setTopFilter("Global")}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold border transition-colors ${
                    topFilter === "Global"
                      ? "bg-primary text-white border-primary"
                      : "bg-white/5 text-slate-300 border-white/5 hover:bg-white/10"
                  }`}
                >
                  Global
                </button>
                <button
                  type="button"
                  onClick={() => setTopFilter("Trending")}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold border transition-colors ${
                    topFilter === "Trending"
                      ? "bg-primary text-white border-primary"
                      : "bg-white/5 text-slate-300 border-white/5 hover:bg-white/10"
                  }`}
                >
                  Trending
                </button>
              </div>
            </div>
            <div className="space-y-4">
              {TOP_SELLERS.map((item) => (
                <Link
                  key={item.id}
                  href={gameAssetsHref(item.assetsGameId)}
                  className="flex items-center gap-6 p-4 rounded-2xl bg-surface-dark/20 border border-white/5 hover:bg-surface-dark/40 transition-all group cursor-pointer"
                >
                  <span className="text-2xl font-black text-slate-700 group-hover:text-primary transition-colors w-8">
                    {item.rank}
                  </span>
                  <div className="relative size-16 rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={`${item.title} icon`}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-bold">{item.title}</h4>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-slate-500 text-xs">{item.tags}</span>
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span
                            key={i}
                            className={`material-symbols-outlined text-[14px] ${
                              i < item.stars
                                ? "text-yellow-500 fill-1"
                                : item.halfStar && i === 4
                                ? "text-slate-700"
                                : "text-yellow-500"
                            }`}
                          >
                            star
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-white font-black">{item.price}</span>
                    <span className="p-2 text-slate-400 group-hover:text-white" aria-hidden>
                      <span className="material-symbols-outlined">bookmark_add</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
