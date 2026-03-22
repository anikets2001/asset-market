import HighlightCard from "../HighlightCards/HighlightCard";

const HIGHLIGHTS = [
  {
    id: 1,
    title: "Epic 1v5 Clutch!",
    duration: "0:45",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDgMfs1IjtAiizfo_OCbsnkx61yzfTbOJhPq9oBYT3ppCbrztqCIK-bpjy9c4DnbuXq5TkKvc8ItXH-5NzHDten5QwMSLqFGUI-lbCz2arpgTbS4_FYLV8KcM6zP2PJAsmvpDiplWLzOm51DvGGXyIpzyKiHoZ8QpvZdZRT1pQgNajr0HIiJINV3Du4PR5stGsJW2DHqujPST2C1O1EUBdTwkSh1Sv1fCKUZsLeDXF3T_oIfkq5Ut4n6vaOQ7u1ORWs0N8P8Wz_Mp0",
    imageAlt: "Tournament winning moment clip",
  },
  {
    id: 2,
    title: "World First Speedrun",
    duration: "1:12",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD7S3Tw7vhJEmDHUMXESYrzVsbaS36Ds7qvXapmC8V9jA_zWmel79pV8U8xgxqe05atZ-iatexj9bEoasqhE-bAIkU59CQTFTvYoPnKRP67QdgMHWbvBGEVH2Mum69cfVSXVLgk4GHsBWgARPB0COE91QxXKN-ekMYgZU4VvoGbMuPdYa8nb4PKCoyDDnOxMBLlACw255qRn-4vA6bmutNShP7BkPDt9S9MVm79chhIPLD2lfOpuxTZ33lCUO5y3x3kUagMNtHdDhU",
    imageAlt: "Funny glitch video thumbnail",
  },
  {
    id: 3,
    title: "New Skin Showcase",
    duration: "2:30",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCBVgnG3p36-mMC9B-xSo9ieB-UUsgZIWvxbVl9HLYe3Z55jIUO3I6aUFx0pDu7S4k94qRu-ncfQLhzGIrq0va6hNGM1ylgB9bR2l1w97-0dKiZD0bCZrGNfEnWJjgkjUaftnBgqlCAuD5D-AqdaBntEnmIWSwkxheiyLqG2pMJsWSqx8GuDuLrshQABHEpTulBvhJlGqfVJKSu15LPmDvhhnemigESJl9aj0kmUWe5FTKTuJ53TBrJpGdm1E08ITQYcc2dBi6bv9Y",
    imageAlt: "Pro match analysis clip",
  },
  {
    id: 4,
    title: "Daily Fails #42",
    duration: "0:30",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBoyp9LlAY4l5xFNmFLd3U_nfQBCbWTY7SmNN7a0HiTkJRSBHLoxgS61_CLEWY2S80MkeiTFTk8WLZtMSTlWMj535DDKL1InY-vGbnIsQZk4ZtMD_XYoznJOFnnTxOA5lQt329WRetuPlUq0sHTg_b5od43sifS8Zw1rn2T_KKvJmAuKVehvtPObjmQhFRcyKuvw95Y6-3bS241g2mu9cYfO9ZcQ62NF0VByOlj8T4oDF9G4V7KROclgRkhMJ3vnIeZKLMphFNvMEI",
    imageAlt: "Tutorial and strategy clip",
  },
];

export default function CommunityHighlights() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-2">
        <span className="material-symbols-outlined text-primary">
          auto_awesome
        </span>{" "}
        Community Highlights
      </h2>
      <div className="flex gap-6 overflow-x-auto pb-6 custom-scrollbar">
        {HIGHLIGHTS.map((item) => (
          <HighlightCard
            key={item.id}
            title={item.title}
            duration={item.duration}
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
          />
        ))}
      </div>
    </section>
  );
}
