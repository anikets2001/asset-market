import Image from "next/image";
import Link from "next/link";
import { gameAssetsHref } from "@/lib/gameAssetsRoute";

export default function GameCard({
  gameId,
  title,
  streamCount,
  imageSrc,
  imageAlt,
}) {
  return (
    <Link
      href={gameAssetsHref(gameId)}
      className="group relative block aspect-[3/4] rounded-xl overflow-hidden bg-surface-dark border border-white/5 cursor-pointer"
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-4 left-4 right-4">
        <h3 className="text-white font-bold text-lg">{title}</h3>
        <p className="text-accent-purple text-xs font-medium flex items-center gap-1">
          <span className="size-1.5 rounded-full bg-primary" /> {streamCount}{" "}
          Streaming
        </p>
      </div>
    </Link>
  );
}
