import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            dropShadow: {
                'custom': '0 35px 35px rgba(0, 0, 0, 0.25)',
                '3xl': '0 35px 35px rgba(0, 0, 0, 0.3)',
                'colored': '0 35px 35px rgba(8, 112, 184, 0.7)',
              },
              backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
              },

              typography: (theme) => ({
                DEFAULT: {
                  css: {
                    color: theme('colors.gray.900'),
                    a: {
                      color: theme('colors.yellow.400'),
                      '&:hover': {
                        color: theme('colors.yellow.500'),
                      },
                    },
                    // Add more custom styling as needed
                  },
                },
              }),
        },
    },

    plugins: [forms],
};
