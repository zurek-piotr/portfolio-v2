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
                    "flex min-h-svh h-svh flex-col items-center justify-between gap-5 p-5 md:mt-5 pb-24"
                )}>

                <Face className={"mt-7"}/>

                <Signature/>

                <IconHandMove className={cn(styles.handIcon, "my-5 size-8 -rotate-90")} stroke={1}/>
            </section>
        </TranslationsContext.Provider>
    )
}
