module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'mobile' : '200px',
        'tablet' : '768px',
        'desktop' : '1024px',
      }
    },
  },
  plugins: [],
}
