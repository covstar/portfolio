/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      // media quries
       screens: {
      'sm': {'max': '720px'},
      // => @media (max-width: 639px) { ... }
      'tb': {'min': '721px', 'max': '1290px'},
      // => @media (min-width: 768px and max-width: 1023px)
      'md': '721px',
      // => @media (min-width: 768px) { ... }
    },
    // font family
    fontFamily:{
      'Nunito': ['Nunito'],
    },
    // animation
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
    },
  },
  plugins: [],
}
