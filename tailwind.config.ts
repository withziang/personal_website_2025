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
                // Linear-inspired Palette
                'linear-bg': '#050505',      // Very dark base
                'linear-gray-dark': '#111111', // Card/Section bg
                'linear-gray-medium': '#191919', // Hover/Subtle bg
                'linear-border': 'rgba(255, 255, 255, 0.07)', // Subtle border
                'linear-border-hover': 'rgba(255, 255, 255, 0.12)',
                'linear-text-primary': '#EBEBEB', // Main text (slightly off-white)
                'linear-text-secondary': '#A0A0A0', // Secondary text
                'linear-text-tertiary': '#606060', // Muted text
                'linear-accent': '#4C82F7',
                'linear-accent-hover': '#6090F8',
                'linear-btn-text': '#FFFFFF', // Text for primary button
                'linear-btn-bg': '#F9F9F9',    // Primary button bg (white)
                'linear-btn-bg-hover': '#EFEFEF', // Primary button hover
                'accent-cyan': '#22d3ee',
                'accent-purple': '#8b5cf6',
                'accent-green': '#22c55e',
            },
            fontFamily: {
                sans: ['var(--font-geist-sans)', 'Inter', 'sans-serif'],
                mono: ['var(--font-geist-mono)', 'monospace'],
            },
            fontSize: {
                '4.5xl': '2.5rem', // ~40px
                '5.5xl': '3.5rem', // ~56px
            },
            backgroundImage: {
                'hero-gradient': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 119, 198, 0.3), transparent)', // Subtle top glow (adjust color)
                'hero-lines': 'url("/line-pattern.svg")',
            },
            boxShadow: {
                'glow-subtle': '0 0 20px 0px rgba(76, 130, 247, 0.15)', // Subtle accent glow
                'btn-glow': '0 0 15px 0px rgba(249, 249, 249, 0.3)', // White button glow
                'card': '0px 1px 1px rgba(0, 0, 0, 0.03), 0px 2px 2px rgba(0, 0, 0, 0.03), 0px 4px 4px rgba(0, 0, 0, 0.03), 0px 8px 8px rgba(0, 0, 0, 0.03), 0px 16px 16px rgba(0, 0, 0, 0.03)', // Subtle card shadow
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out forwards',
                'slide-in-bottom': 'slideInBottom 0.6s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0'},
                    '100%': { opacity: '1'},
                },
                slideInBottom: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
};