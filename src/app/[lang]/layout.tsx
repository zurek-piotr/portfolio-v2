import type {Metadata} from "next";
import {Nunito} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/providers/theme-provider";
import {i18n, Locale} from '@/i18n.config'
import {GoogleAnalytics} from '@next/third-parties/google'
import React from "react";

const font = Nunito({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Portfolio | Piotr Żurek",
    description: "Piotr Żurek FullStack Developer portfolio",
    keywords: "Żurek, Piotr, Portfolio, Developer, FullStack, FrontEnd, BackEnd, Tech, Lead",
    openGraph: {
        title: "Portfolio | Piotr Żurek",
        description: "Piotr Żurek FullStack Developer portfolio",
        type: "website",
        url: "https://zurekpiotr.pl",
        emails: ["kontakt@zurekpiotr.pl"],
        images: [
            {
                url: "https://zurekpiotr.pl/images/thumbnail.jpg",
                width: 1897,
                height: 888,
                alt: "Piotr Żurek FullStack Developer portfolio",
            },
        ],
    },
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
        <GoogleAnalytics gaId="G-LR8FY9ELS0"/>
        </body>
        </html>
    );
}

export default RootLayout;
