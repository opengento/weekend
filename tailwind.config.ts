import type { Config } from "tailwindcss";
import daisyui from "daisyui"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  daisyui: {
    themes: [
      {
        opengento: {
          "primary": "#ed8120",
          "secondary": "#111827",
          "accent": "#cec2b7",
          "neutral": "#ffffff",
          "base-100": "#fff9f3",
          "info": "#fde047",
          "success": "#00ff00",
          "warning": "#d97706",
          "error": "#ff0000",
        },
      },
    ],
  },
  plugins: [daisyui],
} satisfies Config;
