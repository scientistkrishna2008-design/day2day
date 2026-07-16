/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F4C81',
          dark: '#0A3357',
          light: '#1B6CB0',
        },
        secondary: {
          DEFAULT: '#102542',
        },
        accent: {
          DEFAULT: '#14B86A',
          dark: '#0E854D',
        },
        background: '#F8FAFC',
        text: '#111827',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
