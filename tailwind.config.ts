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
        black: "#111111",
        "dark-1": "#1B1B1B",
        "dark-2": "#2C2C2C",
        coffee: "#6F4E37",
        gold: "#D6B98C",
        cream: "#F5F1EA",
      },
      fontFamily: {
        bebas: ["var(--font-bebas)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.25em",
        "ultra-wide": "0.4em",
      },
    },
  },
  plugins: [],
};

export default config;
