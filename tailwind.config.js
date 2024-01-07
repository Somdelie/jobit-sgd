/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"]
export const content = [
  // ...
  "node_modules/flowbite-react/lib/esm/**/*.js",
  "./pages/**/*.{js,jsx}",
  "./components/**/*.{js,jsx}",
  "./app/**/*.{js,jsx}",
  "./src/**/*.{js,jsx}",
]
export const prefix = ""
export const theme = {
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "2xl": "1400px",
    },
  },
  extend: {
    colors: {
      primary: "#0bab7c",
      "primary-light": "#07ae7133",
      secondaryLightGreen: "#C7F4C2",
      textColor: "#334155",
      secondaryLightPurple: "#D7D0FF",
      text: "#cbd5e1",
      secondaryLightYellow: "#FDDD8C",
      secondaryLightRed: "#FFBBD7",
      secondaryGreen: "#0BAB7C",
      secondaryRed: "#FC615C",
      "hover-color": "#2d2d39",
      "dark-light": "#393948",
      button1: "#ffe3fd",
      button2: "#ffc6fb",
      button3: "#ff99f2",
      button4: "#ff5dea",
      button5: "#ff21ea",
      button6: "#eb00e3",
      button7: "#cf00c3",
      button8: "#a9009e",
      button9: "#89067d",
      button10: "#5e0056",
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
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
      popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
      },
      card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
      },
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
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
    backgroundColor: {
      main: "#f5f5f9",
      "dark-main": "#13131A",
      "dark-card": "#1C1C24",
    },
  },
}
export const plugins = [
  require("tailwindcss-animate"),
  require("flowbite/plugin"),
]
