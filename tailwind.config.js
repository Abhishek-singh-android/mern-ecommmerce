/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  purge:[
  './public/**/*.html',
  './src/**/*.{js,jsx,ts,tsx,vue}'
  ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}

