// src/components/animations.tsx
'use client';

import { motion, Variants, Transition } from 'framer-motion';
import React from 'react';

interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
    variants?: Variants;
    animationDelay?: number;
    id?: string;
}

const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.6, -0.05, 0.01, 0.99]
        }
    },
};

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
                                                                    children,
                                                                    className,
                                                                    id, // Destructure id
                                                                    variants = defaultVariants,
                                                                    animationDelay = 0
                                                                }) => {

    // Define a type for the visible part of variants if it has a transition
    type VisibleVariant = {
        opacity?: number;
        y?: number | string;
        scale?: number;
        x?: number | string;
        // Add other motion props you might use in 'visible'
        transition?: Transition; // Use Framer Motion's Transition type
    };

    const customVariants = {
        ...variants,
        visible: {
            ...(variants.visible as VisibleVariant), 
            transition: {
                ...(variants.visible && (variants.visible as VisibleVariant).transition), // Access transition safely
                delay: animationDelay,
            }
        }
    };

    return (
        <motion.section
            id={id} // Pass the id to the motion.section
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


export const StaggeredList: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
    };

    return (
        <motion.ul
            className={className}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {children}
        </motion.ul>
    );
};

// Example of a staggered list item
export const StaggeredListItem: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
    const itemVariants: Variants = {
        hidden: { opacity: 0, x: -15 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: 'spring', stiffness: 120, damping: 15 },
        },
    };

    return (
        <motion.li className={className} variants={itemVariants}>
            {children}
        </motion.li>
    );
};