/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        
        primary: "#2C74B4",
        dark: '#00A6A7',
        secondary: ' #91C7B1',
        gray: '#B2B2B2'
      },
      fontFamily: {
        'poppins-regular': ['Poppins', 'sans-serif'],
        'poppins-medium-italic': ['Poppins', 'sans-serif'],
        'poppins-semibold-italic': ['Poppins', 'sans-serif'],
        'montserrat-unique-class': ['Montserrat', 'sans-serif'],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
      },
      fontStyle: {
        italic: 'italic',
      },
    },
  },
  plugins: [],
}

