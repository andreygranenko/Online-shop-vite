/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem', // по умолчанию (маленькие экраны)
        sm: '2rem',      // small screens and up
        md: '3rem',      // medium screens and up
        lg: '4rem',      // large screens and up
        xl: '5rem',      // extra large screens and up
        '2xl': '6rem',   // 2x extra large screens and up
      },
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

