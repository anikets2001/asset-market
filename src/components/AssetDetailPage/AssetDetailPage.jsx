"use client";
import Image from "next/image";
import Link from "next/link";
import {
  gameAssetsHref,
  gameAssetCheckoutHref,
  gameAssetDetailHref,
} from "@/lib/gameAssetsRoute";
import { getAssetDetail } from "@/data/assetDetails";
import GameAssetsHeaderBack from "../GameAssetsPage/GameAssetsHeaderBack";
import AssetDetailTabs from "./AssetDetailTabs";

function StarRow({ rating }) {
  const nodes = [];
  for (let i = 1; i <= 5; i += 1) {
    if (rating >= i) {
      nodes.push(
        <span
          key={i}
          className="material-symbols-outlined text-sm material-symbol-fill"
        >
          star
        </span>
      );
    } else if (rating >= i - 0.5) {
      nodes.push(
        <span
          key={i}
          className="material-symbols-outlined text-sm material-symbol-fill"
        >
          star_half
        </span>
      );
    } else {
      nodes.push(
        <span key={i} className="material-symbols-outlined text-sm">
          star
        </span>
      );
    }
  }
  return (
    <span className="flex items-center gap-0.5 text-primary">{nodes}</span>
  );
}

export default function AssetDetailPage({ gameId, assetId, gameTitle, detail }) {
  const marketplaceHref = gameAssetsHref(gameId);
  const technicalText = `File size ${detail.meta.fileSize}. Formats: ${detail.meta.format}. Last updated ${detail.meta.published}.`;
  const descriptionContent = (
    <div className="space-y-8">
      <p className="text-lg leading-relaxed text-slate-400">{detail.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {detail.features.map((f) => (
          <div key={f.title} className="flex items-start gap-3">
            <span className="material-symbols-outlined text-primary shrink-0">
              check_circle
            </span>
            <div>
              <h4 className="font-bold text-slate-100">{f.title}</h4>
              <p className="text-sm text-slate-500">{f.text}</p>
            </div>
          </div>
        ))}
      </div>
      {detail.kitTitle && detail.kitIcons.length > 0 && (
        <div className="space-y-4 pt-4">
          <h3 className="text-xl font-bold text-slate-100">{detail.kitTitle}</h3>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2">
            {detail.kitIcons.map((item, idx) => (
              <div
                key={idx}
                className="aspect-square bg-primary/5 rounded border border-primary/20 flex items-center justify-center hover:border-primary/50 transition-colors cursor-help group relative"
              >
                <span className="material-symbols-outlined text-primary/60 group-hover:text-primary">
                  {item.icon}
                </span>
                {item.label && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-10 border border-white/10">
                    {item.label}
                  </div>
                )}
              </div>
            ))}
            {detail.kitMoreCount > 0 && (
              <div className="aspect-square bg-primary/5 rounded border border-primary/20 flex items-center justify-center">
                <span className="text-[10px] text-primary/70">
                  +{detail.kitMoreCount}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-background-dark text-slate-100 min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background-dark/85 backdrop-blur-md px-6 lg:px-12 py-3">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4 lg:gap-8">
          <div className="flex items-center gap-3 lg:gap-8 min-w-0">
            <GameAssetsHeaderBack href={marketplaceHref} />
            <Link
              href="/"
              className="flex items-center gap-2 lg:gap-3 text-primary shrink-0"
            >
              <div className="size-8 bg-primary/20 rounded flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-lg">
                  inventory_2
                </span>
              </div>
              <span className="text-slate-100 text-lg font-bold tracking-tight hidden sm:inline">
                ASSETVERSE
              </span>
            </Link>
            <div className="hidden md:flex relative w-80 max-w-[40vw]">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">
                search
              </span>
              <input
                className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-1 focus:ring-primary focus:border-primary placeholder:text-slate-500 outline-none"
                placeholder="Search assets..."
                type="search"
              />
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-8 shrink-0">
            <span className="text-sm font-medium text-slate-400 hover:text-primary transition-colors cursor-default">
              3D Assets
            </span>
            <span className="text-sm font-medium text-slate-400 hover:text-primary transition-colors cursor-default">
              2D Assets
            </span>
            <span className="text-sm font-medium text-slate-400 hover:text-primary transition-colors cursor-default">
              UI Kits
            </span>
            <span className="text-sm font-medium text-slate-400 hover:text-primary transition-colors cursor-default">
              Tools
            </span>
          </nav>
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <button
              type="button"
              className="p-2 text-slate-500 hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">shopping_cart</span>
            </button>
            <button
              type="button"
              className="hidden sm:block px-5 py-2 text-sm font-bold bg-primary text-white rounded-lg hover:bg-primary/90 transition-all"
            >
              Sign In
            </button>
            <div className="size-9 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center overflow-hidden relative">
              <Image
                src={detail.avatarUrl}
                alt="User avatar"
                fill
                className="object-cover"
                sizes="36px"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-6 lg:px-12 py-8">
        <nav
          className="flex items-center gap-2 text-sm text-slate-500 mb-6 flex-wrap"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span className="material-symbols-outlined text-xs text-slate-600">
            chevron_right
          </span>
          <Link
            href={marketplaceHref}
            replace
            className="hover:text-primary transition-colors"
          >
            {gameTitle}
          </Link>
          <span className="material-symbols-outlined text-xs text-slate-600">
            chevron_right
          </span>
          <Link
            href={marketplaceHref}
            replace
            className="hover:text-primary transition-colors"
          >
            {detail.breadcrumbCategory}
          </Link>
          <span className="material-symbols-outlined text-xs text-slate-600">
            chevron_right
          </span>
          <span className="text-slate-100 font-medium truncate max-w-[200px] sm:max-w-none">
            {detail.title}
          </span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-8">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
                {detail.title}
              </h1>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm">
                <span className="flex items-center gap-2">
                  <StarRow rating={detail.rating} />
                  <span className="font-semibold text-slate-300">
                    {detail.rating} ({detail.reviewCount} reviews)
                  </span>
                </span>
                <span className="text-slate-500">
                  by{" "}
                  <span className="text-primary hover:underline cursor-default">
                    {detail.sellerName}
                  </span>
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-white/5 border border-primary/20 relative group">
                <Image
                  src={detail.mainImage}
                  alt={detail.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                  <span className="bg-white/10 backdrop-blur-md p-4 rounded-full text-white border border-white/20">
                    <span className="material-symbols-outlined text-4xl">
                      play_arrow
                    </span>
                  </span>
                </div>
              </div>
              {detail.thumbnails.length > 0 && (
                <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
                  {detail.thumbnails.map((src, i) => (
                    <div
                      key={src}
                      className={`relative min-w-[120px] w-[120px] aspect-video rounded-lg overflow-hidden border-2 cursor-pointer transition-colors shrink-0 ${
                        i === 0
                          ? "border-primary ring-2 ring-primary/30"
                          : "border-primary/20 hover:border-primary/50"
                      }`}
                    >
                      <Image
                        src={src}
                        alt={`${detail.title} preview ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="120px"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <AssetDetailTabs
              reviewCount={detail.reviewCount}
              descriptionContent={descriptionContent}
              technicalText={technicalText}
            />
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white/5 border border-primary/20 rounded-xl p-6 shadow-xl shadow-black/20">
                <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
                  <span className="text-4xl font-black text-slate-100">
                    {detail.price}
                  </span>
                  {detail.saleBadge && (
                    <div
                      className={`px-3 py-1 rounded text-xs font-bold uppercase tracking-wider ${
                        detail.saleBadge.startsWith("Sale")
                          ? "bg-primary/20 text-primary"
                          : detail.saleBadge === "New"
                            ? "bg-neon-green/20 text-neon-green"
                            : /hot/i.test(detail.saleBadge)
                              ? "bg-red-500/20 text-red-400"
                              : "bg-primary/20 text-primary"
                      }`}
                    >
                      {detail.saleBadge}
                    </div>
                  )}
                </div>
                <div className="space-y-4 mb-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block">
                      License Type
                    </label>
                    <select className="w-full bg-background-dark border border-primary/30 rounded-lg text-sm text-slate-200 px-3 py-2.5 focus:ring-1 focus:ring-primary focus:border-primary outline-none">
                      <option>Standard License (Personal/Indie)</option>
                      <option>Extended License (Commercial)</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-3">
                    <button
                      type="button"
                      className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all"
                    >
                      <span className="material-symbols-outlined">
                        shopping_cart
                      </span>
                      Add to Cart
                    </button>
                    <Link
                      href={gameAssetCheckoutHref(gameId, assetId)}
                      className="w-full bg-white/10 hover:bg-white/15 text-white font-bold py-4 rounded-lg border border-white/10 transition-all text-center"
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-primary/20">
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">
                      File Size
                    </p>
                    <p className="text-sm font-medium text-slate-200">
                      {detail.meta.fileSize}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">
                      Format
                    </p>
                    <p className="text-sm font-medium text-slate-200">
                      {detail.meta.format}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">
                      Published
                    </p>
                    <p className="text-sm font-medium text-slate-200">
                      {detail.meta.published}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">
                      Versions
                    </p>
                    <p className="text-sm font-medium text-slate-200">
                      {detail.meta.version}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-primary/20 rounded-xl p-6">
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-2xl">
                      hardware
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-slate-100">
                      {detail.creator.name}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {detail.creator.followers} • {detail.creator.assets}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="px-4 py-2 border border-primary/40 text-xs font-bold rounded-lg hover:bg-primary/15 text-primary transition-colors shrink-0"
                  >
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-slate-100">
              More from {detail.creator.name}
            </h2>
            <span className="text-primary text-sm font-bold flex items-center gap-1 cursor-default">
              View Studio Profile
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {detail.related.map((item) => {
              const target = getAssetDetail(item.slug);
              const href = target
                ? gameAssetDetailHref(gameId, item.slug)
                : marketplaceHref;
              return (
                <Link
                  key={item.slug}
                  href={href}
                  replace={!target}
                  className="group bg-white/5 border border-primary/20 rounded-xl overflow-hidden hover:border-primary/50 transition-all block"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, 25vw"
                    />
                    <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-md px-2 py-1 rounded text-xs font-bold text-white">
                      {item.price}
                    </div>
                  </div>
                  <div className="p-4 space-y-1">
                    <h4 className="font-bold text-slate-100 group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500">{item.subtitle}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>

      <footer className="mt-20 border-t border-primary/20 py-12 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-primary">
              <span className="material-symbols-outlined text-xl">
                inventory_2
              </span>
              <span className="text-slate-100 text-lg font-bold">ASSETVERSE</span>
            </div>
            <p className="text-sm text-slate-500 max-w-xs">
              The premier marketplace for game developers and digital artists to
              find high-quality ready-to-use assets.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-slate-100">
                Marketplace
              </h4>
              <ul className="text-sm text-slate-500 space-y-2">
                <li>
                  <span className="hover:text-primary transition-colors cursor-default">
                    3D Models
                  </span>
                </li>
                <li>
                  <span className="hover:text-primary transition-colors cursor-default">
                    Textures
                  </span>
                </li>
                <li>
                  <span className="hover:text-primary transition-colors cursor-default">
                    Scripts
                  </span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-slate-100">
                Support
              </h4>
              <ul className="text-sm text-slate-500 space-y-2">
                <li>
                  <span className="hover:text-primary transition-colors cursor-default">
                    Help Center
                  </span>
                </li>
                <li>
                  <span className="hover:text-primary transition-colors cursor-default">
                    Licenses
                  </span>
                </li>
                <li>
                  <span className="hover:text-primary transition-colors cursor-default">
                    Refunds
                  </span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-slate-100">
                Company
              </h4>
              <ul className="text-sm text-slate-500 space-y-2">
                <li>
                  <span className="hover:text-primary transition-colors cursor-default">
                    About Us
                  </span>
                </li>
                <li>
                  <span className="hover:text-primary transition-colors cursor-default">
                    Blog
                  </span>
                </li>
                <li>
                  <span className="hover:text-primary transition-colors cursor-default">
                    Careers
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto mt-12 pt-8 border-t border-primary/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-slate-500">
          <p>© 2024 ASSETVERSE. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-primary cursor-default">Privacy Policy</span>
            <span className="hover:text-primary cursor-default">Terms of Service</span>
          </div>
        </div>
      </footer>

      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none purple-radial-glow z-[-1]"
        aria-hidden
      />
    </div>
  );
}
