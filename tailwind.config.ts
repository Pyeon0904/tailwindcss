// npm install @tailwindcss/forms
// @tailwindcss/typography
// @tailwindcss/aspect-ratio

import type {Config} from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // or 'media'(OS system) or 'class'(선택적)
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
