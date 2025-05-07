import "./globals.css";
import { Metadata } from "next";
import { Providers } from "./providers"; // wraps ThemeProvider etc.
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
    title: "Ziang Wang | Software Engineer",
    description: "Personal site, projects, and blog by Ziang Wang.",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className="bg-white text-darter-navy dark:bg-darter-dark-gray dark:text-white">
        <Providers>
            <Navbar/>
            <main className="mx-auto max-w-5xl px-4">{children}</main>
        </Providers>
        </body>
        </html>
    );
}
