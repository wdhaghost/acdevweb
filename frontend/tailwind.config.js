/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], // Définit Montserrat comme une classe personnalisée
      },
      colors:{
      'purple':'var(--purple)',
      'foreground':'var(--foreground)',
      'background':'var(--background)',
      'blue':'#47A1FF'
    },
    },
  },
  plugins: [],
}

