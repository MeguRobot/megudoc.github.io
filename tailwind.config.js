/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'neumorphic-orange': '10px 10px 20px #d97706, -10px -10px 20px #fcd34d',
        'neumorphic-orange-hover': '5px 5px 10px #d97706, -5px -5px 10px #fcd34d',
        'neumorphic-orange-inset': 'inset 5px 5px 10px #d97706, inset -5px -5px 10px #fcd34d',
        'neumorphic-orange-dark': '10px 10px 20px #7c2d12, -10px -10px 20px #ea580c',
        'neumorphic-orange-dark-hover': '5px 5px 10px #7c2d12, -5px -5px 10px #ea580c',
        'neumorphic-orange-dark-inset': 'inset 5px 5px 10px #7c2d12, inset -5px -5px 10px #ea580c',
      },
    },
  },
  plugins: [],
};