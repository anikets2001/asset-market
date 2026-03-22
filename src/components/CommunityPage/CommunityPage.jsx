"use client";

import { useState } from "react";
import Image from "next/image";
import CommunityHeader from "../CommunityHeader/CommunityHeader";
import CommunitySidebar from "../CommunitySidebar/CommunitySidebar";

const DISCOVER_GUILDS = [
  {
    id: "1",
    name: "Cyber Knights",
    description:
      "A hub for high-tech strategy and nightly raid sessions. We focus on RPG and Strategy games.",
    memberCount: "4,820",
    banner:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAZO8t2qhfeyXVhTW961aU8MXT40xiGLCkBcSFLdUvWlbEDlAp1ZcFnha8HATH6-BJ23U_2PmFiUjs_yEhw2CVqIezu9rV-o9OskpzjYjHhQDZAcCy20nfzj3WiIUU9PQBCk6WHS-LEWF68W4X_jahuhKXD5BrSGrbSnynL9xYCMnfTZ9nZQPN_5Ghz0h2lOU8XOkuYo7uQTxWQQaOunnQnyuOup_ISUur4SfZis4Yo1pVlhK1WRDQLMDicLeNvpDe0wiqJEtscQcE",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4wU8jmZ2uXLGQEBDD4noOqo5Ifyl4l9695G9ERu-Ak_AnXyks6veRY2OJRi-lcNOSHt9vNQqIdit-f7b6TMAKfdk1MsPm7ThJmx_DGLO7grO_HYaqsz-MP6uXzXvQmdV4T5H081xQ1BjuCpk6FRuJ4lJCCAUi9lHvtF2F5ikHu583a1G6EbXf4gZ--A-ps9wcDQOJX6TW2Vkz8eir2VmhF7U2dXp9F5ReQNLVhNElcyk8BWlKeuTC24Qi94ivTkemB89XyuYt990",
    liveCount: 8,
    type: "live",
    avatars: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDKGtQy3nXPjQ6ntCuRTdiFb2alyh5N9vXTTrUSDBi6qYYQkkc6Cim5crlg3Vt5pWXwL_FofmJgL-KSQ5iG7O-Mv9s_lfo811Wy7-4Kz5cpsRXRwynFo8PNOJwQKGd3bhrPRq1nhNqd3RnoY5cKIHMCzi2BFHSydg6YYfuhQkMhqKGc4lcEZq6m2KokXd2_rB0083M1M2Vxj4xPsRfJBbhbF-_tER_QM0urMHPm0kgGssywdXEBsmqbXQ2TZDcllBkMRnonCzMBmUM",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAjUMaQzD3jUa9IfjugNqeC2OswVwyYL0_QwwhYQgbRGOJD3VcbH_uN2cq8dHVyVy5JD28IX3fi6yOh7l_-08dZzf88-41P-3NNMLsDDlGBE2DfxB9IjdstvUkzrtbKl9t7RAVcXsHsvodteUeJxGSL3-QkEFyGFNhJDJtHdQ5v4EON-TBhCNMBNZb_WrtKRpRgmSWpIY1Sv51JyisPhmxzaxLKD1Tmr8oLNzxiKxPx-6QgB1rGib-K2NL9DdHhI01jHIrU7rAs_lc",
    ],
    extraCount: 12,
  },
  {
    id: "2",
    name: "Pixel Paradise",
    description:
      "Chill vibes only. A community dedicated to creative builders and casual explorers in sandbox worlds.",
    memberCount: "2,150",
    banner:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCf5py2HnwcqRT_WE7I8BhJd8n_guCPt0MPQUfOw3vJspFrzq3nsCiaHujgOLs57PGkf8eJyg_lLmmHnvXgCUQT3DUbEvpL5kpyE10HODMwBDwTRxhIfNhwsZwIQPlf7zmU9sQKfYXtRlEx8YlxCyFg8rOAJvZL55Jy_j3SnJ3Znwid3E_He0zNdfdWc0X5Z-Mmx6KX09925CNgqritSjv7bDGet2OE9PeVrarcGe6vmj0eo0rMenVLf3uHw3stA_ZI_OOznPGV6Rw",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKGtQy3nXPjQ6ntCuRTdiFb2alyh5N9vXTTrUSDBi6qYYQkkc6Cim5crlg3Vt5pWXwL_FofmJgL-KSQ5iG7O-Mv9s_lfo811Wy7-4Kz5cpsRXRwynFo8PNOJwQKGd3bhrPRq1nhNqd3RnoY5cKIHMCzi2BFHSydg6YYfuhQkMhqKGc4lcEZq6m2KokXd2_rB0083M1M2Vxj4xPsRfJBbhbF-_tER_QM0urMHPm0kgGssywdXEBsmqbXQ2TZDcllBkMRnonCzMBmUM",
    type: "social",
    avatars: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCFQ3dmrcJdTXf2h8WKklNQzOvpNdkw2biCSGDQtkYr0Op5etnAvj34p9bAl48KueQpXhRtWMalDpEL8IeSU8K241RVDH8Uk0LjPY4UcSIhiWqyuib9vwwgNiYtkq8ex_m_7DiOz4I-t8zF4Q-2Yjf53J0lPhhQD4-x7SKSci_j-R2A0NR53Hf2dd42cPLvoDI9n4pQsz1u-Od6moOeaU9ZUd1Fe8WSV8UXRvB6HOS6Gn6K1RM6uLo48gI-Y59gdPyaG0MKqXqNxMc",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDHseVlGIiAkt6s5PFu0TCZl2VEYNrvhLLQDM9z2UpS88j_nSPFVzqnaF4pVTfxTrE3TlIVftAJJ2WSNqZkCajsKa5TW7FfcRvBgbSg_5PXRZ8lVcMIflqkWg5YiQFYRecL_czbunw5QEFVn1_QVaaH8kMePu2-a8PE2gieLsTKPMztP-HY60Hp91BDarUS_k7t5rV0cYAYKhYeMOHCZhKIy9Z1c5bbNufN0EoCy0_MYpCMngUbHNhsvGon2llAEv4tmFR7vZskSyk",
    ],
    extraCount: 5,
  },
  {
    id: "3",
    name: "Nitro Syndicate",
    description:
      "Speed is our creed. Join the most active racing community on PlayHub for tournaments and car meets.",
    memberCount: "1,200",
    banner:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAxY4jGj070G7Eo3fSZmGDXyMDa6f2NEuGTN53UEK_P1x-GrGWj8GY4_1kLNbR76wY6qqPZ4udUbG4pxNA8FKx-zllg5vj76381vuN6byFcaNgt5V511SaH15kHHdiz5SgR4XV_PCG9D5XQYhfqkcRoXK70XyucmHDvS8AzfYyW-fH2XVW1qAZoC6Dc1TwlxNcRbb803AW9nF2XE9ZlNOljdG3nxxtTMohVjpCfK5oDCrmd66zmD53o1w4dtqrR3TiUgBvBb5Lw-dk",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjUMaQzD3jUa9IfjugNqeC2OswVwyYL0_QwwhYQgbRGOJD3VcbH_uN2cq8dHVyVy5JD28IX3fi6yOh7l_-08dZzf88-41P-3NNMLsDDlGBE2DfxB9IjdstvUkzrtbKl9t7RAVcXsHsvodteUeJxGSL3-QkEFyGFNhJDJtHdQ5v4EON-TBhCNMBNZb_WrtKRpRgmSWpIY1Sv51JyisPhmxzaxLKD1Tmr8oLNzxiKxPx-6QgB1rGib-K2NL9DdHhI01jHIrU7rAs_lc",
    liveCount: 3,
    type: "live",
    avatars: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCFQ3dmrcJdTXf2h8WKklNQzOvpNdkw2biCSGDQtkYr0Op5etnAvj34p9bAl48KueQpXhRtWMalDpEL8IeSU8K241RVDH8Uk0LjPY4UcSIhiWqyuib9vwwgNiYtkq8ex_m_7DiOz4I-t8zF4Q-2Yjf53J0lPhhQD4-x7SKSci_j-R2A0NR53Hf2dd42cPLvoDI9n4pQsz1u-Od6moOeaU9ZUd1Fe8WSV8UXRvB6HOS6Gn6K1RM6uLo48gI-Y59gdPyaG0MKqXqNxMc",
    ],
    extraCount: 24,
  },
];

export default function CommunityPage() {
  const [sortBy, setSortBy] = useState("Most Active");
  const [viewMode, setViewMode] = useState("grid");

  return (
    <div className="relative flex min-h-screen flex-col">
      <CommunityHeader />
      <div className="flex flex-1">
        <main className="flex-1 overflow-y-auto px-8 py-6 custom-scrollbar">
          {/* Guild of the Week */}
          <section className="mb-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
                <span className="material-symbols-outlined text-yellow-500">stars</span> Guild of the Week
              </h2>
            </div>
            <div className="relative group h-[300px] w-full overflow-hidden rounded-2xl bg-surface-dark border border-white/10">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDvTeQiWxW1Yn8sKdrgVshONKn7G8_ru7KBIlN3_TmGvpAjMtci5IipFIuUmSBapL_O4NW4pN_USys5vuUMKMXor6pdIbvWeKvAJnL1XXU_gB4HvgZkPC7gr-OaQx1f3tQbEJrHWqWyhQSSkBjBr4seW9ekJ8KK4Y1CRVt3weyzL6hpt12uCYtUS2WGoozAHfKeN8UrxofV_6vbDtjX-FPAMiAw4FdW16ZqvwstPoxwGde_snBVYYmDQRoMbinpM7su9d4JM6vTvI"
                alt="Guild background hero"
                fill
                className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/60 to-transparent" />
              <div className="absolute inset-0 p-10 flex items-center">
                <div className="flex gap-8 items-center max-w-3xl">
                  <div className="size-40 rounded-3xl bg-surface-dark border-4 border-primary/30 p-4 flex items-center justify-center shadow-2xl flex-shrink-0 relative">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFQ3dmrcJdTXf2h8WKklNQzOvpNdkw2biCSGDQtkYr0Op5etnAvj34p9bAl48KueQpXhRtWMalDpEL8IeSU8K241RVDH8Uk0LjPY4UcSIhiWqyuib9vwwgNiYtkq8ex_m_7DiOz4I-t8zF4Q-2Yjf53J0lPhhQD4-x7SKSci_j-R2A0NR53Hf2dd42cPLvoDI9n4pQsz1u-Od6moOeaU9ZUd1Fe8WSV8UXRvB6HOS6Gn6K1RM6uLo48gI-Y59gdPyaG0MKqXqNxMc"
                      alt="Guild Emblem"
                      width={160}
                      height={160}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="bg-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full border border-primary/30">
                        Competitive
                      </span>
                      <span className="text-slate-400 text-sm flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">public</span> Worldwide
                      </span>
                    </div>
                    <h1 className="text-5xl font-extrabold text-white tracking-tight">Vanguard Elite</h1>
                    <p className="text-slate-300 text-lg max-w-md">
                      Dominating the competitive scene since 2022. Join our ranks for weekly tournaments and exclusive meta strategies.
                    </p>
                    <div className="flex items-center gap-8 py-2">
                      <div className="flex flex-col">
                        <span className="text-white font-bold text-xl">12.4k</span>
                        <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Members</span>
                      </div>
                      <div className="flex flex-col border-l border-white/10 pl-8">
                        <span className="text-white font-bold text-xl">42</span>
                        <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Live Now</span>
                      </div>
                      <div className="flex flex-col border-l border-white/10 pl-8">
                        <span className="text-white font-bold text-xl">#1</span>
                        <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Rank</span>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <button
                        type="button"
                        className="px-10 py-3.5 bg-primary hover:bg-primary/90 text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-xl shadow-primary/25"
                      >
                        Join Guild
                      </button>
                      <button
                        type="button"
                        className="px-10 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full font-bold border border-white/10 transition-all"
                      >
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Discover Communities */}
          <section className="mb-10">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-100">Discover Communities</h2>
                <p className="text-slate-500 text-sm">Find your next squad among thousands of active guilds</p>
              </div>
              <div className="flex items-center gap-3">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-surface-dark border-white/5 rounded-full px-4 py-2 text-sm text-slate-300 focus:ring-primary focus:border-primary"
                >
                  <option>Most Active</option>
                  <option>Newest</option>
                  <option>Highest Rank</option>
                </select>
                <div className="flex bg-surface-dark p-1 rounded-full border border-white/5">
                  <button
                    type="button"
                    onClick={() => setViewMode("grid")}
                    className={`size-8 rounded-full flex items-center justify-center ${
                      viewMode === "grid" ? "bg-primary text-white" : "text-slate-500 hover:text-white"
                    }`}
                  >
                    <span className="material-symbols-outlined text-lg">grid_view</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode("list")}
                    className={`size-8 rounded-full flex items-center justify-center ${
                      viewMode === "list" ? "bg-primary text-white" : "text-slate-500 hover:text-white"
                    }`}
                  >
                    <span className="material-symbols-outlined text-lg">format_list_bulleted</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {DISCOVER_GUILDS.map((guild) => (
                <div
                  key={guild.id}
                  className="group bg-surface-dark border border-white/5 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col h-full shadow-lg"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={guild.banner}
                      alt={`${guild.name} background`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 guild-card-gradient" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {guild.type === "live" ? (
                        <span className="bg-red-600 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded flex items-center gap-1 shadow-lg">
                          <span className="size-1.5 bg-white rounded-full animate-pulse" /> {guild.liveCount} Live
                        </span>
                      ) : (
                        <span className="bg-black/40 backdrop-blur-md text-white text-[10px] font-black uppercase px-2 py-0.5 rounded">
                          Social
                        </span>
                      )}
                    </div>
                    <div className="absolute -bottom-6 left-6">
                      <div className="relative size-20 bg-surface-dark rounded-2xl border-4 border-surface-dark shadow-xl p-3 flex items-center justify-center overflow-hidden">
                        <Image
                          src={guild.logo}
                          alt={`${guild.name} logo`}
                          fill
                          className="object-contain p-2"
                          sizes="80px"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-8 pt-10 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                        {guild.name}
                      </h3>
                      <span className="flex items-center text-slate-400 text-xs font-bold gap-1">
                        <span className="material-symbols-outlined text-sm">group</span> {guild.memberCount}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm line-clamp-2 mb-6">{guild.description}</p>
                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5">
                      <div className="flex -space-x-3">
                        {guild.avatars.map((avatar, i) => (
                          <Image
                            key={i}
                            src={avatar}
                            alt="Member"
                            width={32}
                            height={32}
                            className="size-8 rounded-full border-2 border-surface-dark"
                          />
                        ))}
                        <div className="size-8 rounded-full border-2 border-surface-dark bg-primary flex items-center justify-center text-[10px] font-bold text-white">
                          +{guild.extraCount}
                        </div>
                      </div>
                      <button
                        type="button"
                        className="px-6 py-2 bg-white/5 hover:bg-primary hover:text-white text-slate-300 rounded-full text-sm font-bold transition-all border border-white/10 hover:border-transparent"
                      >
                        Join Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
        <CommunitySidebar />
      </div>
    </div>
  );
}
