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
        ash: '#F7F7F7',
        'grey-bg': 'rgb(247, 247, 247)',
        blueText: '#3D5975',
        yellow: '#EDCD1F'
      },
      backgroundImage:{
        insight: "url('src/assets/bg_image.webp')",
        landscape: "url('src/assets/landscape.webp')",
        project: "url('src/assets/project-header.webp')"
      }
    },
  },
  plugins: [],
}
