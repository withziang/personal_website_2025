/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                darter: {
                    blue: '#4A4DE8',
                    purple: '#9F40E3',
                    navy: '#0A192F',          // Can remain as-is for deep sections
                    'dark-gray': '#08090a',   // NEW: Replace background in dark mode
                    lightgray: '#F8F9FA',
                    gray: '#A0AEC0',          // Secondary text in light
                },
                // Global white fallback for dark mode
                white: '#ffffff',
                yellow: {
                    glow: '#facc15' // Tailwind yellow-400 (used for image glow)
                }
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            boxShadow: {
                'yellow-glow': '0 0 12px 2px rgba(250, 204, 21, 0.6)', // Yellow glow for dark mode image frames
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
};
