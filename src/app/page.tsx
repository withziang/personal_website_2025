// src/app/page.tsx
import Hero from '@/components/Hero';
import SkillsGrid from '@/components/SkillsGrid';
import ProjectListItem from '@/components/ProjectListItem';
import SectionHeader from '@/components/SectionHeader';
import { projectsData } from '@/data/projects';
import { FiTool, FiBriefcase, FiHeart, FiTarget, FiDollarSign, FiLayers } from 'react-icons/fi';
import { AnimatedSection, StaggeredList, StaggeredListItem } from '@/components/animations';

export default function HomePage() {
    const relevantProjects = projectsData;
    const interests = [
        { text: 'High-performance C++ systems with modern web stacks.', icon: <FiLayers className="text-accent-purple" /> },
        { text: 'Quantitative Software Engineering & Algorithmic Trading Systems.', icon: <FiDollarSign className="text-accent-green" /> },
        { text: 'Full-Stack Development with a focus on backend architecture.', icon: <FiTarget className="text-accent-blue" /> },
        { text: 'Exploring low-level optimizations and system internals.', icon: <FiTool className="text-linear-text-secondary" /> },
    ];

    return (
        <div className="space-y-12 md:space-y-20">
            <Hero />
            <div id="skills">
                <AnimatedSection>
                    <SectionHeader
                        title="Core Expertise"
                        icon={<FiTool size={18} className="text-accent-cyan" />}
                    />
                    <SkillsGrid />
                </AnimatedSection>
            </div>

            <div id="projects">
                <AnimatedSection>
                    <SectionHeader
                        title="Featured Projects"
                        icon={<FiBriefcase size={18} className="text-accent-cyan" />}
                        subtitle="Highlighting key work demonstrating backend and systems skills."
                    />
                    <div className="space-y-4">
                        {relevantProjects.map((project, index) => (
                            <ProjectListItem key={project.id} project={project} animationDelay={index * 0.08} />
                        ))}
                    </div>
                </AnimatedSection>
            </div>

            <div id="interests">
                <AnimatedSection>
                    <SectionHeader
                        title="Interests & Focus"
                        icon={<FiHeart size={18} className="text-accent-cyan" />}
                    />
                    <div className="glass-card p-5">
                        <StaggeredList className="space-y-3">
                            {interests.map((interest, index) => (
                                <StaggeredListItem key={index} className="flex items-start space-x-3">
                <span className="flex-shrink-0 mt-1 text-accent-cyan">
                    {interest.icon || <FiTarget />}
                </span>
                                    <span className="text-sm text-linear-text-secondary leading-relaxed">
                  {interest.text}
                </span>
                                </StaggeredListItem>
                            ))}
                        </StaggeredList>
                    </div>
                </AnimatedSection>
            </div>


        </div>
    );
}