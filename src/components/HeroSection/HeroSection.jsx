import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">bolt</span>{" "}
          Featured Creators
        </h2>
        <div className="flex gap-2">
          <button
            type="button"
            className="size-8 rounded-full bg-surface-dark flex items-center justify-center hover:bg-primary transition-colors"
          >
            <span className="material-symbols-outlined text-sm">
              chevron_left
            </span>
          </button>
          <button
            type="button"
            className="size-8 rounded-full bg-surface-dark flex items-center justify-center hover:bg-primary transition-colors"
          >
            <span className="material-symbols-outlined text-sm">
              chevron_right
            </span>
          </button>
        </div>
      </div>
      <div className="relative group aspect-[21/9] w-full overflow-hidden rounded-xl bg-surface-dark border border-white/5">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZO8t2qhfeyXVhTW961aU8MXT40xiGLCkBcSFLdUvWlbEDlAp1ZcFnha8HATH6-BJ23U_2PmFiUjs_yEhw2CVqIezu9rV-o9OskpzjYjHhQDZAcCy20nfzj3WiIUU9PQBCk6WHS-LEWF68W4X_jahuhKXD5BrSGrbSnynL9xYCMnfTZ9nZQPN_5Ghz0h2lOU8XOkuYo7uQTxWQQaOunnQnyuOup_ISUur4SfZis4Yo1pVlhK1WRDQLMDicLeNvpDe0wiqJEtscQcE"
          alt="High quality live gameplay of a futuristic shooter"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-black/20" />
        <div className="absolute top-6 left-6 flex items-center gap-3">
          {/* <div className="bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded flex items-center gap-1.5 shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
            </span>
            Live Now
          </div> */}
          {/* <div className="bg-black/50 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">visibility</span>{" "}
            4.2k
          </div> */}
        </div>
        <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-3">
              {/* <div className="size-12 rounded-full border-2 border-primary overflow-hidden relative">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFQ3dmrcJdTXf2h8WKklNQzOvpNdkw2biCSGDQtkYr0Op5etnAvj34p9bAl48KueQpXhRtWMalDpEL8IeSU8K241RVDH8Uk0LjPY4UcSIhiWqyuib9vwwgNiYtkq8ex_m_7DiOz4I-t8zF4Q-2Yjf53J0lPhhQD4-x7SKSci_j-R2A0NR53Hf2dd42cPLvoDI9n4pQsz1u-Od6moOeaU9ZUd1Fe8WSV8UXRvB6HOS6Gn6K1RM6uLo48gI-Y59gdPyaG0MKqXqNxMc"
                  alt="Pro streamer portrait avatar"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div> */}
              {/* <div>
                <p className="text-white font-bold text-lg">Astra_Gaming</p>
                <p className="text-accent-purple text-sm">
                  Playing Cyber Overdrive
                </p>
              </div> */}
            </div>
            {/* <h1 className="text-4xl font-extrabold text-white leading-tight mb-4 drop-shadow-2xl">
              Grand Finals: Regional Qualifiers Live Stream Event!
            </h1> */}
            {/* <div className="flex gap-4">
              <button
                type="button"
                className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-bold transition-all transform hover:scale-105"
              >
                Join Stream
              </button>
              <button
                type="button"
                className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full font-bold border border-white/10 transition-all"
              >
                View Schedule
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
