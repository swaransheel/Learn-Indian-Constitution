/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing:{
        '800':"800px",
      },
      fontSize:{
        '10xl': '10rem',
      },
      fontFamily:{
        'mar': ["Margarine", 'sans-serif'],
        'staat':["Staatliches", "sans-serif"],
        'merri':['Merriweather Sans','sans-serif'],
        'libre':['Libre Baskerville', 'serif'],

      },
      colors:{
        'but':'#3D405B'
      }
        
    },
  },
  plugins: [],
}

