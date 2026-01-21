/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Your new Zegen-style animations go here
      keyframes: {
        'ken-burns': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.15)' },
        },
      },
      animation: {
        'ken-burns': 'ken-burns 10s ease-out forwards',
      },
      // You can also add the Zegen colors here for easy use
      colors: {
        church: {
          orange: '#ff5e14', // Zegen's signature orange
          purple: '#4a148c', // Your church's purple
          dark: '#151515',
        }
      }
    },
  },
  plugins: [],
};




