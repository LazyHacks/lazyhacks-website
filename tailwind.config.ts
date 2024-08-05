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
      "welcome-text": "#171717",
    },
    fontFamily: {
      "display": ["Pangolin", "cursive"],
      "body": ["'var(--font-courier-prime)'", "monospace"],
    }
  },
  plugins: [],
};
export default config;
