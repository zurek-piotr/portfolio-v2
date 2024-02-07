"use client";

import styles from './navigation.module.css';
import {ThemeModeToggle} from "@/components/theme-mode-toggle";
import {Button} from "@/components/ui/button";
import {Translations, TranslationsContext} from "@/contexts/translations-context";
import {LanguageToggle} from "@/components/language-toggle";
import {useCallback, useEffect, useState} from "react";
import {cn} from "@/lib/utils";
import useMediaQuery from "@/app/hooks/use-media-query";

export default function Navigation({translations, currentLanguage}: {
    translations: Translations,
    currentLanguage: string
}) {
    const [hasBackground, setHasBackground] = useState(false);
    const isDesktop = useMediaQuery("(min-width: 768px)")
    const buttonClasses: string = "text-xs md:text-sm lg:text-base rounded-full";
    const onScroll = useCallback(() => {
        const {scrollY} = window;
        setHasBackground(scrollY > 20);
    }, []);
    const backgroundClasses = cn(styles.background, "px-2 py-1 rounded-full");

    useEffect(() => {
        if (!isDesktop) {
            setHasBackground(true)
            return;
        }
        onScroll();

        window.addEventListener("scroll", onScroll, {passive: true});
        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, [isDesktop, hasBackground, onScroll])

    const toggles = <div className={cn(
            "absolute top-1/2 -translate-y-1/2 right-2",
            "z-50 flex flex-col flex-nowrap items-center gap-0.5",
        )
    }>
        <ThemeModeToggle/>
        <LanguageToggle/>
    </div>

    const buttons = <>
        <Button className={buttonClasses} variant={"ghost"}>{translations?.About}</Button>
        <Button className={buttonClasses} variant={"ghost"}>{translations?.Projects}</Button>
        <Button className={buttonClasses} variant={"ghost"}>{translations?.Contact}</Button>
        <Button className={buttonClasses} variant={"ghost"}>{translations?.Hire_me}</Button>
    </>

    return (
        <TranslationsContext.Provider value={{translations, currentLanguage}}>
            {isDesktop ?
                <nav className={cn(
                    "w-full fixed z-40 gap-1 top-12 px-4",
                )}>
                    {toggles}

                    <div
                        className={cn(
                            "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                            "z-50 -top-3",
                            hasBackground && backgroundClasses
                        )}>
                        {buttons}
                    </div>
                </nav>
                :
                <>
                    <nav className={cn(
                        "w-full fixed z-40 gap-1 top-10 px-4",
                    )}>
                        {toggles}
                    </nav>

                    <nav className={cn(
                        "w-full fixed z-40 gap-1",
                        isDesktop ? "top-8 px-4" : "bottom-0",
                    )}>
                        <div
                            className={cn(
                                "flex flex-row flex-nowrap items-center justify-center",
                                "z-50 flex flex-row flex-nowrap items-center",
                                hasBackground && backgroundClasses
                            )}>
                            {buttons}
                        </div>
                    </nav>
                </>
            }
        </TranslationsContext.Provider>
    )
}
