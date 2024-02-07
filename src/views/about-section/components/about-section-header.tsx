"use client";

import {TranslationsContextProps, useTranslations} from "@/contexts/translations-context";
import {cn} from "@/lib/utils";

export default function AboutSectionHeader() {
    const {translations: t}: TranslationsContextProps = useTranslations();

    return (
        <span className={cn(
            "text-center break-words text-5xl font-bold",
            "sm:text-6xl",
            "lg:text-left lg:text-5xl",
            "xl:text-6xl",
        )
        }>
            {t.Your} <span className={"font-black"}>{t.NEXT}</span> {t.FullStack} {t.Developer}
        </span>
    )
}
