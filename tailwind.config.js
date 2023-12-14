/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': 'rgb(255, 255, 255)',
        'body': 'rgb(229, 246, 246)',
        'primaryText': 'rgb(1, 1, 1)',
        'secondaryText': 'rgb(104, 102, 102)',
        'primaryBacground': '#EDF5E1',
        'secondaryBacground': '#5cdb95',
        'buttonColor': '#379683',
        'buttonHoverColor': '#05386b',
        'overlayColor': 'rgba(0, 0, 0, 0.8)',
      },
      fontFamily: {
        sans: ['Comic Sans MS', 'sans-serif'],
      },
      maxWidth: {
        'calc-vw-48': 'calc(100vw - 48px)',
      },
      maxHeight: {
        'calc-vh-24': 'calc(100vh - 24px)',
      },
      gridTemplateColumns: {
        'gallery-template': 'repeat(auto-fill, minmax(320px, 1fr))'
      }
    },
  },
  plugins: [],
}

