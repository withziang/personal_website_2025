import { SectionHeader } from "@/components/SectionHeader";
import { BlogCard } from "@/components/BlogCard";
import { posts } from "@/data/posts";

export default function BlogPage() {
    return (
        <section className="py-16">
            <SectionHeader>Blog</SectionHeader>
            <div className="space-y-8">
                {posts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                ))}
            </div>
        </section>
    );
}
