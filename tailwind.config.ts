import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        orange: "var(--main-orange)",
        gray: "var(--border-gray)"
      },
      backgroundColor: {
        orange: "var(--main-orange)",
        secondary: "var(--primary)",
      },
      boxShadow: {
        "card-box": "1px 3px 10px -2px rgba(0,0,0,0.25)",
        "input-box": "1px 1px 6px -2px rgba(0,0,0,0.25)"
      },
    },
  },
  plugins: [],
} satisfies Config;
