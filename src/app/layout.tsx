'use client';

import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import './globals.scss';
import '../i18nify';


const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            
            
            <html lang="en">
                <title>Front End Dev</title>
                <link rel="icon" type="image/svg+xml" href="/icon.svg"></link>
                <body
                    className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                >
                    {children}
                </body>
            </html>
        </>
    );
}
