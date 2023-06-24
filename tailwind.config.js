/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#965ff4",

          "secondary": "#121b9b",

          "accent": "#96fc94",

          "neutral": "#22202c",

          "base-100": "#eff1f5",

          "info": "#a4cae5",

          "success": "#1da568",

          "warning": "#edc226",

          "error": "#ed6750",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

