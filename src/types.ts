export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    imageUrl: string;
    technologies: string[];
    liveUrl?: string;
    repoUrl?: string;
    featured?: boolean;
    glowColor?: 'yellow' | 'blue' | 'purple';
}

export interface Post {
    id: string;
    title: string;
    date: string;
    excerpt: string;
    imageUrl: string;
    slug: string;
    featured?: boolean;
}