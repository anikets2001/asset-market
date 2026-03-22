import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function GameAssetsLayout({ children }) {
  return (
    <div className={`${spaceGrotesk.className} min-h-screen`}>{children}</div>
  );
}
