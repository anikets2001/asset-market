"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useId, useState } from "react";
import {
  gameAssetCheckoutHref,
  gameAssetDetailHref,
  gameAssetsHref,
} from "@/lib/gameAssetsRoute";
import GameAssetsHeaderBack from "../GameAssetsPage/GameAssetsHeaderBack";

const BUYER_AVATAR =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA8DWBvQJTP7xDEAwQ-l06Pfn9-twkcwM0PPaliAYjEWPCSoobVmM6MAopph6733JSR610MD-RcqM2Gy-F2hE8FWKDSg3Y7-jO38sq9mfIev1eli0Dt_KxpkhKh1cQOUxtAC9ShPJsaenFQOHr6Fea4c0_nW8Yo97rgx8jYDDD6Mkkh6_hkb58XNepnq4YlX0H5tywzVqAJRBy-m5eRK-TxTSezBxFsATue-UvkNYeGbRbNXxdoJs_TsMmzK_6JXvKfwr0TKFEiPis";

const SELLER_AVATAR =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDjtaObb98i4-jHNi1tz-e-IimI3EqldA3keBZ-kCaoayMuDqwcbzPaPnRcoShlsSUpINL34BCZz6-IC_ZiuLKG7rEs_AEVvyeL0V8P7UqONEvGk7sAqQ0N8QgmbiUlMVybA3LkAlZgKrZimwUBBvCtZZH-aAm4ZQRTmhUyuNQNoobtzf37GSLERvjtwBM8EH8aagA3m25_zcvYxHO5DLBpZ_Za1mU3mIrhKtKfgnVl1YmhcbT3d8ZeJL85vgbNN9DzmwDDNqOCqvk";

function timeNow() {
  return new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

export default function AssetHandoverPage({
  gameId,
  assetId,
  orderRef,
  gameTitle,
  itemTitle,
  itemSubtitle,
  itemImageUrl,
  pricePaidFormatted,
  marketFeeFormatted,
  sellerDisplayName,
}) {
  const router = useRouter();
  const inputId = useId();
  const [credentialsOpen, setCredentialsOpen] = useState(false);
  const [draft, setDraft] = useState("");
  useEffect(() => {
    const id = "handover-chat";
    const scrollToChat = () => {
      if (typeof window === "undefined") return;
      if (window.location.hash !== `#${id}`) return;
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    };
    scrollToChat();
    window.addEventListener("hashchange", scrollToChat);
    return () => window.removeEventListener("hashchange", scrollToChat);
  }, []);

  const [messages, setMessages] = useState(() => [
    {
      id: "m1",
      kind: "seller",
      text: "Hi there! Thanks for the purchase. I'm preparing the account credentials and linking your recovery email now. Should take about 5 minutes.",
      time: "10:42 AM",
    },
    {
      id: "m2",
      kind: "buyer",
      text: "Sounds good. Please make sure all social links are disconnected before sharing.",
      time: "10:44 AM",
      read: true,
    },
    {
      id: "sys1",
      kind: "system",
      text: "Buyer has viewed the credentials",
    },
    {
      id: "m3",
      kind: "seller",
      text: "Everything is ready. I've posted the details in the secure box on your left. Let me know once you've secured the login.",
      time: "10:48 AM",
    },
  ]);

  const sendMessage = useCallback(() => {
    const t = draft.trim();
    if (!t) return;
    setMessages((prev) => [
      ...prev,
      {
        id: `u-${Date.now()}`,
        kind: "buyer",
        text: t,
        time: timeNow(),
        read: false,
      },
    ]);
    setDraft("");
  }, [draft]);

  const detailHref = gameAssetDetailHref(gameId, assetId);
  const checkoutHref = gameAssetCheckoutHref(gameId, assetId);
  const libraryHref = gameAssetsHref(gameId);

  return (
    <div className="text-slate-100 min-h-screen flex flex-col bg-background-dark">
      <header className="handover-glass-header sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 lg:gap-8 min-w-0">
            <GameAssetsHeaderBack />
            <Link
              href={libraryHref}
              className="flex items-center gap-3 shrink-0"
            >
              <div className="bg-primary p-1.5 rounded-lg shadow-[0_0_15px_rgba(127,19,236,0.45)]">
                <span className="material-symbols-outlined text-white font-bold text-xl">
                  database
                </span>
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-100 uppercase leading-none hidden sm:block">
                Asset<span className="text-primary">Verse</span>
              </span>
            </Link>
            <div className="hidden sm:block h-6 w-px bg-slate-800 shrink-0" />
            <div className="flex items-center gap-2 text-xs sm:text-sm min-w-0">
              <span className="text-slate-500 shrink-0">Order ID:</span>
              <span className="font-mono text-primary font-bold truncate">
                {orderRef}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <div className="hidden md:flex items-center gap-2 bg-primary/10 px-3 py-1.5 rounded-full border border-primary/30">
              <div className="size-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(127,19,236,0.8)]" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-primary">
                Escrow Protected
              </span>
            </div>
            <button
              type="button"
              className="p-2 text-slate-400 hover:text-white transition-colors"
              aria-label="Help"
            >
              <span className="material-symbols-outlined">help_outline</span>
            </button>
            <div className="size-8 rounded-full border border-primary/30 overflow-hidden relative shrink-0">
              <Image
                src={BUYER_AVATAR}
                alt="You"
                fill
                className="object-cover"
                sizes="32px"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-[1600px] mx-auto w-full p-4 sm:p-6 flex flex-col xl:flex-row gap-6 overflow-hidden min-h-0">
        {/* Left: progress + credentials */}
        <section className="w-full xl:w-80 shrink-0 flex flex-col gap-6 overflow-y-auto max-h-[min(360px,45vh)] xl:max-h-[calc(100vh-5rem)] checkout-scrollbar">
          <div className="handover-card-accent rounded-2xl p-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-8">
              Handover Progress
            </h3>
            <div className="space-y-0 relative">
              <div className="flex gap-4 pb-8 relative">
                <div className="absolute left-[11px] top-6 bottom-0 handover-stepper-line handover-stepper-line-active" />
                <div className="relative z-10 size-6 rounded-full bg-primary flex items-center justify-center shadow-[0_0_10px_rgba(127,19,236,0.5)] text-white">
                  <span className="material-symbols-outlined text-sm font-bold">
                    check
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Payment Secured</p>
                  <p className="text-[11px] text-slate-400">Funds held in Escrow</p>
                </div>
              </div>
              <div className="flex gap-4 pb-8 relative">
                <div className="absolute left-[11px] top-6 bottom-0 handover-stepper-line" />
                <div className="relative z-10 size-6 rounded-full border-2 border-primary bg-background-dark flex items-center justify-center">
                  <div className="size-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(127,19,236,0.8)]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Account Shared</p>
                  <p className="text-[11px] text-primary font-medium">
                    Awaiting credentials…
                  </p>
                </div>
              </div>
              <div className="flex gap-4 pb-8 relative">
                <div className="absolute left-[11px] top-6 bottom-0 handover-stepper-line" />
                <div className="relative z-10 size-6 rounded-full border-2 border-slate-800 bg-background-dark flex items-center justify-center">
                  <span className="text-[10px] font-bold text-slate-500 tracking-tighter">
                    03
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500">
                    Buyer Verification
                  </p>
                  <p className="text-[11px] text-slate-600">Pending step 2</p>
                </div>
              </div>
              <div className="flex gap-4 relative">
                <div className="relative z-10 size-6 rounded-full border-2 border-slate-800 bg-background-dark flex items-center justify-center">
                  <span className="text-[10px] font-bold text-slate-500 tracking-tighter">
                    04
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500">
                    Funds Released
                  </p>
                  <p className="text-[11px] text-slate-600">Final completion</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background-dark rounded-2xl p-6 handover-neon-border relative overflow-hidden group">
            <div className="absolute -top-12 -right-12 size-32 bg-primary/10 blur-3xl rounded-full pointer-events-none" />
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-primary">lock</span>
              <h4 className="text-sm font-bold text-white">Account Details</h4>
            </div>
            <div className="bg-surface-dark/50 rounded-xl border border-primary/25 p-4 relative">
              {!credentialsOpen ? (
                <div className="flex flex-col items-center justify-center py-6 text-center gap-3">
                  <span className="material-symbols-outlined text-primary/40 text-3xl">
                    visibility_off
                  </span>
                  <p className="text-xs text-slate-400 px-2 leading-relaxed">
                    Details will be revealed once the seller shares the account
                    information.
                  </p>
                  <button
                    type="button"
                    onClick={() => setCredentialsOpen(true)}
                    className="mt-2 w-full py-3 bg-primary hover:bg-primary/90 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all shadow-[0_4px_15px_rgba(127,19,236,0.35)]"
                  >
                    View Credentials
                  </button>
                </div>
              ) : (
                <div className="space-y-3 text-left py-2">
                  <p className="text-[10px] font-bold uppercase text-slate-500 tracking-wider">
                    Login (demo)
                  </p>
                  <p className="font-mono text-sm text-slate-200 break-all bg-black/40 rounded-lg px-3 py-2 border border-white/10">
                    buyer.linked@email.example
                  </p>
                  <p className="text-[10px] text-slate-500">
                    Recovery codes sent to your verified inbox. Change password
                    immediately after first login.
                  </p>
                </div>
              )}
            </div>
            <p className="mt-4 text-[10px] text-slate-500 text-center italic">
              Encryption: AES-256 Bit Secure
            </p>
          </div>
        </section>

        {/* Center: chat */}
        <section
          id="handover-chat"
          className="flex-1 min-w-0 bg-background-dark border border-slate-800 rounded-2xl flex flex-col overflow-hidden min-h-[420px] xl:min-h-[calc(100vh-8rem)] handover-card-accent scroll-mt-24"
        >
          <div className="px-4 sm:px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-surface-dark/40 gap-3">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <div className="relative shrink-0">
                <Image
                  src={SELLER_AVATAR}
                  alt={sellerDisplayName}
                  width={40}
                  height={40}
                  className="size-10 rounded-xl object-cover border border-primary/20"
                />
                <div className="absolute -bottom-1 -right-1 size-3 bg-primary border-2 border-background-dark rounded-full shadow-[0_0_5px_rgba(127,19,236,0.8)]" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-slate-100 truncate">
                    {sellerDisplayName}
                  </span>
                  <span
                    className="material-symbols-outlined text-primary text-sm material-symbol-fill shrink-0"
                    title="Verified Seller"
                  >
                    verified
                  </span>
                </div>
                <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">
                  Seller • Response time {"<"} 5m
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <button
                type="button"
                className="p-2 text-slate-400 hover:text-white transition-colors"
                aria-label="Attach file"
              >
                <span className="material-symbols-outlined">attach_file</span>
              </button>
              <button
                type="button"
                className="p-2 text-slate-400 hover:text-white transition-colors"
                aria-label="More"
              >
                <span className="material-symbols-outlined">more_vert</span>
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 checkout-scrollbar">
            <div className="flex justify-center">
              <div className="bg-primary/10 px-4 py-2 rounded-lg border border-primary/30 flex items-center gap-2 max-w-full">
                <span className="material-symbols-outlined text-primary text-base shrink-0">
                  shield_with_heart
                </span>
                <span className="text-xs font-medium text-slate-400 text-center">
                  Payment of{" "}
                  <span className="text-primary font-bold">
                    {pricePaidFormatted}
                  </span>{" "}
                  held in Escrow
                </span>
              </div>
            </div>

            {messages.map((msg) => {
              if (msg.kind === "system") {
                return (
                  <div key={msg.id} className="flex justify-center">
                    <div className="bg-primary/5 px-4 py-2 rounded-lg border border-primary/20 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-base">
                        info
                      </span>
                      <span className="text-xs font-medium text-slate-400">
                        {msg.text}
                      </span>
                    </div>
                  </div>
                );
              }
              if (msg.kind === "seller") {
                return (
                  <div key={msg.id} className="flex gap-3 max-w-[85%]">
                    <Image
                      src={SELLER_AVATAR}
                      alt=""
                      width={32}
                      height={32}
                      className="size-8 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="space-y-1 min-w-0">
                      <div className="bg-slate-800/80 text-slate-200 p-3 rounded-2xl rounded-tl-none border border-slate-700">
                        <p className="text-sm">{msg.text}</p>
                      </div>
                      <span className="text-[10px] text-slate-600">
                        {msg.time}
                      </span>
                    </div>
                  </div>
                );
              }
              return (
                <div
                  key={msg.id}
                  className="flex gap-3 max-w-[85%] ml-auto flex-row-reverse"
                >
                  <Image
                    src={BUYER_AVATAR}
                    alt=""
                    width={32}
                    height={32}
                    className="size-8 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="space-y-1 items-end flex flex-col min-w-0">
                    <div className="chat-bubble-buyer p-3 rounded-2xl rounded-tr-none font-medium">
                      <p className="text-sm">{msg.text}</p>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-slate-600">
                      <span>{msg.time}</span>
                      {msg.read && (
                        <span className="material-symbols-outlined text-sm text-primary">
                          done_all
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-4 sm:p-6 pt-2 border-t border-slate-800/80">
            <div className="relative">
              <label htmlFor={inputId} className="sr-only">
                Message {sellerDisplayName}
              </label>
              <input
                id={inputId}
                className="w-full bg-background-dark border border-slate-700 rounded-xl py-4 pl-4 pr-36 sm:pr-40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm text-white placeholder:text-slate-600"
                placeholder="Type your message…"
                type="text"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") sendMessage();
                }}
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                <button
                  type="button"
                  className="size-10 flex items-center justify-center text-slate-400 hover:text-white"
                  aria-label="Emoji"
                >
                  <span className="material-symbols-outlined">
                    sentiment_satisfied
                  </span>
                </button>
                <button
                  type="button"
                  onClick={sendMessage}
                  className="bg-primary text-white px-4 sm:px-6 py-2 rounded-lg font-bold text-xs hover:bg-primary/90 transition-transform shadow-[0_4px_12px_rgba(127,19,236,0.4)]"
                >
                  SEND
                </button>
              </div>
            </div>
            <p className="mt-2 text-[10px] text-slate-600 text-center">
              Your conversation is monitored for safety and quality assurance.
            </p>
            <p className="mt-2 text-[10px] text-slate-600 text-center">
              <Link href={checkoutHref} className="text-primary hover:underline">
                Back to checkout
              </Link>
              <span className="mx-2 text-slate-700">·</span>
              <Link href={detailHref} className="text-slate-500 hover:text-primary">
                Asset details
              </Link>
            </p>
          </div>
        </section>

        {/* Right: item + actions */}
        <section className="w-full xl:w-72 shrink-0 space-y-6 overflow-y-auto max-h-[50vh] xl:max-h-none checkout-scrollbar">
          <div className="handover-card-accent border border-slate-800 rounded-2xl overflow-hidden">
            <div className="p-5 border-b border-slate-800">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">
                Item Details
              </h3>
              <div className="rounded-xl overflow-hidden mb-4 aspect-video relative group border border-white/5">
                <Image
                  src={itemImageUrl}
                  alt={itemTitle}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 288px"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Link
                    href={detailHref}
                    className="bg-primary/25 backdrop-blur-md p-2 rounded-lg text-white"
                    aria-label="Open asset"
                  >
                    <span className="material-symbols-outlined">
                      open_in_full
                    </span>
                  </Link>
                </div>
              </div>
              <h4 className="font-bold text-white mb-1">{itemTitle}</h4>
              <p className="text-xs text-slate-400 mb-4">{itemSubtitle}</p>
              <div className="flex items-center justify-between py-3 border-t border-slate-800/50">
                <span className="text-xs text-slate-500">Price Paid</span>
                <span className="text-lg font-bold text-primary">
                  {pricePaidFormatted}
                </span>
              </div>
            </div>
            <div className="p-5 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-[11px]">
                  <span className="text-slate-500 uppercase font-bold tracking-wider">
                    Market Fee
                  </span>
                  <span className="text-slate-300">{marketFeeFormatted}</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span className="text-slate-500 uppercase font-bold tracking-wider">
                    Insurance
                  </span>
                  <span className="text-primary font-bold">Included</span>
                </div>
              </div>
              <div className="pt-4 space-y-3">
                <button
                  type="button"
                  className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">
                    download
                  </span>
                  Download Receipt
                </button>
                <button
                  type="button"
                  className="w-full py-3 bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/30 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">
                    report_problem
                  </span>
                  Open Dispute
                </button>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/30 rounded-2xl p-5 handover-neon-border relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(127,19,236,0.08),transparent)] pointer-events-none" />
            <div className="flex items-start gap-3 relative z-10">
              <span className="material-symbols-outlined text-primary text-xl shadow-[0_0_10px_rgba(127,19,236,0.25)]">
                verified_user
              </span>
              <div>
                <h5 className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
                  Safety First
                </h5>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Never share your real password or payment info in chat. Keep
                  all transactions inside AssetVerse to stay covered by our buyer
                  protection.
                </p>
              </div>
            </div>
          </div>

          <p className="text-[10px] text-slate-600 text-center xl:text-left">
            Game: <span className="text-slate-400">{gameTitle}</span>
          </p>
        </section>
      </main>

      <footer className="bg-background-dark border-t border-slate-800 py-4 px-6">
        <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-[10px] text-slate-600 font-bold uppercase tracking-widest">
          <p>© 2024 ASSETVERSE Security Center</p>
          <div className="flex flex-wrap justify-center gap-6">
            <span className="hover:text-primary transition-colors cursor-default">
              Privacy Policy
            </span>
            <span className="hover:text-primary transition-colors cursor-default">
              Safety Tips
            </span>
            <span className="hover:text-primary transition-colors cursor-default">
              Terms of Handover
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
