interface PlaceholderImageProps {
  description: string;
  filename: string;
  aspectRatio?: "landscape" | "portrait" | "square" | "wide";
  className?: string;
}

const aspectRatios = {
  landscape: "pb-[56.25%]", // 16:9
  portrait: "pb-[133.33%]", // 3:4
  square: "pb-[100%]",
  wide: "pb-[40%]", // ~5:2
};

export function PlaceholderImage({
  description,
  filename,
  aspectRatio = "landscape",
  className = "",
}: PlaceholderImageProps) {
  return (
    <figure
      className={`relative overflow-hidden rounded-sm bg-avade-beige border border-avade-taupe/50 ${className}`}
      aria-label={description}
    >
      <div className={`relative ${aspectRatios[aspectRatio]}`}>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect
              x="4"
              y="8"
              width="40"
              height="30"
              rx="2"
              stroke="#A2A685"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="15" cy="18" r="4" fill="#A2A685" opacity="0.6" />
            <path
              d="M4 30 L14 20 L22 28 L30 21 L44 32"
              stroke="#A2A685"
              strokeWidth="2"
              fill="none"
              strokeLinejoin="round"
            />
            <rect x="18" y="38" width="12" height="2" rx="1" fill="#BFB6A4" />
            <rect x="22" y="38" width="4" height="4" rx="0.5" fill="#BFB6A4" />
          </svg>
          <p className="text-sm font-sans text-avade-marron-profundo font-medium leading-snug max-w-xs">
            {description}
          </p>
          <p className="text-sm font-sans text-avade-marron-oscuro">
            Sustituir por: <code className="text-avade-marron-profundo">/public/images/{filename}</code>
          </p>
        </div>
      </div>
      <figcaption className="sr-only">{description} — imagen pendiente</figcaption>
    </figure>
  );
}
