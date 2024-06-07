/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      width: {
        '527': '527px'
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': {
          'main'    : '#1A4D2E',
          'surface' : '#D1DBD5',
          'border'  : '#8DA697',
          'hover'   : '#164026',
          'pressed' : '#0D2717',
          'focus'   : '#1A4D2E',
          'darkGray': '#666',
          'gray'    : '#666666',
          'white'   : '#FFFFFF'
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      fontSize: {
        's': '1rem',
        'm': '1.25rem',
        'l': '1.5rem'
      }
    },
  },
  plugins: [],
}

