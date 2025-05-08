import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import Navbar from '@/components/Navbar'; // Import the Navbar

export const metadata: Metadata = {
    title: 'Ziang - Backend & Systems Developer',
    description: 'Specializing in C++, Backend Systems, and Low-Level Programming.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} dark bg-linear-bg`}>
        <body>
        <div id="top">
            <Navbar />
            <main className="w-full max-w-6xl mx-auto px-4 pb-8 md:pb-16">
                {children}
            </main>
        </div>
        </body>
        </html>
    );
}