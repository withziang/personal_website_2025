// src/components/ProjectListItem.tsx
'use client';

import { Project } from '@/types';
import TechBadge from './TechBadge';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ProjectListItemProps {
    project: Project;
    animationDelay?: number;
}

export default function ProjectListItem({ project, animationDelay = 0 }: ProjectListItemProps) {
    return (
        <motion.div
            className="group glass-card glass-card-hover p-4 flex flex-col sm:flex-row gap-4" // Reduced padding
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: animationDelay, ease: 'easeOut' }}
        >
            <div className="flex-grow">
                <h3 className="text-base font-semibold text-dark-text-primary mb-1 group-hover:text-accent-cyan transition-colors"> {/* Slightly smaller */}
                    {project.title}
                </h3>
                <p className="text-xs text-dark-text-secondary mb-3 leading-snug"> {/* Smaller text */}
                    {project.longDescription || project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.technologies.map(tech => (
                        <TechBadge key={tech} techName={tech} />
                    ))}
                </div>

                <div className="flex space-x-4 text-xs text-dark-text-tertiary mt-auto pt-2"> {/* Use tertiary color for links */}
                    {project.liveUrl && (
                        <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent-cyan flex items-center transition-colors">
                            <FiExternalLink className="mr-1" /> Live
                        </Link>
                    )}
                    {project.repoUrl && (
                        <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent-cyan flex items-center transition-colors">
                            <FiGithub className="mr-1" /> Code
                        </Link>
                    )}
                </div>
            </div>
        </motion.div>
    );
}