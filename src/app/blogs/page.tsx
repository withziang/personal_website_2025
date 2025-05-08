import BlogCard from '@/components/BlogCard';
import SectionHeader from '@/components/SectionHeader';
import { postsData } from '@/data/posts';
import { AnimatedSection } from '@/components/animations';

export default function BlogPage() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <AnimatedSection>
                <SectionHeader
                    title="My blogs"
                    subtitle="Sharing knowledge, insights, and stories from the world of development."
                />
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {postsData.map((post, index) => (
                    <BlogCard key={post.id} post={post} animationDelay={index * 0.1} />
                ))}
            </div>
        </div>
    );
}