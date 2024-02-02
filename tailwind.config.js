const plugin = require('tailwindcss/plugin');

module.exports = {
  theme: {
    extend: {
      colors: {
        'accent-0': '#333333',
        'accent-1': '#FFFFFF',
        'accent-2': '#111A2B',
        'accent-3': '#1A2C44',
        'accent-4': '#21577C',
        'accent-5': '#2678A4',
        'accent-6': '#64ACCD',
        'accent-7': '#BCF1F0',
      },
      fontFamily: {
        poppins: ['Poppins-Regular'],
        'poppins-light': ['Poppins-Light'],
        'poppins-bold': ['Poppins-Bold'],
        'poppins-black': ['Poppins-Black'],
      },
    },
  },
  plugins: [
    plugin(({addUtilities}) => {
      addUtilities({
        '.default-text-input':
          'android:p-2 ios:p-3 font-poppins android:text-xs ios:text-sm text-white rounded-xl border border-accent-2',
        '.default-button': 'flex-row items-center justify-center w-full p-3 rounded-xl bg-accent-2',
      });
    }),
  ],
};
