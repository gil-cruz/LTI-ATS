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
        'purple': {
          400: '#8b5cf6',
          600: '#7c3aed',
        },
        'gray': {
          800: '#1f2937',
          900: '#111827',
        },
      },
    },
  },
  plugins: [],
}