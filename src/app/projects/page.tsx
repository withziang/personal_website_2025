import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
    return (
        <section className="py-16">
            <SectionHeader>All Projects</SectionHeader>
            <div className="grid gap-10 md:grid-cols-2">
                {projects.map((p) => (
                    <ProjectCard key={p.title} project={p} />
                ))}
            </div>
        </section>
    );
}
