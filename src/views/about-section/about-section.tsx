"use client";

import {cn} from "@/lib/utils";
import {Translations, TranslationsContext} from "@/contexts/translations-context";
import AboutSectionHeader from "@/views/about-section/components/about-section-header";
import AboutSectionBentoGrid from "@/views/about-section/components/bento-grid/about-section-bento-grid";

export default function AboutSection({translations, currentLanguage}: {
    translations: Translations,
    currentLanguage: string
}) {

    return (
        <TranslationsContext.Provider value={{translations, currentLanguage}}>
            <section
                className={cn(
                    "flex min-h-screen flex-col items-center gap-10 p-5 pb-24"
                )}>
                <AboutSectionHeader/>
                <AboutSectionBentoGrid className={"md:w-[80vw]"}/>
            </section>
        </TranslationsContext.Provider>
    )
}
