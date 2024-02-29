export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Poppins', 'sans-serif'],
      },
      spacing: {
        section: 'calc(100% - 140px)',
      },
    },
  },
  plugins: [],
};
