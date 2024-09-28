/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        sans:['Poppins'],
      },
      backgroundColor: {
        'custom-gradient': 'linear-gradient(257deg, #0698F9 13.5%, #F906F9 87.25%)',
      },
    },
  },
  plugins: [],
}

