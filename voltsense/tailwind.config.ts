import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "system-ui"],
      },
      colors: {
        background: {
          DEFAULT: "#050B17",
          subtle: "#0B1628",
          elevated: "#111F38",
        },
        surface: {
          DEFAULT: "#101B30",
          accent: "#142544",
          inverted: "#F8FBFF",
        },
        volt: {
          50: "#E9FEFF",
          100: "#C2FCF6",
          200: "#8AF3E6",
          300: "#52E5D6",
          400: "#2FD5C3",
          500: "#16BBA9",
          600: "#11978B",
          700: "#0E756C",
          800: "#09504A",
          900: "#042F2C",
        },
        lime: {
          100: "#F2FFDC",
          300: "#D5FF7D",
          500: "#B7FF3B",
          700: "#7BBF16",
        },
        slate: {
          50: "#F5F7FA",
          100: "#E2E8F5",
          200: "#CAD4EA",
          300: "#A2B2D2",
          400: "#7A8FB9",
          500: "#586D9A",
          600: "#435580",
          700: "#2F3E61",
          800: "#1D2A42",
          900: "#10182A",
        },
        warning: "#F29438",
        success: "#2FD39A",
        danger: "#EB4D4D",
      },
      spacing: {
        "3xs": "0.125rem",
        "2xs": "0.375rem",
        "2xl": "1.75rem",
        "3xl": "2.5rem",
        "4xl": "3.5rem",
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "1.75rem",
      },
      boxShadow: {
        focus: "0 0 0 4px rgba(47, 213, 195, 0.35)",
        card: "0 22px 45px -20px rgba(0, 0, 0, 0.45)",
      },
      maxWidth: {
        "7xl": "80rem",
      },
      backgroundImage: {
        "grid-overlay":
          "linear-gradient(135deg, rgba(21, 34, 61, 0.65), rgba(16, 23, 42, 0.9))",
      },
    },
  },
  plugins: [forms],
};
export default config;
