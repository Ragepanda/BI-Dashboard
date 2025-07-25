/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'], // Adjust paths as needed
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#2563EB',   // blue-600
          light: '#3B82F6',     // blue-500
          dark: '#1E40AF',      // blue-800
        },
        success: {
          DEFAULT: '#10B981',   // green-500
          light: '#6EE7B7',     // green-300
        },
        warning: {
          DEFAULT: '#F59E0B',   // amber-500
          light: '#FDE68A',     // amber-200
        },
        error: {
          DEFAULT: '#EF4444',   // red-500
          light: '#FCA5A5',     // red-300
        },
        muted: {
          light: '#F3F4F6',     // gray-100
          DEFAULT: '#6B7280',   // gray-500
          dark: '#374151',      // gray-700
        },
        bg: {
          DEFAULT: '#FFFFFF',
          subtle: '#F9FAFB',    // soft background fill
        },
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
      },
      fontSize: {
        'body-sm': ['14px', { lineHeight: '20px' }],
        'body-md': ['16px', { lineHeight: '24px' }],
        'heading-sm': ['20px', { lineHeight: '28px', fontWeight: '600' }],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

