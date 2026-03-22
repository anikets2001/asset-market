import GameCard from "../GameCard/GameCard";

const GAMES = [
  {
    id: "1",
    title: "Tactical Strike",
    streamCount: "1.2k",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC4wmXD7RPKiO-zu7ZN28Ys7YsYSjeuhZ9vu9Z9RWj-MAHV9SM8dACP3HYm2gBDDkGpYGYhz6GeC8CnlhkmcpB_lepnlQTt7Dp1uxdOQjj2fpXm0JBewn2a1_yoBSlOCKiMztijVlEee2yRqNP988zOBIODOSiebp7mhVH7X9HJdbO9c3PqhF2dgRhYgozclMQc-hKA746OSR56tWE0rWmEEKiK1EAf7GGNuiWHY8ArnxqbCf9DPIO6s7dl1P1pd9-wCU0BDAgrGoY",
    imageAlt: "Valorant game cover art",
  },
  {
    id: "2",
    title: "Mystic Lands",
    streamCount: "850",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAsjCDu07094PMrqWqRIamrIzZJbYVUSEaQWXIbOJ1fP6fx6dN9IE8Xwf5lPVyVc9a6BPyh12mC7_fEDHv0Z4mMHl_1BJ542UxJOM-_7zLInVOhYk5l37arrbZbke89ubW4rUE0NCp3Aa1bSEiw0kBudMzmyllEnPENK2v7xHGsbDCjibSzy-06tTnec0a27iFfb6V4UMHRD6aU_Kc3GwhCUwNSQ1HYAMv8CbZZqTgLX234qpFioNtgXnkJ3nJPrtvTHBYwLF5vvRs",
    imageAlt: "League of Legends style game cover",
  },
  {
    id: "3",
    title: "Craft World",
    streamCount: "2.4k",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBZJ3W8re6Xq1RMgif5v-57N7fHCLjQo71mb_wr_i7FPNrHqqWHO_W6AK7JOORp2XWkOdgYB7Tgmhdqg_-wlu9kbh266VTZvtCa7GOoKT6VCx4Tl1nE-DhuvhyayyFBOQMwWN_8_o24JpsL3yLQox1e4AL5iKCZOzRTMMT50epflhb5YGeF70o6bD4DQ4j41q3SzTLuf45ZtneHFzcNOhAKyCIUaQt8RZjvWDb2VjaBlp7vZBKEODKD3f-0Z6aBRpWj_oFe6npdM0A",
    imageAlt: "Minecraft style sandbox game cover",
  },
  {
    id: "4",
    title: "Nitro Speed",
    streamCount: "420",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAxY4jGj070G7Eo3fSZmGDXyMDa6f2NEuGTN53UEK_P1x-GrGWj8GY4_1kLNbR76wY6qqPZ4udUbG4pxNA8FKx-zllg5vj76381vuN6byFcaNgt5V511SaH15kHHdiz5SgR4XV_PCG9D5XQYhfqkcRoXK70XyucmHDvS8AzfYyW-fH2XVW1qAZoC6Dc1TwlxNcRbb803AW9nF2XE9ZlNOljdG3nxxtTMohVjpCfK5oDCrmd66zmD53o1w4dtqrR3TiUgBvBb5Lw-dk",
    imageAlt: "Racing game cover art",
  },
  {
    id: "5",
    title: "Last Survivor",
    streamCount: "3.1k",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCf5py2HnwcqRT_WE7I8BhJd8n_guCPt0MPQUfOw3vJspFrzq3nsCiaHujgOLs57PGkf8eJyg_lLmmHnvXgCUQT3DUbEvpL5kpyE10HODMwBDwTRxhIfNhwsZwIQPlf7zmU9sQKfYXtRlEx8YlxCyFg8rOAJvZL55Jy_j3SnJ3Znwid3E_He0zNdfdWc0X5Z-Mmx6KX09925CNgqritSjv7bDGet2OE9PeVrarcGe6vmj0eo0rMenVLf3uHw3stA_ZI_OOznPGV6Rw",
    imageAlt: "Battle Royale style game cover",
  },
];

export default function PopularGames() {
  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-100">Popular Games</h2>
        <a
          className="text-primary text-sm font-semibold hover:underline"
          href="#"
        >
          Explore All
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {GAMES.map((game) => (
          <GameCard
            key={game.id}
            gameId={game.id}
            title={game.title}
            streamCount={game.streamCount}
            imageSrc={game.imageSrc}
            imageAlt={game.imageAlt}
          />
        ))}
      </div>
    </section>
  );
}
