/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite/**/*.js',
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: [require('flowbite/plugin')],
  images: {
    domains: ['flowbite.com']
  }
};
