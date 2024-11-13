/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/content.js"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['League Spartan', 'sans-serif'],
      },
      colors: {
        'white': 'hsl(0, 0%, 100%)',
        'gray-dark': 'hsl(0, 0%, 63%)',
        'gray-very-dark': 'hsl(0, 0%, 27%)',
        'black' : 'hsl(0, 0%, 0%)',
      },
      fontSize: {
        xxs: '0.625rem'
      },
      maxWidth: {
        '1440': '1440px'
      },
      scale: {
        '102.5': '1.025'
      },
      spacing: {
        '540': '540px'
      },
      transitionDuration: {
        600: '600ms'
      }
    },
  },
}

