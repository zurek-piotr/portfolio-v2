"use client";

import styles from './navigation.module.css';
import {ThemeModeToggle} from "@/components/theme-mode-toggle";
import {Button, buttonVariants} from "@/components/ui/button";
import {Translations, TranslationsContext} from "@/contexts/translations-context";
import {LanguageToggle} from "@/components/language-toggle";
import {useCallback, useEffect, useState} from "react";
import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation";
import {HireMeButton} from "@/components/hire-me-button/hire-me-button";
import {CommandMenu} from "@/components/command-menu";
import Link from "next/link";
import {IsOpenChatProvider} from "@/contexts/is-open-chat-context";
import {Chat} from "@/components/chat/chat";

export default function Navigation({translations, currentLanguage}: {
    translations: Translations,
    currentLanguage: string
}) {
    const [hasBackground, setHasBackground] = useState(false);
    const buttonClasses: string = "text-xs md:text-sm lg:text-base rounded-full";
    const pathname = usePathname();
    const [isOpenChat, setIsOpenChat] = useState(false);

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
        <Link
            className={cn(
                buttonVariants({variant: "ghost"}),
                buttonClasses,
                pathname === `/${currentLanguage}` && "bg-accent/50"
            )}
            href={`/${currentLanguage}`}
            scroll={false}
        >
            {translations?.About}
        </Link>
        <Link
            className={cn(
                buttonVariants({variant: "ghost"}),
                buttonClasses,
                pathname === `/${currentLanguage}/projects` && "bg-accent/50"
            )}
            href={`/${currentLanguage}/projects`}
            scroll={false}
        >
            {translations?.Projects}
        </Link>
        <Button className={buttonClasses} onClick={() => setIsOpenChat(!isOpenChat)}
                variant={"ghost"}>{translations?.Contact}</Button>
        <HireMeButton className={buttonClasses}/>
    </>

    return (
        <TranslationsContext.Provider value={{translations, currentLanguage}}>
            <IsOpenChatProvider setIsOpenChat={setIsOpenChat} isOpenChat={isOpenChat}>
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
                        <CommandMenu className={cn(
                            buttonClasses,
                            "max-md:hidden bg-transparent text-foreground mr-3 p-3 py-4 font-extralight",
                            "hover:bg-accent hover:border-accent hover:text-accent-foreground border-foreground/30",
                        )}/>
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

                <Chat/>
            </IsOpenChatProvider>
        </TranslationsContext.Provider>
    )
}
