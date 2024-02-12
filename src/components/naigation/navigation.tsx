"use client";

import styles from './navigation.module.css';
import {ThemeModeToggle} from "@/components/theme-mode-toggle";
import {Button} from "@/components/ui/button";
import {Translations, TranslationsContext} from "@/contexts/translations-context";
import {LanguageToggle} from "@/components/language-toggle";
import {useCallback, useEffect, useState} from "react";
import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation";
import {HireMeButton} from "@/components/hire-me-button";

export default function Navigation({translations, currentLanguage}: {
    translations: Translations,
    currentLanguage: string
}) {
    const [hasBackground, setHasBackground] = useState(false);
    const buttonClasses: string = "text-xs md:text-sm lg:text-base rounded-full";
    const pathname = usePathname();

    const onScroll = useCallback(() => {
        const {scrollY} = window;
        setHasBackground(scrollY > 20);
    }, []);

    useEffect(() => {
        onScroll();

        window.addEventListener("scroll", onScroll, {passive: true});
        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, [hasBackground, onScroll])

    const toggles = <div className={cn(
        "absolute top-1/2 -translate-y-1/2 right-2",
        "z-50 flex flex-col flex-nowrap items-center gap-0.5",
    )
    }>
        <ThemeModeToggle/>
        <LanguageToggle/>
    </div>

    const buttons = <>
        <Button className={cn(buttonClasses, pathname === `/${currentLanguage}` && "bg-accent/50")}
                variant={"ghost"}>{translations?.About}</Button>
        <Button className={buttonClasses} variant={"ghost"}>{translations?.Projects}</Button>
        <Button className={buttonClasses} variant={"ghost"}>{translations?.Contact}</Button>
        <HireMeButton className={buttonClasses}>{translations?.Hire_me}</HireMeButton>
    </>

    return (
        <TranslationsContext.Provider value={{translations, currentLanguage}}>
            <nav className={cn(
                "max-md:hidden w-full fixed z-40 gap-1 top-12 px-4",
            )}>
                {toggles}

                <div
                    className={cn(
                        "flex flex-row flex-nowrap items-center justify-center",
                        "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                        "z-50 -top-3",
                        "px-2 py-1 rounded-full",
                        "transition ease-in-out delay-75 duration-300",
                        "motion-reduce:transition-none",
                        hasBackground && styles.background
                    )}>
                    {buttons}
                </div>
            </nav>

            <>
                <nav className={cn(
                    "md:hidden w-full fixed z-40 gap-1 top-10 px-4",
                )}>
                    {toggles}
                </nav>

                <nav className={cn(
                    "md:hidden w-full fixed z-40 gap-1",
                    "bottom-0.5",
                )}>
                    <div
                        className={cn(
                            "flex flex-row flex-nowrap items-center justify-center",
                            "z-50 flex flex-row flex-nowrap items-center",
                            "px-2 py-1 rounded-full",
                            styles.background
                        )}>
                        {buttons}
                    </div>
                </nav>
            </>
        </TranslationsContext.Provider>
    )
}
