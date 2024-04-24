/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        "2xl": "1px 2px 12px rgba(0,0,0,0.03)",
        "3xl": "1px 2px 12px rgba(255,132,75,0.4)",
        "4xl": "1px 2px 12px rgba(0,0,0,0.05)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#344563",
          secondary: "#ff844b",
        },
      },
    ],
  },
};
