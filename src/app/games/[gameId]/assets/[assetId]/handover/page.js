import { notFound } from "next/navigation";
import AssetHandoverPage from "@/components/AssetHandoverPage/AssetHandoverPage";
import {
  getAssetDetail,
  getCheckoutPresentation,
} from "@/data/assetDetails";
import { getGameTitle } from "@/data/gameRegistry";
import { handoverOrderRef } from "@/lib/handoverOrderId";
import { computeCheckoutTotals } from "@/lib/checkoutMoney";

export async function generateMetadata({ params }) {
  const { assetId } = await params;
  const detail = getAssetDetail(assetId);
  if (!detail) {
    return { title: "Handover | AssetVerse" };
  }
  return {
    title: `Secure Handover — ${detail.title} | AssetVerse`,
    description:
      "Chat with the seller and complete your escrow-protected asset handover.",
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
  const orderRef = handoverOrderRef(gameId, assetId);

  return (
    <AssetHandoverPage
      gameId={gameId}
      assetId={assetId}
      orderRef={orderRef}
      gameTitle={gameTitle}
      itemTitle={detail.title}
      itemSubtitle={presentation.subtitle}
      itemImageUrl={presentation.imageUrl}
      pricePaidFormatted={totals.itemFormatted}
      marketFeeFormatted={totals.feeFormatted}
      sellerDisplayName={detail.sellerName}
    />
  );
}
