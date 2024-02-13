"use client";

import styles from './hero-section.module.css';
import {cn} from "@/lib/utils";
import Face from "@/components/face/face";
import Signature from "@/components/signature/signature";
import {Translations, TranslationsContext} from "@/contexts/translations-context";
import {IconHandMove} from "@tabler/icons-react";

export default function HeroSection({translations, currentLanguage}: {
    translations: Translations,
    currentLanguage: string
}) {
    return (
        <TranslationsContext.Provider value={{translations, currentLanguage}}>
            <section
                className={cn(
                    styles.section,
                    "flex min-h-svh flex-col items-center justify-between gap-3 md:gap-20 p-5 pb-24"
                )}>

                <div className={cn(
                    "flex flex-col gap-5 items-center",
                    "w-full md:flex-row-reverse md:justify-center md:gap-16 lg:gap-24 xl:gap-52",
                )}>
                    <Face className={"h-72 md:h-96 lg:h-[28rem] xl:h-[32rem] xl:w-80"}/>

                    <Signature className={cn(
                        "md:text-[9rem] md:-rotate-12",
                        "lg:text-[11rem] xl:text-[13rem]",
                    )}/>
                </div>

                <IconHandMove className={cn(styles.handIcon, "mt-5 mb-16 size-8 -rotate-90")} stroke={1}/>
            </section>
        </TranslationsContext.Provider>
    )
}
