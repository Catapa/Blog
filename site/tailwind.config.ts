import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#212529',
        'gray': '#6C757D',
        'light': '#F8F9FA',
        'light-gray': '#ECEDEE',
        'green': '#81B29A',
        'orange': '#E26D5C',
        'yellow': '#F2CD5C',
        'blue': '#5C88C4'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
