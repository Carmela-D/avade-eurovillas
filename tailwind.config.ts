import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        avade: {
          "verde-oscuro": "#697353",
          "verde-claro": "#A2A685",
          taupe: "#BFB6A4",
          beige: "#D9D0BF",
          "casi-blanco": "#F2F2F2",
          "marron-oscuro": "#4A3F30",
          "marron-profundo": "#3A2F22",
          "verde-hover": "#5a6245",
          "verde-claro-hover": "#8d9171",
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-source-sans)", "system-ui", "sans-serif"],
      },
      typography: {
        avade: {
          css: {
            "--tw-prose-body": "#4A3F30",
            "--tw-prose-headings": "#3A2F22",
            "--tw-prose-links": "#697353",
            "--tw-prose-bold": "#3A2F22",
            "--tw-prose-counters": "#697353",
            "--tw-prose-bullets": "#A2A685",
            "--tw-prose-hr": "#D9D0BF",
            "--tw-prose-quotes": "#697353",
            "--tw-prose-quote-borders": "#A2A685",
            "--tw-prose-code": "#3A2F22",
            "--tw-prose-pre-bg": "#D9D0BF",
          },
        },
      },
      backgroundImage: {
        "texture-warm":
          "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23BFB6A4' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
