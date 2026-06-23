type BadgeVariant = "green" | "amber" | "red" | "gray" | "lock";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  green: "badge-green",
  amber: "badge-amber",
  red: "badge-red",
  gray: "badge-gray",
  lock: "badge bg-avade-marron-oscuro/10 text-avade-marron-oscuro",
};

export function Badge({ variant = "gray", children, className = "" }: BadgeProps) {
  return (
    <span className={`${variantClasses[variant]} ${className}`}>
      {variant === "lock" && (
        <svg
          className="w-3 h-3 mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
            clipRule="evenodd"
          />
        </svg>
      )}
      {children}
    </span>
  );
}
