/** Deterministic order reference for handover UI (demo) */
export function handoverOrderRef(gameId, assetId) {
  const s = `${gameId}|${assetId}`;
  let h = 2166136261;
  for (let i = 0; i < s.length; i += 1) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  const num = (Math.abs(h) % 900000) + 100000;
  return `#AV-${num}-TX`;
}
