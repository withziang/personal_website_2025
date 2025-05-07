export const TechBadge = ({ tech }: { tech: string }) => (
    <span className="inline-block rounded-full bg-darter-blue/10 dark:bg-darter-blue/25 px-3 py-1 text-sm font-medium text-darter-blue dark:text-blue-300">
    {tech}
  </span>
);