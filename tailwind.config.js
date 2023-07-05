/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        gray: '#CCCCCC',
        green: '#DAFF01',
        purple: '#9353FF',
        gray: '#343A40',
        bannerRose: '#EE6471',
        bannerOrange: '#F87F46'
      },
      fontFamily: {
        inter: ['var(--font-inter)']
      },
      screens: {
        phone: '375px',
        tablet: '768px',
        desktop: '1440px'
      },
      maxWidth: {
        desktop: '1440px'
      },
      minWidth: {
        phone: '375px',
      }
    },
  },
  plugins: [],
}
