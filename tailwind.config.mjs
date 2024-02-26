import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", ...defaultTheme.fontFamily.sans],
        kanit: ["Kanit", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        ring: "#6D7D7D",
        primary: {
          DEFAULT: "#FFFFFF",
          foreground: "#6D7D7D",
        },
        secondary: {
          DEFAULT: "#131616",
          foreground: "#212828",
        },
        background: {
          DEFAULT: "#131616",
          foreground: "#191D1D",
        }
      },
      letterSpacing: {
        widest: "0.45em",
      },
      borderRadius: {
        "4xl": "50px",
      }
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        xl: "1204px",
      },
    },
  },
  plugins: [],
};
