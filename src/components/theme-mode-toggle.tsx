"use client"

import * as React from "react"
import {useTheme} from "next-themes"
import {ThemeSwitch} from "@/components/ui/theme-switch";
import {TranslationsContextProps, useTranslations} from "@/contexts/translations-context";

export function ThemeModeToggle() {
    const {setTheme, resolvedTheme} = useTheme()
    const {translations: t}: TranslationsContextProps = useTranslations();

    return (
        <ThemeSwitch
            title={t.Toggle_theme}
            checked={resolvedTheme === "dark"}
            onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        />
    )
}
