import type {Metadata} from "next";
import {Nunito} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/providers/theme-provider";
import {i18n, Locale} from '@/i18n.config'
import React from "react";

const font = Nunito({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Portfolio | Piotr Żurek",
    description: "FullStack Developer portoflio",
};

export async function generateStaticParams() {
    return i18n.locales.map(locale => ({lang: locale}))
}

async function RootLayout({children, params}: Readonly<{ children: React.ReactNode; params: { lang: Locale } }>) {
    return (
        <html lang={params.lang} suppressHydrationWarning>
        <body className={font.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}

export default RootLayout;
