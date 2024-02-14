"use client"

import * as React from "react"

import {
    CommandDialog,
    CommandEmpty,
    CommandInput,
    CommandItem,
    CommandList,
    CommandShortcut,
} from "@/components/ui/command"
import {IconBulb, IconMessage, IconUser} from "@tabler/icons-react";
import {cn} from "@/lib/utils";
import {TranslationsContextProps, useTranslations} from "@/contexts/translations-context";
import {HireMeButton} from "@/components/hire-me-button";
import Link from "next/link";

export function CommandMenu({className = ""}: { className?: string }) {
    const [open, setOpen] = React.useState(false)
    const {translations: t, currentLanguage}: TranslationsContextProps = useTranslations();
    const aboutRef = React.useRef<HTMLAnchorElement>(null)
    const projectsRef = React.useRef<HTMLAnchorElement>(null)
    const contactRef = React.useRef<HTMLAnchorElement>(null)
    const hireRef = React.useRef<HTMLAnchorElement>(null)

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "/") {
                e.preventDefault()
                setOpen((open) => !open)
            }
            if (open) {
                if ((e.metaKey || e.ctrlKey)) {
                    switch (e.key) {
                        case "a":
                            e.preventDefault();
                            aboutRef.current?.click()
                            break;
                        case "p":
                            e.preventDefault();
                            projectsRef.current?.click()
                            break;
                        case "c":
                            e.preventDefault();
                            contactRef.current?.click()
                            break;
                        case "h":
                            e.preventDefault();
                            hireRef.current?.click()
                            break;
                    }
                }
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [open])

    return (
        <>
            <kbd className={cn(
                "text-sm text-muted-foreground",
                "inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100",
                className
            )}
                 onClick={() => setOpen(true)}
            >
                <span className={"gap-0.5 inline-flex items-baseline"}><span className="text-xs">⌘</span>/</span>
            </kbd>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder={`${t.Type_a_command_or_search}...`}/>
                <CommandList>
                    <CommandEmpty>{t.No_results_found}.</CommandEmpty>
                    <CommandItem onSelect={() => aboutRef.current?.click()}>
                        <IconUser className="mr-2 h-4 w-4"/>
                        <Link scroll={false} ref={aboutRef} href={`/${currentLanguage}`}>{t.About}</Link>
                        <CommandShortcut>⌘A</CommandShortcut>
                    </CommandItem>
                    <CommandItem onSelect={() => projectsRef.current?.click()}>
                        <IconBulb className="mr-2 h-4 w-4"/>
                        <Link scroll={false} ref={projectsRef} href={`/${currentLanguage}/projects`}>{t.Projects}</Link>
                        <CommandShortcut>⌘P</CommandShortcut>
                    </CommandItem>
                    <CommandItem onSelect={() => contactRef.current?.click()}>
                        <IconMessage className="mr-2 h-4 w-4"/>
                        <span ref={contactRef}>{t.Contact}</span>
                        <CommandShortcut>⌘C</CommandShortcut>
                    </CommandItem>
                    <CommandItem onSelect={() => hireRef.current?.click()} className={"group"}>
                        <HireMeButton innerRef={hireRef} className={"bg-transparent dark:bg-transparent dark:text-muted-foreground pl-1"}/>
                        <CommandShortcut>⌘H</CommandShortcut>
                    </CommandItem>
                </CommandList>
            </CommandDialog>
        </>
    )
}
