import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
      },
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
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        flamePulse: {
          '0%': { transform: 'scale(0.8)', opacity: '0.5' },
          '100%': { transform: 'scale(1.2)', opacity: '0.8' },
        },
        flameFlicker: {
          '0%, 100%': { transform: 'scale(1.0)', opacity: '0.7' },
          '25%': { transform: 'scale(0.9)', opacity: '0.6' },
          '50%': { transform: 'scale(1.1)', opacity: '0.8' },
          '75%': { transform: 'scale(0.95)', opacity: '0.7' },
        },
        flameSway: {
          '0%, 100%': { transform: 'translateX(0) scale(1.0)' },
          '25%': { transform: 'translateX(-5px) scale(1.05)' },
          '75%': { transform: 'translateX(5px) scale(0.95)' },
        },
        flameRise: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0.7' },
          '100%': { transform: 'translateY(-10px) scale(0.8)', opacity: '0.3' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'flame-pulse': 'flamePulse 2s infinite alternate',
        'flame-flicker': 'flameFlicker 3s infinite alternate',
        'flame-sway': 'flameSway 4s infinite alternate',
        'flame-rise': 'flameRise 2.5s infinite',
      },
    },
  },
  plugins: [animate],
} satisfies Config;
