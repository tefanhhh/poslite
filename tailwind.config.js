/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./views/**/*.hbs'],
  theme: {},
  plugins: [require('@tailwindcss/forms')],
};
