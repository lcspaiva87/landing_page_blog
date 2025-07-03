import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        blue:{
          '100': '#7EA4D7',
          '200': '#2C85FC',
          '300': '#2266C1',
          '400': '#0D284C',
        },
        cyan:{
          '100': '#2DEBFC',
          '200': '#187D86',
          '300': '#0E474C',
        },
        gray:{
          '100': '#E9EAEC',
          '200': '#D3D5D9',
          '300': '#93979E',
          '400': '#20242C',
          '500': '#16181D',
          '600': '#14161A',
          '700': '#101216',
          '800': '#0B0C0F',
        },
   
      },
    },
  },
  plugins: [],
};

export default config; 