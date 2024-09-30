/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontfamily:{
      BebasNeue: ["Bebes Neue", "sans-sarif"],
      DancingScript: ["Dancing Script", "cursive"],
      Montserrat: ["Montserrat", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
    },
    
    extend: {},
  },
  plugins: [],
}