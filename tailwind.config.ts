import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "hero-dark": "#929292",
        "hero-mid": "#0f1e10",
        "gold": "#c8a44a",
        "gold-muted": "#b89840",
        "nav-green": "#1d3a20",
        "text-muted": "#7a9080",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        "ultra-wide": "0.3em",
        "super-wide": "0.25em",
      },
    },
  },
  plugins: [],
};
export default config;
