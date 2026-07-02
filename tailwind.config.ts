import type { Config } from "tailwindcss";

/**
 * Design tokens extracted from the portfolio design source.
 *
 * `accent` is the single themeable colour — every green/accent element
 * (labels, buttons, links, terminal `$`, status dots) resolves to it via the
 * `--accent-rgb` custom property defined in `src/index.css`. Change that one
 * line to re-theme the whole site. Because it is declared as
 * `rgb(var(...) / <alpha-value>)`, opacity modifiers like `text-accent/50`
 * work as normal.
 *
 * `cream` is the base foreground; opacity modifiers (e.g. `text-cream/60`)
 * reproduce the `rgba(236,233,226,.6)` values used throughout the design.
 */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b0c0f",
        panel: "#101217",
        surface: "#08090b",
        "surface-2": "#08090c",
        accent: "rgb(var(--accent-rgb) / <alpha-value>)",
        cream: "#ece9e2",
        "dot-red": "#ff5f57",
        "dot-amber": "#febc2e",
        "dot-green": "#28c840",
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
        serif: ["'Newsreader'", "Georgia", "serif"],
        sans: ["'Space Grotesk'", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
        narrow: "960px",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fadeUp .8s both",
        blink: "blink 1.1s step-end infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
