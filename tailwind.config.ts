import type { Config } from "tailwindcss";

export default {

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        serif: ["var(--font-playfair)", "serif"],
      },
      colors: {
        primary: {
          light: "#0F172A", // Azul Marino Oscuro
          dark: "#CBD5E1",  // Gris Claro
        },
        secondary: {
          light: "#1E293B", // Gris Azulado Oscuro
          dark: "#94A3B8",  // Gris Azul
        },
        accent: {
          light: "#2563EB", // Azul Vivo
          dark: "#60A5FA",  // Azul Suave
        },
        background: {
          light: "#F8FAFC", // Gris Muy Claro
          dark: "#0F172A",  // Azul Marino
        },
        text: {
          light: "#1E293B", // Gris Oscuro
          dark: "#F8FAFC",  // Gris Muy Claro
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
