import Image from "next/image";

const MY_GUILDS = [
  {
    id: "1",
    name: "Iron Legion",
    status: "Active Raid",
    statusType: "active",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFQ3dmrcJdTXf2h8WKklNQzOvpNdkw2biCSGDQtkYr0Op5etnAvj34p9bAl48KueQpXhRtWMalDpEL8IeSU8K241RVDH8Uk0LjPY4UcSIhiWqyuib9vwwgNiYtkq8ex_m_7DiOz4I-t8zF4Q-2Yjf53J0lPhhQD4-x7SKSci_j-R2A0NR53Hf2dd42cPLvoDI9n4pQsz1u-Od6moOeaU9ZUd1Fe8WSV8UXRvB6HOS6Gn6K1RM6uLo48gI-Y59gdPyaG0MKqXqNxMc",
  },
  {
    id: "2",
    name: "Shadow Scouts",
    status: "Idle",
    statusType: "idle",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4wU8jmZ2uXLGQEBDD4noOqo5Ifyl4l9695G9ERu-Ak_AnXyks6veRY2OJRi-lcNOSHt9vNQqIdit-f7b6TMAKfdk1MsPm7ThJmx_DGLO7grO_HYaqsz-MP6uXzXvQmdV4T5H081xQ1BjuCpk6FRuJ4lJCCAUi9lHvtF2F5ikHu583a1G6EbXf4gZ--A-ps9wcDQOJX6TW2Vkz8eir2VmhF7U2dXp9F5ReQNLVhNElcyk8BWlKeuTC24Qi94ivTkemB89XyuYt990",
  },
];

const TRENDING = [
  { tag: "#CYBERPUNK2077", title: "New expansion just announced!", posts: "12.4k posts" },
  { tag: "#GUILDWARS", title: "Vanguard Elite vs Iron Legion", posts: "8.2k posts" },
];

const GUILD_CHAT = [
  { name: "PixelHero", message: "Anyone up for a dungeon run?", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHseVlGIiAkt6s5PFu0TCZl2VEYNrvhLLQDM9z2UpS88j_nSPFVzqnaF4pVTfxTrE3TlIVftAJJ2WSNqZkCajsKa5TW7FfcRvBgbSg_5PXRZ8lVcMIflqkWg5YiQFYRecL_czbunw5QEFVn1_QVaaH8kMePu2-a8PE2gieLsTKPMztP-HY60Hp91BDarUS_k7t5rV0cYAYKhYeMOHCZhKIy9Z1c5bbNufN0EoCy0_MYpCMngUbHNhsvGon2llAEv4tmFR7vZskSyk" },
  { name: "CyberCat", message: "I'm ready in 5 mins! ⚔️", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKGtQy3nXPjQ6ntCuRTdiFb2alyh5N9vXTTrUSDBi6qYYQkkc6Cim5crlg3Vt5pWXwL_FofmJgL-KSQ5iG7O-Mv9s_lfo811Wy7-4Kz5cpsRXRwynFo8PNOJwQKGd3bhrPRq1nhNqd3RnoY5cKIHMCzi2BFHSydg6YYfuhQkMhqKGc4lcEZq6m2KokXd2_rB0083M1M2Vxj4xPsRfJBbhbF-_tER_QM0urMHPm0kgGssywdXEBsmqbXQ2TZDcllBkMRnonCzMBmUM" },
];

export default function CommunitySidebar() {
  return (
    <aside className="w-80 border-l border-white/5 bg-surface-dark/50 p-6 flex flex-col gap-8">
      <div>
        <h3 className="text-slate-100 font-bold text-lg mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">diversity_3</span> Your Guilds
        </h3>
        <div className="space-y-3">
          {MY_GUILDS.map((guild) => (
            <div
              key={guild.id}
              className={`flex items-center gap-3 p-3 rounded-2xl cursor-pointer hover:bg-white/10 transition-all ${
                guild.statusType === "active"
                  ? "bg-white/5 border border-primary/20"
                  : "bg-white/5 border border-white/5"
              }`}
            >
              <div className="size-12 rounded-xl bg-surface-dark p-2 flex items-center justify-center">
                <Image
                  src={guild.logo}
                  alt={`${guild.name} logo`}
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1">
                <p className="text-slate-100 text-sm font-bold">{guild.name}</p>
                <p
                  className={`text-[10px] font-black uppercase tracking-widest ${
                    guild.statusType === "active" ? "text-primary" : "text-slate-500"
                  }`}
                >
                  {guild.status}
                </p>
              </div>
              {guild.statusType === "active" && (
                <div className="size-2 bg-primary rounded-full" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-slate-100 font-bold text-lg mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">trending_up</span> Trending Talk
        </h3>
        <div className="space-y-4">
          {TRENDING.map((item, i) => (
            <div key={i} className="cursor-pointer group">
              <p className="text-slate-500 text-xs font-bold">{item.tag}</p>
              <p className="text-slate-100 text-sm font-bold group-hover:text-primary transition-colors">
                {item.title}
              </p>
              <p className="text-slate-600 text-xs">{item.posts}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-slate-100 font-bold text-lg">Guild Chat</h3>
          <span className="bg-primary/20 text-primary text-[10px] px-2 py-0.5 rounded-full font-bold">
            34 Online
          </span>
        </div>
        <div className="bg-surface-dark/80 border border-white/5 rounded-2xl p-4 space-y-4">
          {GUILD_CHAT.map((chat, i) => (
            <div key={i} className="flex items-start gap-3">
              <Image
                src={chat.avatar}
                alt={`${chat.name} avatar`}
                width={32}
                height={32}
                className="size-8 rounded-full flex-shrink-0"
              />
              <div>
                <p className="text-slate-300 text-xs font-bold">{chat.name}</p>
                <p className="text-slate-400 text-xs bg-white/5 p-2 mt-1 rounded-lg rounded-tl-none">
                  {chat.message}
                </p>
              </div>
            </div>
          ))}
          <div className="relative mt-2">
            <input
              className="w-full bg-background-dark/50 border-white/5 rounded-xl py-2 px-3 text-xs text-slate-100 placeholder:text-slate-600 focus:ring-primary focus:border-primary"
              placeholder="Type a message..."
              type="text"
            />
            <button
              type="button"
              className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-primary text-sm"
            >
              send
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
