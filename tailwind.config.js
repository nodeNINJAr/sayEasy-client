/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Use 'class' strategy for manual dark mode toggle
  theme: {
    colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			rose: colors.rose,
			pink: colors.pink,
			fuchsia: colors.fuchsia,
			purple: colors.purple,
			violet: colors.violet,
			indigo: colors.indigo,
			blue: colors.blue,
			sky: colors.sky, // As of Tailwind CSS v2.2, `lightBlue` has been renamed to `sky`  
			cyan: colors.cyan,
			teal: colors.teal,
			emerald: colors.emerald,
			green: colors.green,
			lime: colors.lime,
			yellow: colors.yellow,
			amber: colors.amber,
			orange: colors.orange,
			red: colors.red,
			slate: colors.slate,
			zinc: colors.zinc,
			gray: colors.gray,
			stone: colors.stone,
		},
    extend: {
      fontFamily:{
        fira:[ "Fira Sans", 'sans-serif'],
        figtree:["Figtree", 'sans-serif'],
        montserrat:["Montserrat", 'sans-serif']

      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

