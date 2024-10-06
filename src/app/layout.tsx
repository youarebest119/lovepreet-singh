import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/index.scss";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Lovepreet Singh",
    description: "Lovepreet Singh - Professional web developer and designer with 2 years of experience and extensive knowledge in web development and design. ",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
