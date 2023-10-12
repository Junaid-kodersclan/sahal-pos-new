import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if not using `src` directory:
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customBlue: "#3490dc",
        customRed: "#e3342f",
        customGreen: "#38c172",
        primary: "#f7841e",
        light: "#f7f7f8",
        secondary: "#4ec662",
        dull: "#9ca3b0",
        txt: "#262626",
        pure: "#fff",
        extraLight: "#a9a9a9",
        primaryLight: "#ffc8a2",
        fountainBlue: "#54AAC6",
        malibu: "#61B1F5",
        alabaster: "#F7F7F7",
        lima: "#58B81D",
        royalBlue: "#2A48E5",
        iron: "#D0D3D6",
        shuttleGray: "#545E6F",
        riverBed: "#454F5F",
        iceberg: "#ffbb80",
        athensGray: "#EFF1F3",
        ecstasy: "#e67817",
        porcelain: "#E8E9EA",
        jungle: "#2fa843",
        red: "#fe0000",
        brightGray: "#373f4e",
      },
    },
  },
  plugins: [],
};
export default config;
