// src/components/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import CodeShowcase from './CodeShowcase'; // Import the new component

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }, // Sine Out easing
};

export default function Hero() {
    return (
        <motion.section
            className="relative text-center pt-28 md:pt-36 pb-16 md:pb-24 border-b border-linear-border overflow-hidden" // Increased top padding
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150%] h-[600px] bg-hero-gradient pointer-events-none -z-10"></div>


            <motion.h1
                className="text-4.5xl md:text-5.5xl font-semibold text-linear-text-primary tracking-tighter mb-4 leading-tight"
                variants={itemVariants}
            >
                Hi, I am Ziang <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-linear-accent to-accent-cyan">
          A Software Engineer
        </span>
            </motion.h1>

            <motion.p
                className="text-base md:text-lg text-linear-text-secondary mb-8 max-w-xl mx-auto"
                variants={itemVariants}
            >
                who focus on system and performance.
                Expertise in C++, backend architecture, and low-level kernel programming. Building efficient and scalable solutions.
            </motion.p>

            {/* Buttons styled like Linear */}
            <motion.div
                className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-3"
                variants={itemVariants}
            >
                <a href="https://github.com/withziang" target="_blank" rel="noopener noreferrer" className="btn-linear-primary w-full sm:w-auto shadow-glow-subtle">
                    View GitHub
                </a>
                <Link href="https://www.linkedin.com/in/ziang-wang2021/" target="_blank" rel="noopener noreferrer" className="btn-linear-secondary w-full sm:w-auto">
                    View Linkedin →
                </Link>
            </motion.div>

            {/* Add the Code Showcase Visual */}
            <CodeShowcase />

        </motion.section>
    );
}