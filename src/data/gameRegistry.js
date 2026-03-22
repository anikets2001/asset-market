import { LIBRARY_GAMES } from "./libraryGames";

/** Titles for store-only or promo entries that are not in the library grid */
const ADDITIONAL_GAMES = [
  { id: "store-arcane", title: "Arcane Tactics" },
  { id: "store-gladiators", title: "Gladiators of Dawn" },
];

const additionalById = Object.fromEntries(
  ADDITIONAL_GAMES.map((g) => [g.id, g])
);

export function getGameTitle(gameId) {
  const key = String(gameId);
  const fromLibrary = LIBRARY_GAMES.find((g) => g.id === key);
  if (fromLibrary) return fromLibrary.title;
  const extra = additionalById[key];
  if (extra) return extra.title;
  return `Game ${key}`;
}
