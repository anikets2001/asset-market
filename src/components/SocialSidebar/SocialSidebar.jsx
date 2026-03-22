import Image from "next/image";
import Link from "next/link";
import { gameAssetsHref } from "@/lib/gameAssetsRoute";

const FRIENDS = [
  {
    id: 1,
    name: "PixelHero_99",
    status: "Playing Valorant",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC4wU8jmZ2uXLGQEBDD4noOqo5Ifyl4l9695G9ERu-Ak_AnXyks6veRY2OJRi-lcNOSHt9vNQqIdit-f7b6TMAKfdk1MsPm7ThJmx_DGLO7grO_HYaqsz-MP6uXzXvQmdV4T5H081xQ1BjuCpk6FRuJ4lJCCAUi9lHvtF2F5ikHu583a1G6EbXf4gZ--A-ps9wcDQOJX6TW2Vkz8eir2VmhF7U2dXp9F5ReQNLVhNElcyk8BWlKeuTC24Qi94ivTkemB89XyuYt990",
    online: true,
  },
  {
    id: 2,
    name: "CyberCat",
    status: "Lobby: Ranked 5v5",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDKGtQy3nXPjQ6ntCuRTdiFb2alyh5N9vXTTrUSDBi6qYYQkkc6Cim5crlg3Vt5pWXwL_FofmJgL-KSQ5iG7O-Mv9s_lfo811Wy7-4Kz5cpsRXRwynFo8PNOJwQKGd3bhrPRq1nhNqd3RnoY5cKIHMCzi2BFHSydg6YYfuhQkMhqKGc4lcEZq6m2KokXd2_rB0083M1M2Vxj4xPsRfJBbhbF-_tER_QM0urMHPm0kgGssywdXEBsmqbXQ2TZDcllBkMRnonCzMBmUM",
    online: true,
  },
  {
    id: 3,
    name: "NightOwl",
    status: "Offline - 2h ago",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAjUMaQzD3jUa9IfjugNqeC2OswVwyYL0_QwwhYQgbRGOJD3VcbH_uN2cq8dHVyVy5JD28IX3fi6yOh7l_-08dZzf88-41P-3NNMLsDDlGBE2DfxB9IjdstvUkzrtbKl9t7RAVcXsHsvodteUeJxGSL3-QkEFyGFNhJDJtHdQ5v4EON-TBhCNMBNZb_WrtKRpRgmSWpIY1Sv51JyisPhmxzaxLKD1Tmr8oLNzxiKxPx-6QgB1rGib-K2NL9DdHhI01jHIrU7rAs_lc",
    online: false,
  },
];

const QUICK_LAUNCH = [
  {
    id: 1,
    assetsGameId: "6",
    title: "Cyber Overdrive",
    lastPlayed: "Today",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDGGJUkAIFr1OtFdIixicbTNvTRczzUcGzX0ybxxoEzIb9hcKZ_OBwFW0jNtSR9JKx3E_WqvLkkboyKPSB2h9oPOFd0yWoJlGCrZKQ2aSdP-u214RdCluLJADtdQ2eZRl-ENNfR1L08h5YEOIGwMY1Jp8StAIrpYS0Xvcqic_wzS-mtPBiM3MlVj_exL4YBAP48AnSFSeXzgj3rnGXmHWUMgE713IpCazjJhggo85vJ7HqnodsjkSesyaPJNFyde3AitOYTseYE1xI",
  },
  {
    id: 2,
    assetsGameId: "7",
    title: "Shadow Blade",
    lastPlayed: "Yesterday",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuARHRONQicms0IB8BQPsT4iPqXVSyU55qGK5jYDJiRVj3FXF6brITTKKpXb340NYAA2sQDlAhcJU5zM0SCxhko1WsZgJgDSTT2phOkgQXYWN-hrVZ166V6Y3KhJgXhjhdPjTOm6FoiUIcKIG7RF1oKlIT8Ffp9sAZXLwC-JqXik1gKPrwW_kfh1WBmr-x2lFVC2S50CFneJNZySfvcGn9VexOjdaitR00joD-Z1NyCfYvCTzmPbHAHcHXEf59AxPLfKquzN6f8_Gq8",
  },
];

export default function SocialSidebar() {
  return (
    <aside className="w-80 border-l border-white/5 bg-surface-dark/50 p-6 flex flex-col gap-8">
      {/* Friends Online Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-slate-100 font-bold text-lg flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">group</span>{" "}
            Social
          </h3>
          <span className="text-accent-purple text-xs font-bold bg-primary/20 px-2 py-0.5 rounded-full">
            12 Online
          </span>
        </div>
        <div className="space-y-4">
          {FRIENDS.map((friend) => (
            <div
              key={friend.id}
              className="flex items-center gap-3 group cursor-pointer p-2 rounded-xl hover:bg-white/5 transition-colors"
            >
              <div className="relative">
                <div
                  className={`size-11 rounded-full border-2 p-0.5 ${
                    friend.online ? "border-green-500" : "border-primary/40 opacity-60"
                  }`}
                >
                  <Image
                    src={friend.avatar}
                    alt={friend.online ? "Friend avatar online" : "Friend avatar away"}
                    width={44}
                    height={44}
                    className="rounded-full"
                  />
                </div>
                <div
                  className={`absolute bottom-0 right-0 size-3 rounded-full border-2 border-surface-dark ${
                    friend.online ? "bg-green-500" : "bg-slate-500"
                  }`}
                />
              </div>
              <div className="flex-1">
                <p
                  className={`text-sm font-bold transition-colors ${
                    friend.online
                      ? "text-slate-100 group-hover:text-primary"
                      : "text-slate-500"
                  }`}
                >
                  {friend.name}
                </p>
                <p
                  className={`text-xs truncate ${
                    friend.online ? "text-slate-500" : "text-slate-600"
                  }`}
                >
                  {friend.status}
                </p>
              </div>
              <button
                type="button"
                className={`material-symbols-outlined transition-colors ${
                  friend.online ? "text-slate-500 hover:text-white" : "text-slate-700"
                }`}
              >
                send
              </button>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="w-full mt-4 py-2 text-slate-400 text-xs font-bold hover:text-white border border-white/5 rounded-lg hover:bg-white/5 transition-all"
        >
          View All Friends
        </button>
      </div>

      {/* Quick Launch Section */}
      <div className="mt-10">
        <h3 className="text-slate-100 font-bold text-lg mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">
            rocket_launch
          </span>{" "}
          Quick Launch
        </h3>
        <div className="space-y-3">
          {QUICK_LAUNCH.map((game) => (
            <Link
              key={game.id}
              href={gameAssetsHref(game.assetsGameId)}
              className="flex items-center gap-4 bg-white/5 p-3 rounded-xl border border-white/5 hover:border-primary/50 cursor-pointer transition-all group"
            >
              <div className="size-12 rounded-lg bg-surface-dark overflow-hidden flex-shrink-0 relative w-12 h-12">
                <Image
                  src={game.imageSrc}
                  alt="Recently played game icon"
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-slate-100 text-sm font-bold">{game.title}</p>
                <p className="text-slate-500 text-[10px] uppercase font-bold tracking-wider">
                  Last Played: {game.lastPlayed}
                </p>
              </div>
              <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                play_arrow
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Guild Banner */}
      <div className="relative h-40 rounded-2xl overflow-hidden group cursor-pointer">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDvTeQiWxW1Yn8sKdrgVshONKn7G8_ru7KBIlN3_TmGvpAjMtci5IipFIuUmSBapL_O4NW4pN_USys5vuUMKMXor6pdIbvWeKvAJnL1XXU_gB4HvgZkPC7gr-OaQx1f3tQbEJrHWqWyhQSSkBjBr4seW9ekJ8KK4Y1CRVt3weyzL6hpt12uCYtUS2WGoozAHfKeN8UrxofV_6vbDtjX-FPAMiAw4FdW16ZqvwstPoxwGde_snBVYYmDQRoMbinpM7su9d4JM6vTvI"
          alt="Guild recruitment banner background"
          fill
          className="object-cover transition-transform group-hover:scale-110"
          sizes="320px"
        />
        <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
        <div className="absolute inset-0 p-4 flex flex-col justify-end">
          <p className="text-white text-xs font-black uppercase tracking-widest mb-1">
            Join a Guild
          </p>
          <p className="text-white font-bold">Find your team today</p>
          <button
            type="button"
            className="mt-2 text-[10px] font-bold bg-white text-primary px-3 py-1.5 rounded-full w-fit"
          >
            Discover Guilds
          </button>
        </div>
      </div>
    </aside>
  );
}
