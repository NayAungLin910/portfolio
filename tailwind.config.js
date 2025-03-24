/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ["Open Sans", 'sans-serif'],
      },
      keyframes: {
        rotating: {
          '0%': { transform: 'translateY(0)', opacity: '1', },
          '80%': { opacity: '0.7', },
          '100%': { transform: 'translateY(-800px) rotate(360deg)', opacity: '0', },
        }
      },
      animation: {
        'rotating-blocks': 'rotating 10s linear infinite',
      }
    },
  },
  plugins: [],
}

