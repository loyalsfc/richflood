/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        navColor: 'rgba(241, 241, 241, 1)',
        textColor: '#3B3A3A',
        ash: '#F7F7F7'
      },
    },
  },
  plugins: [],
}
