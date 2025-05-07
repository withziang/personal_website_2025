import Link from "next/link";
import { SlideIn } from "./animations";
import { Post } from "@/types";

export const BlogCard = ({ post }: { post: Post }) => (
    <SlideIn direction="right">
        <article className="rounded-lg border border-gray-200 dark:border-darter-dark-gray p-5 hover:shadow-lg transition-shadow">
            <time
                dateTime={post.date}
                className="block text-xs text-darter-gray dark:text-gray-400"
            >
                {new Date(post.date).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                })}
            </time>
            <h3 className="mt-1 text-lg font-semibold text-darter-navy dark:text-white">
                {post.title}
            </h3>
            <p className="mt-2 text-sm text-darter-gray dark:text-gray-400">
                {post.excerpt}
            </p>
            <Link
                href={`/blog/${post.slug}`}
                className="mt-3 inline-block text-darter-blue hover:underline"
            >
                Read&nbsp;more →
            </Link>
        </article>
    </SlideIn>
);
