import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.4))' },
          '50%': { filter: 'drop-shadow(0 0 30px rgba(255, 255, 255, 0.7))' },
        },
      },
      animation: {
        twinkle: 'twinkle var(--twinkle-duration, 3s) ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 4s ease-in-out infinite',
      },
    }
  },
  plugins: [],
} satisfies Config;
