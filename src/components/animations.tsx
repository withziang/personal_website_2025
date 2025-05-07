// src/components/animations.tsx

"use client"; // <-- Add this! Needed for the useInView hook

import React from 'react';
import { motion, useInView } from 'framer-motion'; // <-- Import useInView here

interface FadeInAndSlideInProps {
    children: React.ReactNode;
    delay?: number;
}
export const FadeInAndSlideIn = ({ children, delay = 0 }: FadeInAndSlideInProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
};

// --- Simple Fade In ---
interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
}
export const FadeIn = ({ children, delay = 0 }: FadeInProps) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay, duration: 0.6, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

// --- Slide In from Left or Right ---
interface SlideInProps {
    children: React.ReactNode;
    direction?: "left" | "right";
    delay?: number;
}
export const SlideIn = ({ children, direction = "left", delay = 0 }: SlideInProps) => {
    const xValue = direction === "left" ? -50 : 50;

    return (
        <motion.div
            initial={{ opacity: 0, x: xValue }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay, duration: 0.6, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

// --- Scale Up ---
interface ScaleUpProps {
    children: React.ReactNode;
    delay?: number;
}
export const ScaleUp = ({ children, delay = 0 }: ScaleUpProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay, duration: 0.5, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

// --- Lift Element on Hover ---
interface HoverLiftProps {
    children: React.ReactNode;
}
export const HoverLift = ({ children }: HoverLiftProps) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.2 }}
        >
            {children}
        </motion.div>
    );
};

// --- Stagger Children Animation ---
// Note: Direct children should also be motion components for this to work best
interface StaggeredListProps {
    children: React.ReactNode;
}
export const StaggeredList = ({ children }: StaggeredListProps) => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.2 } // Adjust stagger delay as needed
                }
            }}
        >
            {children}
        </motion.div>
    );
};

// --- Reveal Element on Scroll ---
interface RevealOnScrollProps {
    children: React.ReactNode;
    className?: string; // Allow passing className
    delay?: number; // Add optional delay
    threshold?: number; // Allow customizing threshold
}
export const RevealOnScroll = ({ children, className, delay = 0, threshold = 0.2 }: RevealOnScrollProps) => {
    const ref = React.useRef(null); // Create a ref for the element

    // FIX: Changed 'triggerOnce' to 'once'
    const inView = useInView(ref, { once: true, amount: threshold }); // Track when in view, trigger only once

    return (
        <motion.div
            ref={ref} // Attach the ref here
            className={className} // Apply optional className
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}} // Animate only when inView is true
            transition={{ duration: 0.6, ease: "easeOut", delay: delay }} // Apply delay
        >
            {children}
        </motion.div>
    );
};