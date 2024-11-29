/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'light-purple':'#B37FE8',
      'dark-purple':'#521690',
      'black':'#555555',
      'soft-black':'#333333',
      'blue':'#47A1FF'
    },
    extend: {
    },
  },
  plugins: [],
}

