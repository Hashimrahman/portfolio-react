/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        backgroundPrimary : '#282C33',
        backgroundSecondary : '#2C2F36',
        customGray : '#ABB2BF',
        customPurple : '#C778DD'
      },
      fontFamily: {
        'code': ['Fira Code', 'monospace'], // Add Fira Code as 'code' font family
      },
    },
  },
  plugins: [],
}

