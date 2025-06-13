// npm install @tailwindcss/forms
// @tailwindcss/typography
// @tailwindcss/aspect-ratio

import type {Config} from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import aspectRatio from '@tailwindcss/aspect-ratio';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // or 'media'(OS system) or 'class'(선택적)
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',
        secondary: '#64748B',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/aspect-ratio'),
    forms,
    typography,
    aspectRatio,
  ],
};

export default config;
