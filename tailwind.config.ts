import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8F6F1",
        foreground: "#1F2937",
        card: "#FFFFFF",
        primary: "#5D876F",
        caution: "#CC9C46",
        danger: "#C46F66",
        muted: "#EDE8DD"
      },
      borderRadius: {
        lg: "1rem",
        md: "0.75rem",
        sm: "0.5rem"
      }
    }
  },
  plugins: []
} satisfies Config;
