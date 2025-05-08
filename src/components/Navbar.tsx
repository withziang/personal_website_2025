// src/components/Navbar.tsx
'use client';

import Link from 'next/link';
import { useState} from 'react';
import { FiMenu, FiX, FiGithub, FiLinkedin } from 'react-icons/fi'; // Using specific icons
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
    { name: 'Skills', path: '#skills' },
    { name: 'Projects', path: '#projects' },
    { name: 'Interests', path: '#interests' },
    { name: 'Blogs', path: '/blogs' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
        setIsOpen(false);
        if (path.startsWith('#')) {
            e.preventDefault();
            const targetId = path.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                // Offset slightly for the fixed navbar height
                const offset = 80; // Adjust as needed
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = targetElement.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 h-16
                  bg-transparent`}
        >
            <div className="w-full max-w-6xl mx-auto px-4 h-full">
                <div className="flex items-center justify-between h-full">
                    {/* Left: Logo */}
                    <Link href="/" className="flex items-center text-sm font-medium text-linear-text-primary">
                        {/* Simplified Logo (replace with SVG later if needed) */}
                        <span className="w-5 h-5 mr-2 rounded-full bg-gradient-to-br from-linear-accent to-accent-cyan"></span>
                        Ziang Wang
                    </Link>

                    {/* Center: Desktop Nav Links */}
                    <div className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
                        <div className="flex items-center space-x-2 bg-linear-gray-medium/50 border border-linear-border rounded-full px-2 py-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.path}
                                    onClick={(e) => handleLinkClick(e, item.path)}
                                    className="px-3 py-1 rounded-full text-xs font-medium text-linear-text-secondary hover:bg-white/5 hover:text-linear-text-primary transition-colors duration-150"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>


                    {/* Right: External Links / Contact */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="https://github.com/withziang" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-linear-text-secondary hover:text-linear-text-primary transition-colors">
                            <FiGithub size={18}/>
                        </a>
                        <a href="https://linkedin.com/in/ziang-wang2021/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-linear-text-secondary hover:text-linear-text-primary transition-colors">
                            <FiLinkedin size={18}/>
                        </a>

                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="p-2 rounded-md text-linear-text-secondary hover:bg-white/5 hover:text-linear-text-primary focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="md:hidden absolute top-16 left-0 right-0 bg-linear-gray-dark/95 backdrop-blur-lg shadow-xl border-t border-linear-border"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                    >
                        <ul className="flex flex-col px-4 pt-2 pb-4 space-y-1">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.path}
                                        onClick={(e) => handleLinkClick(e, item.path)}
                                        className="block px-3 py-2 rounded-md text-base font-medium text-linear-text-secondary hover:bg-white/5 hover:text-linear-text-primary transition-colors duration-200"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                            {/* Mobile external links */}
                            <li className="pt-4 border-t border-linear-border mt-2">
                                <a href="https://github.com/withziang" target="_blank" rel="noopener noreferrer" className="flex items-center px-3 py-2 text-linear-text-secondary hover:text-linear-text-primary"> <FiGithub className="mr-2" size={18}/> GitHub </a>
                            </li>
                            <li>
                                <a href="https://linkedin.com/in/ziang-wang2021/" target="_blank" rel="noopener noreferrer" className="flex items-center px-3 py-2 text-linear-text-secondary hover:text-linear-text-primary"> <FiLinkedin className="mr-2" size={18}/> LinkedIn </a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}