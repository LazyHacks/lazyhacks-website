import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "background-yellow": "#fff2c5",
      "nav-brown": "#794c5b",
      "nav-background-brown": "#ffe3a1",
      "welcome-text": "#171717",
      "section-brown": "#956843",
      "body-link": "#365597",
      "body-link-hover": "#456bbc",
    },
    fontFamily: {
      "display": ["var(--font-love-ya)", "cursive"],
      "body": ["var(--font-lexend-deca)", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
