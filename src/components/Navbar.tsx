"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { FaBars, FaTimes } from "react-icons/fa";
import { HoverLift } from "./animations";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
];

export const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => setIsSidebarOpen(prev => !prev);
    const closeSidebar = () => setIsSidebarOpen(false);

    useEffect(() => {
        document.body.style.overflow = isSidebarOpen ? "hidden" : "unset";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isSidebarOpen]);

    return (
        <>
            {/* ===== Header ===== */}
            <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-darter-dark-gray bg-white/90 dark:bg-darter-dark-gray/90 backdrop-blur">
                <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    {/* Logo */}
                    <Link
                        href="/"
                        onClick={closeSidebar}
                        className="flex items-center gap-2 text-xl font-bold text-darter-navy dark:text-white hover:opacity-80 transition-opacity"
                    >
                        <span>ZW • Dev</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-6 text-sm font-medium">
                        {navLinks.map(({ href, label }) => (
                            <HoverLift key={href}>
                                <Link
                                    href={href}
                                    className="text-darter-gray dark:text-gray-300 hover:text-darter-blue dark:hover:text-white transition-colors"
                                >
                                    {label}
                                </Link>
                            </HoverLift>
                        ))}
                        <ThemeToggle />
                    </div>

                    {/* Mobile controls */}
                    <div className="flex items-center gap-2 md:hidden">
                        <ThemeToggle />
                        <button
                            onClick={toggleSidebar}
                            className="rounded-md p-2 text-darter-gray dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-darter-dark-gray focus:outline-none focus:ring-2 focus:ring-inset focus:ring-darter-purple"
                            aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
                        >
                            {isSidebarOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* ===== Sidebar Overlay ===== */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
                    onClick={closeSidebar}
                />
            )}

            {/* ===== Sidebar Panel ===== */}
            <aside
                className={`fixed top-0 left-0 z-50 h-full w-64 bg-white dark:bg-darter-dark-gray shadow-xl transform transition-transform duration-300 ease-in-out rounded-tr-xl rounded-br-xl overflow-y-auto ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                {/* Sidebar Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-darter-dark-gray">
                    <Link
                        href="/"
                        onClick={closeSidebar}
                        className="flex items-center gap-2 text-lg font-bold text-darter-navy dark:text-white"
                    >
                        <Image src="/darter-logo.png" alt="Logo" width={24} height={24} />
                        <span>ZW • Dev</span>
                    </Link>
                    <button
                        onClick={closeSidebar}
                        className="p-2 rounded-md text-darter-gray dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-darter-dark-gray focus:outline-none focus:ring-2 focus:ring-darter-purple"
                    >
                        <FaTimes className="h-5 w-5" />
                    </button>
                </div>

                {/* Sidebar Nav Links */}
                <nav className="flex flex-col p-4 space-y-3">
                    {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            onClick={closeSidebar}
                            className="px-3 py-2 rounded text-darter-navy dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-darter-dark-gray transition-colors"
                        >
                            {label}
                        </Link>
                    ))}
                </nav>
            </aside>
        </>
    );
};
