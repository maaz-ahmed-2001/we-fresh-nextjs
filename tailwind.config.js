/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',

  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'btn-bg':'#FFD476',
        'bg-blue':'#F2F9FF',
        'txt-blue':'#68BAE3',
        'blue-light':'#EBF7FC',
        'light-grey':'#E8E8E8',
        'swiper-bg':'#F2F2F2',
        'border':'#E8E8E8',
        'navbar-bg':'#68BAE3'
      }
    },
  },
  plugins: [],
}
