import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: {
          light: "rgb(var(--color-secondary-light) / <alpha-value>)",
          DEFAULT: "rgb(var(--color-secondary) / <alpha-value>)",
        },
        tertiary: "rgb(var(--color-tertiary) / <alpha-value>)",
        foreground: "rgb(var(--color-foreground) / <alpha-value>)",
        content: {
          light: "rgb(var(--color-content-light) / <alpha-value>)",
          DEFAULT: "rgb(var(--color-content) / <alpha-value>)",
          contrast: "rgb(var(--color-content-contrast) / <alpha-value>)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        bottom: "0 2px 4px rgba(0,0,0,0.1)",
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.8rem",
        base: "1rem",
        md: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
      },
      maxWidth: {
        desktop: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
