/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white-light': '#464F5A',
        'back-light': '#E8E9EB',
        'back-hovered': '#a7a7a7',
        'pink': '#E004BC',
        'pink-ho': '#6f025dfc',
      },
      boxShadow: {
       "light-shadow" : "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

