import Link from "next/link";

interface LogoProps {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  showMonogram?: boolean;
}

const sizes = {
  sm: { monogram: 32, text: "text-lg" },
  md: { monogram: 40, text: "text-xl" },
  lg: { monogram: 52, text: "text-2xl" },
};

export function Logo({
  variant = "dark",
  size = "md",
  showMonogram = true,
}: LogoProps) {
  const s = sizes[size];
  const textColor = variant === "dark" ? "#4A3F30" : "#F2F2F2";
  const accentColor = variant === "dark" ? "#697353" : "#A2A685";
  const bgColor = variant === "dark" ? "#697353" : "#A2A685";
  const monogramColor = variant === "dark" ? "#F2F2F2" : "#3A2F22";

  return (
    <Link href="/" className="inline-flex items-center gap-3 no-underline group" aria-label="Adelante Eurovillas — volver al inicio">
      {showMonogram && (
        <svg
          width={s.monogram}
          height={s.monogram}
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="flex-shrink-0 transition-transform duration-200 group-hover:scale-105"
        >
          <circle cx="26" cy="26" r="25" fill={bgColor} />
          <circle cx="26" cy="26" r="23" fill="none" stroke={monogramColor} strokeWidth="1" strokeOpacity="0.3" />
          {/* AE monogram */}
          <text
            x="26"
            y="33"
            textAnchor="middle"
            fontFamily="Georgia, serif"
            fontSize="18"
            fontWeight="600"
            fill={monogramColor}
            letterSpacing="-0.5"
          >
            AE
          </text>
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
          className={`${s.text === "text-lg" ? "text-base" : s.text === "text-xl" ? "text-lg" : "text-xl"} font-serif font-light tracking-widest uppercase`}
          style={{ color: accentColor, letterSpacing: "0.15em" }}
        >
          Eurovillas
        </span>
      </div>
    </Link>
  );
}
