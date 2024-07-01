import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      red: {
        ...colors.red,
        900: "#7E0707",
      },
      white: colors.white,
      brand: {
        50: "#F3F7F4",
        100: "#e8efe9",
        200: "#bed1c1",
        300: "#a1b399",
        400: "#6D8A83",
        500: "#425f49",
        600: "#425f49",
        700: "#384d3e",
        800: "#0B3B3C",
        900: "#2a372e",
      },
    },
    extend: {
      fontFamily: {
        body: ["var(--font-ttnorms)"],
      },
      animation: {
        "slide-in": "slide-in 150ms linear",
      },
      keyframes: {
        "slide-in": {
          "0%": {
            transform: "translateX(40px)",
            opacity: "0.3",
          },
          "100%": { transform: "translateX(0px)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
