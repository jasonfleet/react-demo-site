/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Some useful comment
      fontFamily: {
        'food-orders': ['"Great Vibes"', 'cursive'],
        'nav': ['"Coming Soon"', 'cursive'],
        // 'quiz-title': ['"Amatic SC"', 'serif'],
        // 'quiz-title': ['"Press Start 2P"', 'cursive'],
        // 'quiz-title': ['"Lemon"', 'cursive'],
        // 'quiz-title': ['"Ceviche One"', 'cursive'],
        'quiz-title': ['"Luckiest Guy"', 'cursive'],
        // 'quiz-title': ['"Spicy Rice"', 'cursive'],
        // 'quiz-title': ['"Paytone One"', 'cursive'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
