/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      'custom' : '3vw',
    },
    extend: {
      spacing: {
        'countert' : '35vh',
        'counterl' : '37vw',
        'quizl' : '30%',
        'quizt' : '25vw',
        'modalr' : '30vh',
        'modall' : '30vw',
        'todoh' : '50vw',
        'custom' : '40vw',
        'customsq' : '10vw',
        'customst' : '30vw',
        'customsh' : '30vw',
      }
    },
  },
  plugins: [],
}
