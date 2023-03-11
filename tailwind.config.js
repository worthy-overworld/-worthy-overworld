/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px'
      }
    },
  },
  plugins: [],
}

