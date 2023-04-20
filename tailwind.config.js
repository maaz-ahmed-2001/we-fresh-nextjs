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
        'txt-blue':'#68BAE3',
        'blue-light':'#EBF7FC',
        'light-grey':'#E8E8E8',
      }
    },
  },
  plugins: [],
}
