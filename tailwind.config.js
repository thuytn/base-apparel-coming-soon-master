/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js", "./*.html"],
  theme: {
    extend: {
      colors: {
        "desaturated-red": "hsl(0, 36%, 70%)",
        "soft-red": "hsl(0, 93%, 68%)",
        "dark-grayish-red": "hsl(0, 6%, 24%)",
        "bt-1": "hsl(0, 80%, 86%)",
        "bt-2": "hsl(0, 74%, 74%)",
        "container-1": "hsl(0, 0%, 100%)",
        "container-2": "hsl(0, 100%, 98%)",
      },
      backgroundImage: {
        'main': "url('/images/bg-pattern-desktop.svg')",
      },
      gridTemplateRows: {
        'layout': '85px minmax(250px, 1fr) minmax(0, 2fr)',
        'layout2': '165px 1fr'
      },
      gridTemplateColumns: {
        'hero': '1fr minmax(450px, 43%)'
      },
      screens: {
        'lg': '992px',
        '2xl': '1440px',
        '3xl': '1535px'
      }
    },
  },
  plugins: [],
}