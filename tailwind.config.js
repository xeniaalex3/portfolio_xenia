/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@tremor/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      sm: { max: '640px' },
      // => @media (max-width: 640px) { ... }
      md: { min: '768px', max: '1023px' },
      // => @media (max-width: 767px) { ... }
      lg: { min: '1024px', max: '1279px' },
      // => @media (min-width: 1024px) { ... }
      xl: { min: '1280px', max: '1535px' },
      // => @media (min-width: 1280px) { ... }
      '2xl': { min: '1536px' }
    },
    transparent: 'transparent',
    current: 'currentColor'
  }
}
