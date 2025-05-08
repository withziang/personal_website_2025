// src/components/SkillsGrid.tsx
'use client';

import { motion } from 'framer-motion';
import { FaDatabase, FaNodeJs, FaJava, FaMemory, FaBrain, FaCodeBranch, FaWindows } from 'react-icons/fa';
import { SiCplusplus, SiQt, SiPython, SiJavascript, } from 'react-icons/si';

// ... (Keep SkillItem interface and skills array) ...
const skills = [
    { name: 'C++', icon: <SiCplusplus size={20} className="text-accent-blue" />, description: 'High-performance systems, OOP, STL, Modern C++ (20, 23).' },
    { name: 'Data Structures & Algorithms', icon: <FaCodeBranch size={20} className="text-accent-green" />, description: 'Efficient problem solving, optimization, complexity analysis in C++.' },
    { name: 'Qt Framework', icon: <SiQt size={20} className="text-green-400" />, description: 'Cross-platform GUI development with C++.' },
    { name: 'WinAPI / OS Internals', icon: <FaWindows size={20} className="text-blue-400" />, description: 'Low-level Windows development, kernel software driver, system service.' },
    { name: 'SQL & Databases', icon: <FaDatabase size={20} className="text-accent-purple" />, description: 'Relational DBs (Postgres), Neo4j, TimescaleDB, ORMs (Hibernate, SQLAlchemy), DBMS concepts.' },
    { name: 'Node.js Backend', icon: <FaNodeJs size={20} className="text-green-500" />, description: 'REST APIs, TypeScript, OAuth, gRPC.' },
    { name: 'Java Backend', icon: <FaJava size={20} className="text-red-500" />, description: 'Spring Boot, Enterprise applications, JVM concepts.' },
    { name: 'Assembly (ASM)', icon: <FaMemory size={20} className="text-gray-400" />, description: 'Low-level architecture (ARM based), ARMv7, VHDL.' },
    { name: 'JavaScript / Python', icon: <div className="flex"><SiJavascript size={18} className="text-yellow-400 mr-1" /><SiPython size={18} className="text-blue-400" /></div>, description: 'Scripting, Full-stack development, Tooling.' },
    { name: 'AI / Quant Interest', icon: <FaBrain size={20} className="text-pink-400" />, description: 'Exploring applications in ML, quantitative finance strategies.' },
];


const gridVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0 },
};

export default function SkillsGrid() {
    return (
        <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4" // Slightly tighter gap
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {skills.map((skill) => (
                <motion.div
                    key={skill.name}
                    // Apply glass effect classes here
                    className="glass-card glass-card-hover p-4 flex flex-col" // Reduced padding
                    variants={itemVariants}
                    transition={{ type: 'spring', stiffness: 150, damping: 15 }}
                >
                    <div className="flex items-center mb-2 gap-2"> {/* Added gap */}
                        <span className="flex-shrink-0">{skill.icon}</span>
                        <h3 className="font-medium text-sm text-dark-text-primary flex-grow">{skill.name}</h3> {/* Smaller font */}
                    </div>
                    <p className="text-xs text-dark-text-secondary leading-snug flex-grow">{skill.description}</p> {/* Smaller font */}
                </motion.div>
            ))}
        </motion.div>
    );
}