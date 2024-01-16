/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#06141B",
          "accent": "#11212D",
          "info": "#253745",
          "neutral": "#4A5C6A",
          "secondary": "#9BA8AB",
          "base-100": "#CCD0CF",
        },
      },
    ],
  },
}

