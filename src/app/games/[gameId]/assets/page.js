import GameAssetsPage from "@/components/GameAssetsPage/GameAssetsPage";
import { getGameTitle } from "@/data/gameRegistry";

export async function generateMetadata({ params }) {
  const { gameId } = await params;
  const title = getGameTitle(gameId);
  return {
    title: `${title} Digital Assets | AssetVerse`,
    description:
      "Browse verified game assets, bundles, and skins from elite sellers.",
  };
}

export default async function Page({ params }) {
  const { gameId } = await params;
  const gameTitle = getGameTitle(gameId);

  return <GameAssetsPage gameId={gameId} gameTitle={gameTitle} />;
}
