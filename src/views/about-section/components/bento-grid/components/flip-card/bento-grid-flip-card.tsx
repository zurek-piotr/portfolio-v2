"use client";

import styles from "./bento-grid-flip-card.module.css";
import {cn} from "@/lib/utils";
import React from "react";

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
            </div>
        </div>
    )
}
