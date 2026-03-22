import { notFound } from "next/navigation";
import AssetDetailPage from "@/components/AssetDetailPage/AssetDetailPage";
import { getAssetDetail } from "@/data/assetDetails";
import { getGameTitle } from "@/data/gameRegistry";

export async function generateMetadata({ params }) {
  const { assetId } = await params;
  const detail = getAssetDetail(assetId);
  if (!detail) {
    return { title: "Asset not found | AssetVerse" };
  }
  return {
    title: `${detail.title} | AssetVerse`,
    description: detail.description.slice(0, 160),
  };
}

export default async function Page({ params }) {
  const { gameId, assetId } = await params;
  const detail = getAssetDetail(assetId);
  if (!detail) {
    notFound();
  }
  const gameTitle = getGameTitle(gameId);

  return (
    <AssetDetailPage
      gameId={gameId}
      assetId={assetId}
      gameTitle={gameTitle}
      detail={detail}
    />
  );
}
