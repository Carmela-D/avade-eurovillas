import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { width: 120, height: 48 },
  md: { width: 150, height: 60 },
  lg: { width: 190, height: 76 },
};

export function Logo({ variant = "dark", size = "md" }: LogoProps) {
  const s = sizes[size];

  return (
    <Link
      href="/"
      className="inline-flex items-center no-underline group"
      aria-label="Adelante Eurovillas — volver al inicio"
    >
      <Image
        src="/images/logo-avade.webp"
        alt="Adelante Eurovillas"
        width={s.width}
        height={s.height}
        className={`transition-opacity duration-200 group-hover:opacity-85 ${
          variant === "light" ? "brightness-0 invert" : ""
        }`}
        priority
      />
    </Link>
  );
}
