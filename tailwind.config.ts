import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "xs": "375px",
      "sm": "750px",
      "md": "960px",
      "lg": "1280px",
      "xl": "1440px",
    },
    colors: {
      "white": "hsl(0, 0%, 100%)",
      "violet": "hsl(257, 40%, 49%)",
      "soft-magenta": "hsl(300, 69%, 71%)",
      "attr-clr": "hsl(228, 45%, 44%)",
    },
    extend: {
      fontFamily: {
        "body": "",
        "headline": "",
        "icons": "",
      },
      backgroundImage: {
        "mobile": "url('/images/bg-mobile.svg')",
        "desktop": "url('/images/bg-desktop.svg')",
      },
      boxShadow: {
        "3xl": "0 10px 15px -3px rgba(0, 0, 0. 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
