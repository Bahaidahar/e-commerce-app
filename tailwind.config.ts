import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0044BF",
        gray: "#868E99",
        secondary: "#111",
        white: "#FFF",
      },
    },
  },
  plugins: [],
};
export default config;
