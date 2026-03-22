import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-white/5 bg-background-dark/80 backdrop-blur-md px-6 py-3">
      <div className="flex items-center gap-10">
        <Link href="/" className="flex items-center gap-2 text-primary">
          <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-2xl">
              sports_esports
            </span>
          </div>
          <h2 className="text-slate-100 text-xl font-extrabold leading-tight tracking-tight">
            PlayHub
          </h2>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            className="text-primary text-sm font-semibold tracking-wide border-b-2 border-primary pb-1"
            href="/"
          >
            Discover
          </Link>
          <Link
            className="text-slate-400 hover:text-slate-100 text-sm font-medium transition-colors"
            href="/library"
          >
            Library
          </Link>
          <Link
            className="text-slate-400 hover:text-slate-100 text-sm font-medium transition-colors"
            href="/community"
          >
            Community
          </Link>
          <Link
            className="text-slate-400 hover:text-slate-100 text-sm font-medium transition-colors"
            href="/store"
          >
            Store
          </Link>
        </nav>
      </div>
      <div className="flex flex-1 justify-center max-w-xl px-10">
        <div className="relative w-full">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-accent-purple text-xl">
            search
          </span>
          <input
            className="w-full bg-surface-dark border-white/5 rounded-full py-2.5 pl-12 pr-4 text-sm text-slate-100 focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-slate-500"
            placeholder="Search streamers, games, or friends..."
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        {/* <button
          type="button"
          className="hidden md:flex items-center justify-center gap-2 rounded-full h-10 px-5 bg-primary hover:bg-primary/90 text-white text-sm font-bold transition-all shadow-lg shadow-primary/20"
        >
          <span className="material-symbols-outlined text-lg">sensors</span>
          <span>Go Live</span>
        </button> */}
        <button
          type="button"
          className="relative flex items-center justify-center rounded-full h-10 w-10 bg-surface-dark text-slate-100 hover:bg-white/10 transition-colors"
        >
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2.5 size-2 bg-red-500 rounded-full ring-2 ring-background-dark" />
        </button>
        <button
          type="button"
          className="flex items-center justify-center rounded-full h-10 w-10 bg-surface-dark text-slate-100 hover:bg-white/10 transition-colors"
        >
          <span className="material-symbols-outlined">chat_bubble</span>
        </button>
        <div className="size-10 rounded-full border-2 border-primary/50 p-0.5">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHseVlGIiAkt6s5PFu0TCZl2VEYNrvhLLQDM9z2UpS88j_nSPFVzqnaF4pVTfxTrE3TlIVftAJJ2WSNqZkCajsKa5TW7FfcRvBgbSg_5PXRZ8lVcMIflqkWg5YiQFYRecL_czbunw5QEFVn1_QVaaH8kMePu2-a8PE2gieLsTKPMztP-HY60Hp91BDarUS_k7t5rV0cYAYKhYeMOHCZhKIy9Z1c5bbNufN0EoCy0_MYpCMngUbHNhsvGon2llAEv4tmFR7vZskSyk"
            alt="User profile avatar with premium border"
            width={40}
            height={40}
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
