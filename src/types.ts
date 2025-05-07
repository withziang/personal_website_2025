export interface Project {
    title: string;
    description: string;
    image: string; // path in /public
    href: string;
}

export interface Post {
    title: string;
    excerpt: string;
    slug: string;
    date: string;
}
