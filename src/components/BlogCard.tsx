// src/components/BlogCard.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/types';
import { FiCalendar, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface BlogCardProps {
    post: Post;
    animationDelay?: number;
}

export default function BlogCard({ post, animationDelay = 0 }: BlogCardProps) {
    return (
        <motion.div
            className="group relative rounded-xl overflow-hidden bg-white dark:bg-darter-navy shadow-lg hover:shadow-card-hover-light dark:hover:shadow-card-hover-dark transition-all duration-300 transform hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: animationDelay }}
        >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-glow via-darter-purple to-darter-blue rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative bg-white dark:bg-darter-navy p-6 rounded-lg h-full flex flex-col">
                {post.imageUrl && (
                    <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden">
                        <Image
                            src={post.imageUrl}
                            alt={post.title}
                            fill
                            style={{ objectFit: 'cover' }}
                            className="transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                )}
                <h3 className="text-xl font-bold mb-2 text-darter-navy dark:text-white group-hover:text-yellow-glow transition-colors">
                    {post.title}
                </h3>
                <div className="flex items-center text-xs text-darter-gray dark:text-darter-medium-gray mb-2">
                    <FiCalendar className="mr-1" />
                    <span>{post.date}</span>
                </div>
                <p className="text-darter-medium-gray dark:text-darter-gray text-sm mb-4 flex-grow">
                    {post.excerpt}
                </p>
                <Link
                    href={`/blog/${post.slug}`}
                    className="mt-auto inline-flex items-center text-darter-blue dark:text-yellow-glow hover:underline font-semibold group-hover:animate-pulse"
                >
                    Read More <FiArrowRight className="ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
            </div>
        </motion.div>
    );
}