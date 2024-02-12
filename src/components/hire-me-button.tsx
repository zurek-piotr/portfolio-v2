"use client"

import * as React from "react"
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {IconHeartHandshake} from "@tabler/icons-react";


export function HireMeButton({iconClassName, className, children, ...props}: { iconClassName?: string, className?: string, children: React.ReactNode }) {
    return (
        <Button className={cn("group bg-secondary", className)} variant={"ghost"} {...props}>
            <IconHeartHandshake className={cn(
                `text-primary -rotate-[35deg] group-hover:-rotate-[15deg] transition duration-300 ease-in-out`,
                iconClassName
            )} stroke={2}/>
            <p className={"font-bold -ml-0.5"}>{children}</p>
        </Button>
    )
}
