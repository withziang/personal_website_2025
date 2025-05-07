// src/app/about/page.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FadeInAndSlideIn, RevealOnScroll } from '@/components/animations';

export default function AboutPage() {
    return (
        <>
            {/* Container inherits body background, so transition applies */}
            <div className="container mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 sm:py-24">

                <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-16">

                    {/* Column 1: Image, Name, Title, Links */}
                    <FadeInAndSlideIn>
                        <div className="flex flex-col items-center text-center md:items-start md:text-left">

                            {/* Use dark:text-white for main headings */}
                            <h1 className="text-3xl font-bold tracking-tight text-darter-navy dark:text-white sm:text-4xl">
                                Ziang Wang
                            </h1>
                            {/* Gradient text is usually fine on dark */}
                            <p className="mt-2 text-xl font-semibold bg-gradient-to-r from-darter-blue to-darter-purple bg-clip-text text-transparent">
                                Co-founder, Darter Lab
                            </p>
                            {/* Use dark:text-gray-300/400 for secondary text */}
                            <p className="mt-4 text-base leading-7 text-darter-gray dark:text-gray-300">
                                Software Engineering Student at McGill University (3rd Year).
                            </p>

                            {/* Social Links - Adjusted hover colors for dark mode */}
                            <div className="mt-6 flex justify-center space-x-4 md:justify-start">
                                <Link href="https://github.com/withziang" target="_blank" rel="noopener noreferrer" className="text-darter-gray dark:text-gray-400 hover:text-darter-navy dark:hover:text-gray-200 transition-colors">
                                    <span className="sr-only">GitHub</span>
                                    <FaGithub className="h-6 w-6" />
                                </Link>
                                <Link href="https://www.linkedin.com/in/ziang-wang2021/" target="_blank" rel="noopener noreferrer" className="text-darter-gray dark:text-gray-400 hover:text-darter-navy dark:hover:text-gray-200 transition-colors">
                                    <span className="sr-only">LinkedIn</span>
                                    <FaLinkedin className="h-6 w-6" />
                                </Link>
                            </div>
                        </div>
                    </FadeInAndSlideIn>

                    {/* Column 2: Experience, Education, Skills, Interests */}
                    <div className="md:col-span-2 space-y-12">

                        {/* --- Experience Section --- */}
                        <RevealOnScroll>
                            <section>
                                {/* Section headers with dark text/border */}
                                <h2 className="text-2xl font-semibold text-darter-navy dark:text-white border-b border-gray-200 dark:border-darter-dark-gray pb-2 mb-6">
                                    Experience
                                </h2>
                                <div className="space-y-8">
                                    {/* Job Entry */}
                                    {/* McGill Learning Assistant */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-darter-navy dark:text-white">Software Engineer & Co-Founder</h3>
                                        <p className="text-base text-darter-blue dark:text-blue-400">Darter Lab · Full Time</p>
                                        <p className="text-sm text-darter-gray dark:text-gray-400">April 2025 - Current</p>
                                        <p className="text-sm text-darter-gray dark:text-gray-400">Montreal, Quebec, Canada · On-site</p>
                                        <p className="mt-2 text-base text-darter-gray dark:text-gray-300">
                                            System Architecture & Implementation
                                        </p>
                                    </div>
                                    {/* McGill Learning Assistant */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-darter-navy dark:text-white">Learning Assistant</h3>
                                        <p className="text-base text-darter-blue dark:text-blue-400">McGill University · Contract Part-time</p>
                                        <p className="text-sm text-darter-gray dark:text-gray-400">Feb 2024 - Feb 2024 · 1 mo</p>
                                        <p className="text-sm text-darter-gray dark:text-gray-400">Montreal, Quebec, Canada · On-site</p>
                                        <p className="mt-2 text-base text-darter-gray dark:text-gray-300">
                                            Computational and Data Systems Initiative workshop.
                                        </p>
                                    </div>
                                    <div>
                                        {/* Job titles */}
                                        <h3 className="text-lg font-semibold text-darter-navy dark:text-white">Developer Intern</h3>
                                        {/* Company/Link text */}
                                        <p className="text-base text-darter-blue dark:text-blue-400">Fuel Transport - Internship</p>
                                        {/* Metadata text */}
                                        <p className="text-sm text-darter-gray dark:text-gray-400">May 2024 - Aug 2024 · 4 mos</p>
                                        <p className="text-sm text-darter-gray dark:text-gray-400">Montreal, Quebec, Canada · On-site</p>
                                        {/* Description text */}
                                        <p className="mt-2 text-base text-darter-gray dark:text-gray-300">
                                            Worked on freight billing node.js backend & Internal microservices & Web portal.
                                        </p>
                                    </div>
                                    {/* Mitacs Internship */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-darter-navy dark:text-white">Research Intern</h3>
                                        <p className="text-base text-darter-blue dark:text-blue-400">Mitacs - Internship</p>
                                        <p className="text-sm text-darter-gray dark:text-gray-400">Jun 2022 - Sep 2022 · 4 mos</p>
                                        <p className="text-sm text-darter-gray dark:text-gray-400">Montreal, Quebec, Canada · On-site</p>
                                        <p className="mt-2 text-base text-darter-gray dark:text-gray-300">
                                            Researched in General Topology, Homology and Fundamental Group Theory.
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </RevealOnScroll>

                        {/* --- Education Section --- */}
                        <RevealOnScroll delay={0.1}>
                            <section>
                                <h2 className="text-2xl font-semibold text-darter-navy dark:text-white border-b border-gray-200 dark:border-darter-dark-gray pb-2 mb-6">
                                    Education
                                </h2>
                                <div className="space-y-6">
                                    {/* McGill University */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-darter-navy dark:text-white">McGill University</h3>
                                        <p className="text-base text-darter-gray dark:text-gray-300">Bachelor of Engineering - BE, Co-op Software Engineering</p>
                                    </div>
                                    {/* Marianopolis College */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-darter-navy dark:text-white">Marianopolis College</h3>
                                        <p className="text-base text-darter-gray dark:text-gray-300">Diploma of College Studies, Honours Pure and Applied Science</p>
                                    </div>
                                </div>
                            </section>
                        </RevealOnScroll>

                        {/* --- Skills Section --- */}
                        <RevealOnScroll delay={0.2}>
                            <section>
                                <h2 className="text-2xl font-semibold text-darter-navy dark:text-white border-b border-gray-200 dark:border-darter-dark-gray pb-2 mb-6">
                                    Skills & Expertise
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "React & React Native", "Electron", "TypeScript", "JavaScript", "Node.js", "Python", "Java",
                                        "C++", "WinUI 3", "Win 11 SDK", "MySQL", "SQL", "Snowflake", "Docker", "GitHub Actions", "Bash",
                                        "Bootstrap", "Material UI"
                                    ].map((skill) => (
                                        /* Skill tag dark mode styles */
                                        <span key={skill} className="inline-block rounded-full bg-darter-blue/10 dark:bg-darter-blue/25 px-3 py-1 text-sm font-medium text-darter-blue dark:text-blue-300">
                      {skill}
                    </span>
                                    ))}
                                </div>
                            </section>
                        </RevealOnScroll>

                        {/* --- Interests Section --- */}
                        <RevealOnScroll delay={0.3}>
                            <section>
                                <h2 className="text-2xl font-semibold text-darter-navy dark:text-white border-b border-gray-200 dark:border-darter-dark-gray pb-2 mb-6">
                                    Interests
                                </h2>
                                {/* List item text color */}
                                <ul className="list-disc list-inside space-y-1 text-base text-darter-gray dark:text-gray-300">
                                    <li>Low-Level Kernel Driver</li>
                                    <li>Full Stack Development</li>
                                    <li>Primary Languages: C++, JavaScript, Python</li>
                                    <li>Competitions: Meta Cup, Leetcode Weekly, McHack, ConuHack, PolyAI</li>
                                </ul>
                            </section>
                        </RevealOnScroll>

                    </div>
                </div>
            </div>
        </>
    );
}