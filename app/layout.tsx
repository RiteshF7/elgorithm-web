import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import type {ReactNode} from "react";
import {Header} from "@/modules/common/components/header/Header";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Elgorithm",
    description: "Elgorithm is the new way to learn",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Header/>
        <main className={'flex flex-col overflow-y-auto max-w-desktop px-2 py-4 mx-auto'}>
            {children}
        </main>
        </body>
        </html>
    );
}
