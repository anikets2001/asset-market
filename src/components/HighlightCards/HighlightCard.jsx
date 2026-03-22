import Image from "next/image";

export default function HighlightCard({ title, duration, imageSrc, imageAlt }) {
  return (
    <div className="flex-none w-72 h-44 rounded-xl overflow-hidden relative border border-white/5">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={288}
        height={176}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center group cursor-pointer">
        <span className="material-symbols-outlined text-white text-5xl opacity-80 group-hover:scale-110 transition-transform">
          play_circle
        </span>
      </div>
      <div className="absolute bottom-3 left-3 flex items-center gap-2">
        <span className="bg-primary/90 text-white text-[10px] font-bold px-2 py-0.5 rounded">
          {duration}
        </span>
        <span className="text-white text-sm font-medium truncate drop-shadow-md">
          {title}
        </span>
      </div>
    </div>
  );
}
