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
        hero: "url('../assets/images/monte.jpg')",
      },
      colors: {
        gray: {
          100: "#F5F5F5",
          200: "#E0E0E0",
          300: "#BDBDBD",
          400: "#9E9E9E",
          500: "#757575",
          600: "#616161",
          700: "#424242",
          800: "#212121",
          900: "#121212",
        },
        yellow: {
          500: "#FFD700",
        },
      },
    },
  },
  plugins: [],
};
export default config;
