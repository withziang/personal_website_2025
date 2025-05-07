import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { BlogCard } from "@/components/BlogCard";
import { projects } from "@/data/projects";
import { posts } from "@/data/posts";

export default function HomePage() {
  return (
      <>
        <Hero />

        <section className="py-16">
          <SectionHeader>Featured Projects</SectionHeader>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.slice(0, 2).map((p) => (
                <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </section>

        <section className="py-16">
          <SectionHeader>Latest Blog Posts</SectionHeader>
          <div className="space-y-8">
            {posts.slice(0, 3).map((post) => (
                <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      </>
  );
}
