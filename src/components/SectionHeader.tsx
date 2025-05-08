'use client'; // Keep for motion

import { motion } from 'framer-motion';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
    icon?: React.ReactNode;
}

export default function SectionHeader({ title, subtitle, icon, className = '' }: SectionHeaderProps) {
    return (
        <div className={`mb-8 md:mb-12 ${className}`}>
            <motion.div
                className="flex items-center justify-center space-x-3 mb-4"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4 }}
            >
                {icon && <span className="text-accent-cyan">{icon}</span>}
                <h2 className="text-2xl md:text-3xl font-semibold text-dark-text-primary tracking-tight">
                    {title}
                </h2>
            </motion.div>
            {subtitle && (
                <motion.p
                    className="text-sm md:text-base text-dark-text-secondary max-w-xl mx-auto text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
}