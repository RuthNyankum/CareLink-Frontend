/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4ADEDE",
        dark: '#00A6A7',
        secondary: "#7BD5F5",
        gray: '#B2B2B2'
      }
    },
  },
  plugins: [],
}

