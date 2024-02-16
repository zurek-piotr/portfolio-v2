"use client";

import {cn} from "@/lib/utils";
import {ReactNode} from "react";
import {Button} from "@/components/ui/button";

export type MessageVariant = "system" | "user" | "option";

export default function Message({variant, clickFnc, children }: { variant: MessageVariant, clickFnc: () => void, children: ReactNode }) {
    let baseClasses: string = "rounded-xl p-3 px-4 pr-6 text-base text-justify text-wrap break-words whitespace-pre-line";
    let additionalClasses: string = "";

    switch (variant) {
        case "system":
            additionalClasses = "bg-secondary text-secondary-foreground";
            break;
        case "user":
            additionalClasses = "bg-accent text-accent-foreground";
            break;
        case "option":
            additionalClasses = "bg-accent/20 dark:bg-secondary/40 dark:hover:bg-secondary text-accent-foreground dark:text-white border-2 border-accent";
            break;
    }

    const renderBody = () => {
        if (variant === "option") {
           return <Button variant={"ghost"} className={cn(baseClasses, additionalClasses)}>
                {children}
            </Button>
        } else {
            return <div className={cn(baseClasses, additionalClasses)}>
                {children}
            </div>
        }
    }

    return (
        <div className={cn(
            "w-full inline-flex flex-row-reverse",
            variant === "system" && "flex-row",
            variant === "option" && "cursor-pointer",
            "animate-fade-in-up",
        )}
             onClick={() => clickFnc()}
        >
            {renderBody()}

        </div>
    )
}
