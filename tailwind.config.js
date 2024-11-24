/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},

    colors: {
      'starcoach-logo-text': 'hsla(164, 99%, 40%, 1)',
      'main-text-color': 'hsla(209, 73%, 7%, 1)',
      'gray-text': 'hsla(0, 0%, 70%, 1)',
      'header-footer-border': 'hsla(0, 0%, 92%, 1)',
      'card-border': 'hsla(0, 0%, 94%, 1)',
    },
  },
  plugins: [],
}

