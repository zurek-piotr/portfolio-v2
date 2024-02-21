"use client";

import styles from "./bento-grid-flip-card.module.css";
import {cn} from "@/lib/utils";
import React from "react";
import {IconArrowBack} from "@tabler/icons-react";

export default function BentoGridFlipCard(
    {
        frontChildren,
        backChildren,
        rootClassName,
        innerWrapperClassName,
        frontBackClassName,
        frontClassName,
        backClassName
    }: {
        frontChildren: React.ReactNode
        backChildren: React.ReactNode
        rootClassName?: string
        innerWrapperClassName?: string
        frontBackClassName?: string
        frontClassName?: string
        backClassName?: string
    }
) {
    return (
        <div className={cn(styles.flipCard, rootClassName)}>
            <div className={cn(styles.flipCardInner,innerWrapperClassName)}>
                <div className={cn(styles.flipCardFront, frontBackClassName, frontClassName)}>
                    {frontChildren}
                </div>
                <div className={cn(styles.flipCardBack, frontBackClassName, backClassName)}>
                    {backChildren}
                </div>
                <IconArrowBack className={cn("absolute bottom-0 right-0 w-8 h-8 p-2 text-muted/30 size-8")} stroke={1} />
            </div>
        </div>
    )
}
