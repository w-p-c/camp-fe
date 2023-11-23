import type { Config } from 'tailwindcss';
import { tailwindConfig } from '@storefront-ui/react/tailwind-config';
import sfTypography from '@storefront-ui/typography';

const config: Config = {
  presets: [tailwindConfig],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@storefront-ui/react/**/*.{js,mjs}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Inter', 'system-ui'],
      heading: ['Arial', 'Georgia'],
    },
  },
  plugins: [sfTypography],
};
export default config;
