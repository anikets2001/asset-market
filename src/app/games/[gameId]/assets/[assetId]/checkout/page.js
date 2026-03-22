import { notFound } from "next/navigation";
import AssetCheckoutPage from "@/components/AssetCheckoutPage/AssetCheckoutPage";
import {
  getAssetDetail,
  getCheckoutPresentation,
} from "@/data/assetDetails";
import { getGameTitle } from "@/data/gameRegistry";
import { computeCheckoutTotals } from "@/lib/checkoutMoney";

export async function generateMetadata({ params }) {
  const { assetId } = await params;
  const detail = getAssetDetail(assetId);
  if (!detail) {
    return { title: "Checkout | AssetVerse" };
  }
  return {
    title: `Checkout — ${detail.title} | AssetVerse`,
    description: "Complete your secure purchase with escrow protection.",
  };
}

export default async function Page({ params }) {
  const { gameId, assetId } = await params;
  const detail = getAssetDetail(assetId);
  if (!detail) {
    notFound();
  }

  const gameTitle = getGameTitle(gameId);
  const presentation = getCheckoutPresentation(assetId, detail);
  const totals = computeCheckoutTotals(detail.price);

  return (
    <AssetCheckoutPage
      gameId={gameId}
      assetId={assetId}
      gameTitle={gameTitle}
      itemTitle={detail.title}
      itemSubtitle={presentation.subtitle}
      itemImageUrl={presentation.imageUrl}
      totals={totals}
    />
  );
}
