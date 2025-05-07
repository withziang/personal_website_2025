// src/components/Footer.tsx
import Link from 'next/link';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        // Added transition-colors duration-300. Using gray-800 for dark bg.
        <footer className="mt-auto border-t border-gray-200 dark:border-darter-dark-gray bg-darter-lightgray dark:bg-gray-800 py-8 transition-colors duration-300">
            <div className="container mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">

                {/* Copyright Notice - Using dark:text-gray-400 for less emphasis */}
                <p className="text-sm text-darter-gray dark:text-gray-400">
                    © {currentYear} Ziang Wang. All rights reserved.
                </p>

                {/* Footer Links - Inherit global link styles */}
                <nav className="mt-4 space-x-4 text-sm">
                    {/* Global 'a' styles handle dark mode */}
                    <Link href="/privacy">Privacy Policy</Link>
                    <span className="text-darter-gray dark:text-gray-500" aria-hidden="true">|</span>
                    <Link href="/terms">Terms of Service</Link>
                </nav>
            </div>
        </footer>
    );
};