import Link from "next/link";

interface LogoProps {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  showMonogram?: boolean;
}

const sizes = {
  sm: { width: 58, height: 38, text: "text-lg" },
  md: { width: 72, height: 47, text: "text-xl" },
  lg: { width: 90, height: 59, text: "text-2xl" },
};

export function Logo({
  variant = "dark",
  size = "md",
  showMonogram = true,
}: LogoProps) {
  const s = sizes[size];
  const textColor = variant === "dark" ? "#4A3F30" : "#F2F2F2";
  const accentColor = variant === "dark" ? "#697353" : "#A2A685";
  const houseColor = variant === "dark" ? "#5C3A18" : "white";
  // Use different IDs per variant so header+footer gradients don't collide
  const g = variant === "dark" ? "avd" : "avl";

  return (
    <Link
      href="/"
      className="inline-flex items-center gap-3 no-underline group"
      aria-label="Adelante Eurovillas — volver al inicio"
    >
      {showMonogram && (
        <svg
          width={s.width}
          height={s.height}
          viewBox="0 0 110 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="flex-shrink-0 transition-transform duration-200 group-hover:scale-105"
        >
          <defs>
            {/* Outer ambient glow */}
            <radialGradient
              id={`${g}-glow`}
              cx="55"
              cy="68"
              r="65"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#FFB020" stopOpacity="0.55" />
              <stop offset="55%" stopColor="#F08010" stopOpacity="0.20" />
              <stop offset="100%" stopColor="#F07010" stopOpacity="0" />
            </radialGradient>
            {/* Inner sun centre */}
            <radialGradient
              id={`${g}-sun`}
              cx="55"
              cy="68"
              r="26"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#FFC030" />
              <stop offset="65%" stopColor="#F09020" stopOpacity="0.78" />
              <stop offset="100%" stopColor="#F07010" stopOpacity="0" />
            </radialGradient>
            {/* Clip to upper half only */}
            <clipPath id={`${g}-clip`}>
              <rect x="0" y="0" width="110" height="68" />
            </clipPath>
          </defs>

          {/* Ambient orange glow behind everything */}
          <ellipse cx="55" cy="68" rx="60" ry="52" fill={`url(#${g}-glow)`} />

          {/* 4 concentric white arcs */}
          <g
            clipPath={`url(#${g}-clip)`}
            fill="none"
            stroke="white"
            strokeLinecap="round"
          >
            <path d="M 37,68 A 18,18 0 0 1 73,68" strokeWidth="5.5" />
            <path d="M 27,68 A 28,28 0 0 1 83,68" strokeWidth="4.5" />
            <path d="M 17,68 A 38,38 0 0 1 93,68" strokeWidth="3.5" />
            <path d="M 5,68 A 50,50 0 0 1 105,68" strokeWidth="3" />
          </g>

          {/* 5 radial spokes dividing semicircle into 4 sectors */}
          <g
            clipPath={`url(#${g}-clip)`}
            stroke="white"
            strokeLinecap="round"
          >
            <line x1="55" y1="68" x2="5" y2="68" strokeWidth="3" />
            <line x1="55" y1="68" x2="20" y2="33" strokeWidth="3" />
            <line x1="55" y1="68" x2="55" y2="18" strokeWidth="3.5" />
            <line x1="55" y1="68" x2="90" y2="33" strokeWidth="3" />
            <line x1="55" y1="68" x2="105" y2="68" strokeWidth="3" />
          </g>

          {/* Orange sun centre blob */}
          <ellipse
            cx="55"
            cy="68"
            rx="22"
            ry="14"
            fill={`url(#${g}-sun)`}
            clipPath={`url(#${g}-clip)`}
          />

          {/* House silhouettes at horizon */}
          <g fill={houseColor} clipPath={`url(#${g}-clip)`}>
            <rect x="22" y="61" width="7" height="8" />
            <polygon points="22,61 25.5,55 29,61" />
            <rect x="31" y="59" width="9" height="10" />
            <polygon points="31,59 35.5,52 40,59" />
            <rect x="42" y="57" width="10" height="12" />
            <polygon points="42,57 47,50 52,57" />
            {/* Chimney */}
            <rect x="53" y="56" width="3" height="13" />
            <rect x="57" y="57" width="10" height="12" />
            <polygon points="57,57 62,50 67,57" />
            <rect x="69" y="59" width="9" height="10" />
            <polygon points="69,59 73.5,52 78,59" />
            <rect x="80" y="61" width="7" height="8" />
            <polygon points="80,61 83.5,55 87,61" />
          </g>

          {/* Ground horizon line */}
          <line
            x1="8"
            y1="68"
            x2="102"
            y2="68"
            stroke="white"
            strokeWidth="1.2"
            strokeOpacity="0.35"
          />
        </svg>
      )}

      <div className="flex flex-col leading-none">
        <span
          className={`${s.text} font-serif font-semibold tracking-tight`}
          style={{ color: textColor }}
        >
          Adelante
        </span>
        <span
          className={`${
            s.text === "text-lg"
              ? "text-base"
              : s.text === "text-xl"
              ? "text-lg"
              : "text-xl"
          } font-serif font-light uppercase`}
          style={{ color: accentColor, letterSpacing: "0.15em" }}
        >
          Eurovillas
        </span>
      </div>
    </Link>
  );
}
