/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './section/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  options: {
    safelist: {
      standard: [
      'text-2xl',
      'text-3xl',
      'text-4xl',
      'text-5xl',
      'text-6xl',
      'sm:text-2xl',
      'sm:text-3xl',
      'sm:text-4xl',
      'sm:text-5xl',
      'sm:text-6xl',
      'md:text-2xl',
      'md:text-3xl',
      'md:text-4xl',
      'md:text-5xl',
      'md:text-6xl',
      'lg:text-2xl',
      'lg:text-3xl',
      'lg:text-4xl',
      'lg:text-5xl',
      'lg:text-6xl',
      ],
    },
  },
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'larosa': "url('/larosa-one.jpg')",
          'gpaamain': "url('/gpaamain.jpg')"
      },
      fontSize: {
        'p': 'clamp(1.56rem, 1vw + 1.31rem, 2.11rem)'
      },
      fontFamily: {
        heading: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}


// --font-size-sm: clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem);
// --font-size-base: clamp(1rem, 0.34vw + 0.91rem, 1.19rem);
// --font-size-md: clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem);
// --font-size-lg: clamp(1.56rem, 1vw + 1.31rem, 2.11rem);
// --font-size-xl: clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem);
// --font-size-xxl: clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem);
// --font-size-xxxl: clamp(3.05rem, 3.54vw + 2.17rem, 5rem);