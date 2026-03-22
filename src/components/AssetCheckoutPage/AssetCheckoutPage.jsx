"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  gameAssetCheckoutSuccessHref,
  gameAssetDetailHref,
  gameAssetsHref,
} from "@/lib/gameAssetsRoute";

const QR_PLACEHOLDER =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCjSRcuFzztITr2M3yfay1VbSNrpth1I8-KHsfggk9SzfWLRqD8hHKNiFJU525oYYr6YfIlUD8N4weRz09_cmDsagrtLiQbVEwpwBeY-OxZ5HssXaHn1UtciqeKMAf1spNqE76fLRVf2QUBGFGhVpbEBDK3f453JC1hGVYhfL3uGCbdEEX-b6Q59gNGkj4vrn_4qPrMXNWxfXYhq05Uzy41NBLYiYkJaKJ4IEmpXi68XZO59qNLgBXTy5ZIRWwUeG1wxTXGAyexNEs";

export default function AssetCheckoutPage({
  gameId,
  assetId,
  gameTitle,
  itemTitle,
  itemSubtitle,
  itemImageUrl,
  totals,
}) {
  const [method, setMethod] = useState("upi");
  const [cryptoCurrency, setCryptoCurrency] = useState("usdt-erc20");
  const [walletAddress, setWalletAddress] = useState(
    "0x71C7656EC7ab88b098defB751B7401B5f6d8976F"
  );
  const [walletSecret, setWalletSecret] = useState("");
  const [showWalletSecret, setShowWalletSecret] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const router = useRouter();
  const detailHref = gameAssetDetailHref(gameId, assetId);
  const libraryHref = gameAssetsHref(gameId);

  const checkoutInputClass =
    "w-full h-12 rounded-xl px-4 text-sm text-slate-100 placeholder:text-slate-500 bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors";

  return (
    <div className="text-slate-100 min-h-screen flex flex-col bg-background-dark checkout-scrollbar">
      <header className="border-b border-white/10 bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between gap-4">
          <Link
            href={libraryHref}
            className="flex items-center gap-3 shrink-0 min-w-0"
          >
            <div className="bg-primary p-1.5 rounded-lg shadow-[0_0_15px_rgba(127,19,236,0.45)] shrink-0">
              <span className="material-symbols-outlined text-white font-bold text-xl">
                database
              </span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white uppercase leading-none truncate">
              Asset<span className="text-primary">Verse</span>
            </span>
          </Link>
          <div className="flex items-center gap-3 sm:gap-6 min-w-0">
            <div className="hidden sm:flex items-center gap-3 bg-primary/10 px-4 sm:px-5 py-2 rounded-full border border-primary/25">
              <span className="material-symbols-outlined text-primary text-lg shrink-0">
                verified_user
              </span>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-primary truncate">
                Middleman Escrow Enabled
              </span>
            </div>
            <div className="hidden md:block h-8 w-px bg-white/10 shrink-0" />
            <button
              type="button"
              onClick={() => router.replace(detailHref)}
              className="text-slate-400 hover:text-white transition-colors p-2 shrink-0 rounded-lg hover:bg-white/5"
              aria-label="Close checkout"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-6 bg-[radial-gradient(circle_at_50%_40%,rgba(127,19,236,0.12)_0%,rgba(10,10,10,1)_65%)]">
        <div className="max-w-[1100px] w-full checkout-glass-card checkout-neon-glow rounded-3xl overflow-hidden flex flex-col md:flex-row">
          <section className="w-full md:w-[420px] bg-surface-dark/40 p-8 border-b md:border-b-0 md:border-r border-white/10">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-8">
              Order Summary
            </h3>
            <div className="flex gap-4 mb-8">
              <div className="size-24 rounded-2xl overflow-hidden border border-white/10 flex-shrink-0 relative bg-black/30">
                <Image
                  src={itemImageUrl}
                  alt={itemTitle}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <div className="flex flex-col justify-center min-w-0">
                <h4 className="text-lg font-bold text-white mb-1 leading-snug">
                  {itemTitle}
                </h4>
                <p className="text-sm text-slate-400 line-clamp-2">
                  {itemSubtitle}
                </p>
                <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-0.5 bg-primary/15 border border-primary/25 rounded text-[10px] text-primary font-bold uppercase w-fit">
                  <span className="material-symbols-outlined text-xs">bolt</span>
                  Instant Delivery
                </div>
              </div>
            </div>
            <div className="space-y-4 border-t border-white/10 pt-8">
              <div className="flex justify-between items-center text-sm gap-4">
                <span className="text-slate-400 font-medium">Item Price</span>
                <span className="text-white font-bold tabular-nums">
                  {totals.itemFormatted}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm gap-4">
                <span className="text-slate-400 font-medium">Service Fee</span>
                <span className="text-white font-bold tabular-nums">
                  {totals.feeFormatted}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm gap-4">
                <div className="flex items-center gap-1 min-w-0">
                  <span className="text-slate-400 font-medium truncate">
                    Secure Escrow
                  </span>
                  <span className="material-symbols-outlined text-[14px] text-slate-600 shrink-0">
                    info
                  </span>
                </div>
                <span className="text-primary font-bold shrink-0">FREE</span>
              </div>
              <div className="flex justify-between items-center text-sm gap-4">
                <span className="text-slate-400 font-medium">VAT / Taxes</span>
                <span className="text-white font-bold tabular-nums">
                  {totals.taxFormatted}
                </span>
              </div>
            </div>
            <div className="mt-12 p-6 bg-black/35 rounded-2xl border border-white/10">
              <div className="flex justify-between items-end gap-4">
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">
                    Total Amount
                  </p>
                  <h2 className="text-3xl font-bold text-white tabular-nums">
                    {totals.totalFormatted}
                  </h2>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-[10px] text-primary font-bold">100% Protected</p>
                </div>
              </div>
            </div>
            <p className="mt-4 text-[10px] text-slate-600 text-center md:text-left">
              Buying for <span className="text-slate-400">{gameTitle}</span>
            </p>
          </section>

          <section className="flex-1 p-8 bg-black/25 max-h-[min(720px,calc(100vh-10rem))] overflow-y-auto checkout-scrollbar">
            <div className="flex items-center justify-between mb-8 gap-4 flex-wrap">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                Payment Method
              </h3>
              <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase">
                <span className="material-symbols-outlined text-sm">lock</span>
                Secure SSL
              </div>
            </div>

            <div className="space-y-4">
              <div
                className={`rounded-2xl p-5 cursor-pointer transition-all ${
                  method === "upi"
                    ? "checkout-payment-active"
                    : "bg-surface-dark/30 border border-white/10 hover:border-primary/30"
                }`}
                onClick={() => setMethod("upi")}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setMethod("upi");
                }}
                role="button"
                tabIndex={0}
              >
                <div
                  className={`flex items-center justify-between gap-3 ${method === "upi" ? "mb-4" : ""}`}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div
                      className={`size-10 rounded-lg flex items-center justify-center shrink-0 ${
                        method === "upi"
                          ? "bg-white"
                          : "bg-slate-800/50"
                      }`}
                    >
                      <span
                        className={`material-symbols-outlined text-2xl font-bold ${
                          method === "upi"
                            ? "text-background-dark"
                            : "text-slate-400"
                        }`}
                      >
                        qr_code_2
                      </span>
                    </div>
                    <div className="min-w-0">
                      <p
                        className={`font-bold ${
                          method === "upi" ? "text-white" : "text-slate-300"
                        }`}
                      >
                        UPI / Google Pay
                      </p>
                      <p className="text-xs text-slate-500 truncate">
                        Scan QR or enter VPA
                      </p>
                    </div>
                  </div>
                  <div
                    className={`size-5 rounded-full border-2 shrink-0 flex items-center justify-center ${
                      method === "upi" ? "border-primary" : "border-slate-700"
                    }`}
                  >
                    {method === "upi" && (
                      <div className="size-2.5 bg-primary rounded-full" />
                    )}
                  </div>
                </div>
                {method === "upi" && (
                  <div className="bg-white/5 rounded-xl p-4 flex flex-col sm:flex-row items-center gap-6 border border-white/10">
                    <div className="size-24 bg-white p-1 rounded-lg relative shrink-0">
                      <Image
                        src={QR_PLACEHOLDER}
                        alt="Payment QR code"
                        width={88}
                        height={88}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <p className="text-[11px] text-slate-400 mb-2 uppercase tracking-wider font-bold">
                        Scan to pay instantly
                      </p>
                      <div className="flex justify-center sm:justify-start gap-2 mb-2">
                        <div className="h-6 w-10 bg-slate-800 rounded animate-pulse" />
                        <div className="h-6 w-10 bg-slate-800 rounded animate-pulse" />
                        <div className="h-6 w-10 bg-slate-800 rounded animate-pulse" />
                      </div>
                      <p className="text-[10px] text-slate-500 italic">
                        Supports all major UPI apps
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div
                className={`rounded-2xl p-5 transition-all ${
                  method === "card"
                    ? "checkout-payment-active"
                    : "bg-surface-dark/30 border border-white/10 hover:border-primary/30 cursor-pointer"
                }`}
                onClick={() => setMethod("card")}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setMethod("card");
                }}
                role="button"
                tabIndex={0}
              >
                <div
                  className={`flex items-center justify-between gap-3 ${method === "card" ? "mb-6" : ""}`}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div
                      className={`size-10 rounded-lg flex items-center justify-center shrink-0 ${
                        method === "card"
                          ? "bg-primary/20"
                          : "bg-slate-800/80"
                      }`}
                    >
                      <span
                        className={`material-symbols-outlined text-2xl ${
                          method === "card" ? "text-primary" : "text-slate-400"
                        }`}
                      >
                        credit_card
                      </span>
                    </div>
                    <div>
                      <p
                        className={`font-bold ${
                          method === "card" ? "text-white" : "text-slate-300"
                        }`}
                      >
                        Credit / Debit Card
                      </p>
                      <p
                        className={`text-xs ${
                          method === "card"
                            ? "text-slate-400"
                            : "text-slate-500"
                        }`}
                      >
                        {method === "card"
                          ? "256-bit encrypted card processing"
                          : "Visa, Mastercard, Amex"}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`size-5 rounded-full border-2 shrink-0 flex items-center justify-center ${
                      method === "card" ? "border-primary" : "border-slate-700"
                    }`}
                  >
                    {method === "card" && (
                      <div className="size-2.5 bg-primary rounded-full" />
                    )}
                  </div>
                </div>

                {method === "card" && (
                  <div
                    className="space-y-4"
                    onClick={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                  >
                    <div>
                      <label
                        htmlFor="checkout-card-number"
                        className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block"
                      >
                        Card Number
                      </label>
                      <div className="relative">
                        <input
                          id="checkout-card-number"
                          type="text"
                          inputMode="numeric"
                          autoComplete="cc-number"
                          placeholder="1234 5678 9012 3456"
                          value={cardNumber}
                          onChange={(e) => {
                            const raw = e.target.value.replace(/\D/g, "").slice(0, 16);
                            const parts = raw.match(/.{1,4}/g) ?? [];
                            setCardNumber(parts.join(" "));
                          }}
                          className={`${checkoutInputClass} pl-4 pr-12 font-mono tracking-wider`}
                        />
                        <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 text-xl">
                          credit_card
                        </span>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="checkout-card-name"
                        className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block"
                      >
                        Name on Card
                      </label>
                      <input
                        id="checkout-card-name"
                        type="text"
                        autoComplete="cc-name"
                        placeholder="As shown on card"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        className={checkoutInputClass}
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="checkout-card-expiry"
                          className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block"
                        >
                          Expiry
                        </label>
                        <input
                          id="checkout-card-expiry"
                          type="text"
                          inputMode="numeric"
                          autoComplete="cc-exp"
                          placeholder="MM / YY"
                          value={cardExpiry}
                          onChange={(e) => {
                            const d = e.target.value.replace(/\D/g, "").slice(0, 4);
                            let out = d;
                            if (d.length >= 2) {
                              out = `${d.slice(0, 2)} / ${d.slice(2)}`;
                            }
                            setCardExpiry(out);
                          }}
                          className={`${checkoutInputClass} font-mono`}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="checkout-card-cvv"
                          className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block"
                        >
                          CVV
                        </label>
                        <input
                          id="checkout-card-cvv"
                          type="password"
                          inputMode="numeric"
                          autoComplete="cc-csc"
                          placeholder="•••"
                          value={cardCvv}
                          onChange={(e) =>
                            setCardCvv(
                              e.target.value.replace(/\D/g, "").slice(0, 4)
                            )
                          }
                          className={`${checkoutInputClass} font-mono`}
                        />
                      </div>
                    </div>
                    <p className="text-[10px] text-slate-500 italic flex items-start gap-1 pt-1">
                      <span className="material-symbols-outlined text-xs shrink-0 mt-0.5">
                        lock
                      </span>
                      Your card details are encrypted and never stored on our
                      servers in plain text.
                    </p>
                  </div>
                )}
              </div>

              <div
                className={`rounded-2xl p-5 transition-all ${
                  method === "crypto"
                    ? "checkout-payment-active"
                    : "bg-surface-dark/30 border border-white/10 hover:border-primary/30 cursor-pointer"
                }`}
                onClick={() => setMethod("crypto")}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setMethod("crypto");
                }}
                role="button"
                tabIndex={0}
              >
                <div
                  className={`flex items-center justify-between gap-3 ${method === "crypto" ? "mb-6" : ""}`}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div
                      className={`size-10 rounded-lg flex items-center justify-center shrink-0 ${
                        method === "crypto"
                          ? "bg-primary/20"
                          : "bg-slate-800/80"
                      }`}
                    >
                      <span
                        className={`material-symbols-outlined text-2xl ${
                          method === "crypto" ? "text-primary" : "text-slate-400"
                        }`}
                      >
                        currency_bitcoin
                      </span>
                    </div>
                    <div>
                      <p
                        className={`font-bold ${
                          method === "crypto" ? "text-white" : "text-slate-300"
                        }`}
                      >
                        Cryptocurrency
                      </p>
                      <p
                        className={`text-xs ${
                          method === "crypto"
                            ? "text-slate-400"
                            : "text-slate-500"
                        }`}
                      >
                        {method === "crypto"
                          ? "Secure Direct Blockchain Payment"
                          : "BTC, ETH, USDT (ERC20/TRC20)"}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`size-5 rounded-full border-2 shrink-0 flex items-center justify-center ${
                      method === "crypto"
                        ? "border-primary"
                        : "border-slate-700"
                    }`}
                  >
                    {method === "crypto" && (
                      <div className="size-2.5 bg-primary rounded-full" />
                    )}
                  </div>
                </div>

                {method === "crypto" && (
                  <div
                    className="space-y-4"
                    onClick={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                  >
                    <div>
                      <label
                        htmlFor="checkout-crypto-currency"
                        className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block"
                      >
                        Select Currency
                      </label>
                      <div className="relative">
                        <select
                          id="checkout-crypto-currency"
                          value={cryptoCurrency}
                          onChange={(e) => setCryptoCurrency(e.target.value)}
                          className={`${checkoutInputClass} appearance-none cursor-pointer pr-11`}
                        >
                          <option value="btc">BTC (Bitcoin)</option>
                          <option value="eth">ETH (Ethereum)</option>
                          <option value="usdt-erc20">
                            USDT (Tether - ERC20)
                          </option>
                        </select>
                        <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-primary text-xl">
                          expand_more
                        </span>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="checkout-wallet-address"
                        className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block"
                      >
                        Wallet Address
                      </label>
                      <input
                        id="checkout-wallet-address"
                        type="text"
                        value={walletAddress}
                        onChange={(e) => setWalletAddress(e.target.value)}
                        placeholder="Enter your public wallet address"
                        className={`${checkoutInputClass} font-mono tracking-tighter text-xs sm:text-sm`}
                        autoComplete="off"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">
                        Wallet Password / Private Key
                      </span>
                      <div className="flex gap-2">
                        <div className="relative flex-1">
                          <input
                            type={showWalletSecret ? "text" : "password"}
                            value={walletSecret}
                            onChange={(e) => setWalletSecret(e.target.value)}
                            placeholder="••••••••••••••••"
                            className={`${checkoutInputClass} pl-4 pr-12 font-mono text-sm`}
                            autoComplete="off"
                          />
                          <button
                            type="button"
                            onClick={() =>
                              setShowWalletSecret((prev) => !prev)
                            }
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-primary p-1 rounded-md transition-colors"
                            aria-label={
                              showWalletSecret ? "Hide secret" : "Show secret"
                            }
                          >
                            <span className="material-symbols-outlined text-lg">
                              {showWalletSecret
                                ? "visibility_off"
                                : "visibility"}
                            </span>
                          </button>
                        </div>
                        <button
                          type="button"
                          className="h-12 px-4 sm:px-6 bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 shrink-0 text-slate-200"
                        >
                          <span className="material-symbols-outlined text-sm">
                            verified
                          </span>
                          Verify
                        </button>
                      </div>
                      <p className="mt-2 text-[10px] text-slate-500 italic flex items-start gap-1">
                        <span className="material-symbols-outlined text-xs shrink-0 mt-0.5">
                          info
                        </span>
                        Validation occurs on a secure, encrypted node
                        connection
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <Link
                href={gameAssetCheckoutSuccessHref(gameId, assetId)}
                className="w-full py-5 bg-primary hover:bg-primary/90 active:scale-[0.99] transition-all rounded-2xl text-white font-black text-sm uppercase tracking-widest shadow-[0_10px_30px_-5px_rgba(127,19,236,0.5)] flex items-center justify-center gap-3"
              >
                Complete Purchase
                <span className="material-symbols-outlined font-bold">
                  arrow_forward
                </span>
              </Link>
              <div className="flex flex-wrap items-center justify-center gap-6 pt-4 opacity-50">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">security</span>
                  <span className="text-[10px] font-bold uppercase tracking-tighter">
                    PCI-DSS Compliant
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">vpn_key</span>
                  <span className="text-[10px] font-bold uppercase tracking-tighter">
                    256-Bit Encrypted
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">verified</span>
                  <span className="text-[10px] font-bold uppercase tracking-tighter">
                    Authentic Assets
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-background-dark border-t border-white/10 py-6 px-6">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-600 font-bold uppercase tracking-widest">
          <div className="flex items-center gap-2 text-center md:text-left">
            <span className="text-primary/60">●</span>
            <p>© 2024 ASSETVERSE Security Center • All rights reserved</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <span className="hover:text-primary transition-colors cursor-default">
              Refund Policy
            </span>
            <span className="hover:text-primary transition-colors cursor-default">
              Escrow Terms
            </span>
            <span className="hover:text-primary transition-colors cursor-default">
              Privacy Protection
            </span>
            <span className="hover:text-primary transition-colors cursor-default">
              24/7 Support
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
