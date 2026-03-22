import { notFound } from "next/navigation";
import AssetPaymentSuccessPage from "@/components/AssetPaymentSuccessPage/AssetPaymentSuccessPage";
import {
  getAssetDetail,
  getCheckoutPresentation,
} from "@/data/assetDetails";
import { getGameTitle } from "@/data/gameRegistry";
import { computeCheckoutTotals } from "@/lib/checkoutMoney";
import { handoverOrderRef } from "@/lib/handoverOrderId";

export async function generateMetadata({ params }) {
  const { assetId } = await params;
  const detail = getAssetDetail(assetId);
  if (!detail) {
    return { title: "Payment successful | AssetVerse" };
  }
  return {
    title: `Payment Successful — ${detail.title} | AssetVerse`,
    description:
      "Your payment is secured in escrow. Start handover or chat with the seller when you are ready.",
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
    <AssetPaymentSuccessPage
      gameId={gameId}
      assetId={assetId}
      gameTitle={gameTitle}
      itemTitle={detail.title}
      itemImageUrl={presentation.imageUrl}
      amountPaidFormatted={totals.totalFormatted}
      orderRef={orderRef}
    />
  );
}
