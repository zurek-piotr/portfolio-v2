"use client"

import * as React from "react"
import {TranslationsContextProps, useTranslations} from "@/contexts/translations-context";
import {i18n} from "@/i18n.config";
import {usePathname, useRouter} from "next/navigation";
import {LangSwitch} from "@/components/ui/lang-switch";


export function LanguageToggle() {
    const {translations: t}: TranslationsContextProps = useTranslations();
    const {push} = useRouter();
    const {currentLanguage} = useTranslations()
    const languages = i18n.locales;
    const otherLanguage = languages.find((lang) => lang !== currentLanguage) ?? languages[0]

    const pathName = usePathname()
    const redirectedPathName = (locale: string) => {
        if (!pathName) return '/'
        const segments = pathName.split('/')
        segments[1] = locale
        return segments.join('/')
    }

    return (
        <LangSwitch
            title={t.Toggle_language}
            checked={currentLanguage === "pl"}
            onCheckedChange={() => push(redirectedPathName(otherLanguage), {scroll: false})}
        />
    )
}
