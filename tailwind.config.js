/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '992px',
      xl: '1440px',
      xxl: '2000px',
    },
    extend: {
      colors: {},
      backgroundImage: {
        hero: "url('/hero-banner.jpg')",
      },
      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
      },
      backgroundPosition: {
        center: 'center',
        top: 'top',
      },
    },
  },
  plugins: [],
};
