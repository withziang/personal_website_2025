import { FadeIn } from "./animations";

export const SectionHeader = ({ children }: { children: React.ReactNode }) => (
    <FadeIn>
        <h2 className="mb-8 border-b border-gray-200 dark:border-darter-dark-gray pb-2 text-3xl font-semibold text-darter-navy dark:text-white">
            {children}
        </h2>
    </FadeIn>
);