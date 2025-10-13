


// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {
//       colors: {
//         teal: {
//           50: '#f0fdfa',
//           100: '#ccfbf1',
//           200: '#99f6e4',
//           300: '#5eead4',
//           400: '#2dd4bf',
//           500: '#14b8a6',
//           600: '#0d9488',
//           700: '#0f766e',
//           800: '#115e59',
//           900: '#134e4a',
//         },
//       },
//     },
//   },
//   plugins: [
//     function ({ addComponents }) {
//       addComponents({
//         '.no-scrollbar': {
//           /* Firefox */
//           'scrollbar-width': 'none',
//           '-ms-overflow-style': 'none', // IE and Edge
//         },
//         '.no-scrollbar::-webkit-scrollbar': {
//           display: 'none', // Chrome, Safari, Opera
//         },
//       });
//     },
//   ],
// };



/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
      },

      // 🌀 Infinite scroll animation keyframes
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },

      animation: {
        scroll: 'scroll 40s linear infinite',
      },
    },
  },

  plugins: [
    // 🧩 Hide scrollbar globally with utility class
    function ({ addComponents }) {
      addComponents({
        '.no-scrollbar': {
          /* Firefox */
          'scrollbar-width': 'none',
          '-ms-overflow-style': 'none', // IE and Edge
        },
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none', // Chrome, Safari, Opera
        },
      });
    },
  ],
};
