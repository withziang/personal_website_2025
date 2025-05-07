"use client";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";
import { HoverLift } from "@/components/animations";

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const isDark = theme === "dark";

    return (
        <HoverLift>
            <button
                onClick={() => setTheme(isDark ? "light" : "dark")}
                aria-label="Toggle theme"
                className="rounded-full p-2 text-darter-gray dark:text-gray-300 hover:bg-darter-blue/10 dark:hover:bg-darter-blue/20"
            >
                {isDark ? <FaSun /> : <FaMoon />}
            </button>
        </HoverLift>
    );
};