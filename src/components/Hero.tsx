import Link from "next/link";
import { FadeInAndSlideIn } from "./animations";

export const Hero = () => (
    <section className="flex flex-col items-start justify-center py-32 text-left px-6 sm:px-8">
        <div>
            <FadeInAndSlideIn>
                <h1
                    className="text-5xl p-3 sm:text-6xl font-extrabold tracking-tight
                     text-transparent bg-clip-text bg-gradient-to-r from-darter-blue to-darter-purple
                     dark:bg-none dark:text-white transition-colors"
                >
                    Hi, I’m Ziang
                </h1>
            </FadeInAndSlideIn>
        </div>

        <FadeInAndSlideIn delay={0.2}>
            <p className="mt-4 max-w-xl text-lg text-darter-gray dark:text-gray-400 leading-relaxed">
                Experienced software engineer crafting high-performance C++ backends
                and smooth, elegant UIs. Passionate about security, data, and building tools that scale 🚀
            </p>
        </FadeInAndSlideIn>

        <FadeInAndSlideIn delay={0.4}>
            <div className="mt-8 flex flex-wrap gap-3">
                <Link
                    href="/projects"
                    className="rounded-full bg-darter-blue px-6 py-2.5 text-sm font-semibold text-white shadow-sm
                   hover:scale-[1.03] hover:opacity-95 transition-transform duration-150 ease-in-out"
                >
                    See Projects
                </Link>
                <Link
                    href="/about"
                    className="rounded-full border border-darter-blue px-6 py-2.5 text-sm font-semibold text-darter-blue
                   hover:bg-darter-blue/10 transition-colors duration-150"
                >
                    About Me
                </Link>
            </div>
        </FadeInAndSlideIn>
    </section>
);
