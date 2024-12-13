
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue:'#3997ff',
        gray:{
          default:'#86868b',
          100:'#94928b',
          200:'#afafaf',
          300:'#42424570'
        },
        zinc:'#101010'
      }
    },
  },
  plugins: [],
}

