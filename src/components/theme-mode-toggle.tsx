"use client"

import * as React from "react"
import {useTheme} from "next-themes"
import {ThemeSwitch} from "@/components/ui/theme-switch";

export function ThemeModeToggle() {
    const {setTheme, resolvedTheme} = useTheme()

    return (
        <ThemeSwitch
            checked={resolvedTheme === "dark"}
            onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        />
    )
}
