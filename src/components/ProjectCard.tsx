import Image from "next/image";
import Link from "next/link";
import { HoverLift, FadeInAndSlideIn } from "./animations";
import { Project } from "@/types";

export const ProjectCard = ({ project }: { project: Project }) => (
    <FadeInAndSlideIn>
        <HoverLift>
            <article className="rounded-xl border border-gray-200 dark:border-darter-dark-gray overflow-hidden shadow-sm">
                <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={500}
                    className="h-48 w-full object-cover"
                />
                <div className="p-5 space-y-3">
                    <h3 className="text-xl font-semibold text-darter-navy dark:text-white">
                        {project.title}
                    </h3>
                    <p className="text-sm text-darter-gray dark:text-gray-400">
                        {project.description}
                    </p>
                    <Link
                        href={project.href}
                        target="_blank"
                        className="inline-block text-darter-blue hover:underline"
                    >
                        View&nbsp;Project →
                    </Link>
                </div>
            </article>
        </HoverLift>
    </FadeInAndSlideIn>
);
