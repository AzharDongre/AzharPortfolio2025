/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
  theme: {
    extend: {
      fontFamily: {
        'founders': ['Founders Grotesk', 'sans-serif'],
        'founders-condensed': ['Founders Grotesk Condensed', 'sans-serif'],
        'founders-x-condensed': ['Founders Grotesk X-Condensed', 'sans-serif'],
        'neue-montreal': ['Neue Montreal', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

