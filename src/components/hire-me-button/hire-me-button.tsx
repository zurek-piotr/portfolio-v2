"use client"

import * as React from "react"
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {IconHeartHandshake} from "@tabler/icons-react";
import Link from "next/link";
import {TranslationsContextProps, useTranslations} from "@/contexts/translations-context";
import {getMailTo} from "@/components/hire-me-button/utils";


export function HireMeButton({linkClassName, iconClassName, className, innerRef, ...props}: {
    linkClassName?: string,
    iconClassName?: string,
    className?: string,
    innerRef?: React.Ref<HTMLAnchorElement>
}) {
    const {translations: t}: TranslationsContextProps = useTranslations();

    return (
        <Link
            ref={innerRef}
            className={cn(linkClassName, "group")}
            href={getMailTo(t)}
        >
            <Button
                className={cn("bg-secondary dark:bg-primary dark:text-primary-foreground", className)}
                variant={"ghost"} {...props}
            >
                <IconHeartHandshake
                    className={cn(
                        `text-primary -rotate-[35deg] group-hover:-rotate-[15deg] transition duration-300 ease-in-out`,
                        "dark:text-secondary",
                        iconClassName
                    )}
                    stroke={2}
                />
                <p className={"font-bold -ml-0.5 group-hover:text-accent-foreground"}>{t?.Hire_me}</p>
            </Button>
        </Link>
    )
}
