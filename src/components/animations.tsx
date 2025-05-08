'use client';

import { motion, Variants } from 'framer-motion';
import React from 'react';

interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
    variants?: Variants;
    transition?: object;
    animationDelay?: number; // Add this prop
}

const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.6, -0.05, 0.01, 0.99] // Smooth ease
        }
    },
};

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
                                                                    children,
                                                                    className,
                                                                    variants = defaultVariants,
                                                                    animationDelay = 0 // Default no delay
                                                                }) => {
    // If animationDelay is provided, adjust the transition
    const customVariants = {
        ...variants,
        visible: {
            ...(variants.visible as object),
            transition: {
                ...(variants.visible && (variants.visible as any).transition),
                delay: animationDelay, // Apply the delay
            }
        }
    };

    return (
        <motion.section
            className={className}
            variants={animationDelay > 0 ? customVariants : variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {children}
        </motion.section>
    );
};

// Example of a staggered list animation
export const StaggeredList: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    return (
        <motion.div
            className={className}
            variants={containerVariants}
            initial="hidden"
            animate="visible" // Use animate for initial load, or whileInView for scroll-triggered
            // whileInView="visible"
            // viewport={{ once: true, amount: 0.1 }}
        >
            {children}
        </motion.div>
    );
};

export const StaggeredListItem: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 100, damping: 12 },
        },
    };

    return (
        <motion.div className={className} variants={itemVariants}>
            {children}
        </motion.div>
    );
};