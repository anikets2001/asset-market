/** Parse "$1,299.00" → dollars number */
export function parsePriceToDollars(priceStr) {
  if (!priceStr || typeof priceStr !== "string") return 0;
  const cleaned = priceStr.replace(/[$,\s]/g, "");
  const n = parseFloat(cleaned);
  return Number.isFinite(n) ? n : 0;
}

export function formatUsd(dollars) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(dollars);
}

/** 1% service fee (matches sample checkout) */
export function computeCheckoutTotals(itemPriceStr) {
  const item = parsePriceToDollars(itemPriceStr);
  const fee = Math.round(item * 100 * 0.01) / 100;
  const tax = 0;
  const total = Math.round((item + fee + tax) * 100) / 100;
  return {
    item,
    fee,
    tax,
    total,
    itemFormatted: formatUsd(item),
    feeFormatted: formatUsd(fee),
    taxFormatted: formatUsd(tax),
    totalFormatted: formatUsd(total),
  };
}
