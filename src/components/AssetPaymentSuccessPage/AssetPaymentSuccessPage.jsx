import Image from "next/image";
import Link from "next/link";
import {
  gameAssetCheckoutHref,
  gameAssetHandoverChatHref,
  gameAssetHandoverHref,
  gameAssetsHref,
} from "@/lib/gameAssetsRoute";
import GameAssetsHeaderBack from "../GameAssetsPage/GameAssetsHeaderBack";

const PLACEHOLDER_USER =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA8DWBvQJTP7xDEAwQ-l06Pfn9-twkcwM0PPaliAYjEWPCSoobVmM6MAopph6733JSR610MD-RcqM2Gy-F2hE8FWKDSg3Y7-jO38sq9mfIev1eli0Dt_KxpkhKh1cQOUxtAC9ShPJsaenFQOHr6Fea4c0_nW8Yo97rgx8jYDDD6Mkkh6_hkb58XNepnq4YlX0H5tywzVqAJRBy-m5eRK-TxTSezBxFsATue-UvkNYeGbRbNXxdoJs_TsMmzK_6JXvKfwr0TKFEiPis";

export default function AssetPaymentSuccessPage({
  gameId,
  assetId,
  gameTitle,
  itemTitle,
  itemImageUrl,
  amountPaidFormatted,
  orderRef,
}) {
  const assetsHref = gameAssetsHref(gameId);
  const checkoutHref = gameAssetCheckoutHref(gameId, assetId);
  const handoverHref = gameAssetHandoverHref(gameId, assetId);
  const chatHref = gameAssetHandoverChatHref(gameId, assetId);
  const txLabel = orderRef.startsWith("#") ? orderRef.slice(1) : orderRef;

  return (
    <div className="text-slate-100 min-h-screen flex flex-col payment-success-grid checkout-scrollbar">
      <header className="sticky top-0 z-50 px-6 py-4">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 lg:gap-8 min-w-0">
          <GameAssetsHeaderBack />
          <Link href={assetsHref} className="flex items-center gap-3 min-w-0">
            <div className="bg-primary p-1.5 rounded-lg shadow-[0_0_15px_rgba(127,19,236,0.5)] shrink-0">
              <span className="material-symbols-outlined text-white font-bold text-xl">
                database
              </span>
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-100 uppercase leading-none truncate">
              Asset<span className="text-primary">Verse</span>
            </span>
          </Link>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <div className="size-8 rounded-full border border-primary/30 overflow-hidden">
              <Image
                src={PLACEHOLDER_USER}
                alt=""
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-6 -mt-8 sm:-mt-12">
        <div className="relative mb-8 flex justify-center">
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
          <div className="relative payment-success-check-glow bg-gradient-to-br from-neon-green to-primary p-6 rounded-full">
            <span className="material-symbols-outlined text-background-dark text-6xl font-black">
              check_circle
            </span>
          </div>
        </div>

        <div className="text-center mb-10 max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight text-white">
            Payment Successful
          </h1>
          <p className="text-slate-400">
            Your funds are now secured in AssetVerse Escrow. The seller has been
            notified to begin the handover.
          </p>
          <p className="mt-3 text-[11px] text-slate-600">
            {gameTitle ? (
              <>
                Order for <span className="text-slate-500">{gameTitle}</span>
              </>
            ) : null}
          </p>
        </div>

        <div className="payment-success-glass payment-success-card-accent max-w-2xl w-full rounded-3xl p-8 md:p-10 payment-success-neon-blue relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/60">
              Verified Transaction
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 mt-4">
            <div className="space-y-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">
                  Asset Purchased
                </p>
                <div className="flex items-center gap-3">
                  <div className="size-12 rounded-lg overflow-hidden border border-white/10 relative shrink-0 bg-black/30">
                    <Image
                      src={itemImageUrl}
                      alt={itemTitle}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-white truncate">{itemTitle}</p>
                    <p className="text-xs text-slate-400">
                      Transaction ID:{" "}
                      <span className="font-mono text-primary/90 uppercase">
                        {txLabel}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">
                  Amount Paid
                </p>
                <p className="text-3xl font-bold text-white tracking-tighter">
                  {amountPaidFormatted}{" "}
                  <span className="text-xs font-normal text-slate-500">USD</span>
                </p>
              </div>
            </div>

            <div className="bg-surface-dark/40 rounded-2xl border border-primary/15 p-5 flex flex-col justify-center">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary shrink-0">
                  verified_user
                </span>
                <div>
                  <p className="text-xs font-bold text-white mb-1">
                    Escrow Protection Active
                  </p>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Funds will only be released once you confirm the account
                    details and secure full access.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Link
              href={handoverHref}
              className="w-full sm:w-auto flex-1 bg-primary hover:bg-primary/90 text-white py-4 px-6 rounded-xl font-bold text-sm tracking-wider shadow-[0_4px_20px_rgba(127,19,236,0.4)] transition-all flex items-center justify-center gap-2 group"
            >
              Start account handover
              <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={chatHref}
                className="flex-1 px-6 py-4 bg-transparent border border-slate-700 hover:border-primary/50 text-slate-300 hover:text-white rounded-xl font-bold text-sm tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-lg">chat</span>
                Chat with seller
              </Link>
              <button
                type="button"
                title="Available after payment gateway integration"
                className="flex-1 px-6 py-4 bg-transparent border border-slate-700 hover:border-primary/40 text-slate-300 hover:text-white rounded-xl font-bold text-sm tracking-wider transition-all flex items-center justify-center gap-2 cursor-default"
              >
                <span className="material-symbols-outlined text-lg">
                  download
                </span>
                Download invoice
              </button>
            </div>
          </div>

          <p className="mt-6 text-center text-[11px] text-slate-500">
            <Link href={checkoutHref} className="text-primary/80 hover:underline">
              View checkout summary
            </Link>
          </p>
        </div>

        <div className="mt-14 w-full max-w-xl px-4">
          <div className="flex items-center justify-between mb-4 gap-2">
            <div className="text-center flex flex-col items-center min-w-0">
              <div className="size-3 rounded-full bg-primary mb-2 shadow-[0_0_8px_rgba(127,19,236,0.7)]" />
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                Payment
              </span>
            </div>
            <div className="flex-1 px-2 sm:px-4 min-w-0">
              <div className="payment-success-stepper-line payment-success-stepper-line-active rounded-full" />
            </div>
            <div className="text-center flex flex-col items-center min-w-0">
              <div className="size-3 rounded-full bg-slate-800 border border-slate-700 mb-2" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">
                Handover &amp; chat
              </span>
            </div>
            <div className="flex-1 px-2 sm:px-4 min-w-0">
              <div className="payment-success-stepper-line rounded-full" />
            </div>
            <div className="text-center flex flex-col items-center min-w-0">
              <div className="size-3 rounded-full bg-slate-800 border border-slate-700 mb-2" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                Completion
              </span>
            </div>
          </div>
          <p className="text-center text-[11px] text-slate-500 italic">
            Continue when you are ready — handover and chat stay in escrow.
          </p>
        </div>
      </main>

      <footer className="py-8 px-6 mt-auto">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-600 font-bold uppercase tracking-widest">
          <p>© 2024 AssetVerse Security Center • Encrypted Session</p>
          <div className="flex flex-wrap justify-center gap-8">
            <span className="hover:text-primary transition-colors flex items-center gap-1 cursor-default">
              <span className="material-symbols-outlined text-xs">shield</span>
              Security Guarantee
            </span>
            <span className="hover:text-primary transition-colors flex items-center gap-1 cursor-default">
              <span className="material-symbols-outlined text-xs">
                support_agent
              </span>
              24/7 Support
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
