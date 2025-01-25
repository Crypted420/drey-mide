/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        black: "#000"
      },

      fontFamily: {
        'erica': ['Erica One', 'Poppins', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      scale: ['hover', 'group-hover'],
      transform: ['hover', 'group-hover'],
    },
  },
};
