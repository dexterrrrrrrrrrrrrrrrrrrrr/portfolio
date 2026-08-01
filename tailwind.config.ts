import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#050508",
        surface: "#0B0B12",
        "surface-2": "#12121C",
        line: "rgba(255,255,255,0.08)",
        ink: "#F3F3F8",
        muted: "#8B8BA0",
        cyan: {
          DEFAULT: "#00E5FF",
          soft: "#5CF2FF",
        },
        violet: {
          DEFAULT: "#7C5CFF",
          soft: "#A78BFF",
        },
        blue: {
          DEFAULT: "#3D6BFF",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        aurora:
          "radial-gradient(60% 50% at 20% 20%, rgba(124,92,255,0.25), transparent 60%), radial-gradient(50% 40% at 80% 10%, rgba(0,229,255,0.18), transparent 60%), radial-gradient(60% 50% at 50% 100%, rgba(61,107,255,0.2), transparent 60%)",
        "grid-fade":
          "linear-gradient(to bottom, transparent, #050508 85%)",
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "spin-slow": "spin 18s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
