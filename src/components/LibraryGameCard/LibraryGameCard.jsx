import Image from "next/image";
import Link from "next/link";
import { gameAssetsHref } from "@/lib/gameAssetsRoute";

export default function LibraryGameCard({
  gameId,
  title,
  imageSrc,
  imageAlt,
  hoursPlayed,
  achievements,
}) {
  return (
    <Link
      href={gameAssetsHref(gameId)}
      className="group game-card-hover relative block aspect-[2/3] rounded-2xl overflow-hidden bg-surface-dark border border-white/5 cursor-pointer"
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, (max-width: 1536px) 20vw, 16vw"
      />
      <div className="game-card-overlay absolute inset-0 bg-background-dark/90 opacity-0 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
        <span
          className="size-16 rounded-full bg-primary flex items-center justify-center text-white mb-6 transform scale-90 group-hover:scale-100 transition-transform shadow-xl shadow-primary/20 pointer-events-none"
          aria-hidden
        >
          <span className="material-symbols-outlined text-3xl">play_arrow</span>
        </span>
        <div className="game-card-info transition-transform duration-300 space-y-3">
          <h3 className="text-white font-bold text-lg">{title}</h3>
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-center gap-2 text-slate-400 text-xs">
              <span className="material-symbols-outlined text-sm">schedule</span>
              <span>{hoursPlayed} Played</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-slate-400 text-xs">
              <span className="material-symbols-outlined text-sm">
                emoji_events
              </span>
              <span>{achievements}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
