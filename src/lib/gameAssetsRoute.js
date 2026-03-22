/**
 * Canonical URL for the per-game assets marketplace (linked from home, library, store, etc.).
 */
export function gameAssetsHref(gameId) {
  return `/games/${encodeURIComponent(String(gameId))}/assets`;
}

/** Single asset detail within a game's marketplace */
export function gameAssetDetailHref(gameId, assetId) {
  return `/games/${encodeURIComponent(String(gameId))}/assets/${encodeURIComponent(String(assetId))}`;
}

export function gameAssetCheckoutHref(gameId, assetId) {
  return `${gameAssetDetailHref(gameId, assetId)}/checkout`;
}

/** Shown after “Complete purchase” (demo — real flow will follow gateway callback). */
export function gameAssetCheckoutSuccessHref(gameId, assetId) {
  return `${gameAssetCheckoutHref(gameId, assetId)}/success`;
}

/** Post-purchase escrow chat & credential handover */
export function gameAssetHandoverHref(gameId, assetId) {
  return `${gameAssetDetailHref(gameId, assetId)}/handover`;
}

/** Same as handover, scrolls to the seller chat panel. */
export function gameAssetHandoverChatHref(gameId, assetId) {
  return `${gameAssetHandoverHref(gameId, assetId)}#handover-chat`;
}
