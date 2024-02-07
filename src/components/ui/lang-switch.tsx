"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import {cn} from "@/lib/utils"

const LangSwitch = React.forwardRef<
    React.ElementRef<typeof SwitchPrimitives.Root>,
    React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({className, ...props}, ref) => (
    <SwitchPrimitives.Root
        className={cn(
            "group peer inline-flex h-8 w-8 hover:w-12 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
            "lg:h-10 lg:w-10 lg:hover:w-14",
            className
        )}
        {...props}
        ref={ref}
    >
        <SwitchPrimitives.Thumb
            className={cn(
                "flex h-7 w-7  text-xs font-black justify-center items-center pointer-events-none  rounded-full bg-background shadow-lg ring-0 group-hover:transition-transform group-hover:data-[state=checked]:translate-x-4 group-hover:data-[state=unchecked]:translate-x-0",
                "lg:h-9 lg:w-9 lg:text-sm"
            )}
        >
            {props.checked ?
                "PL"
                :
                "EN"
            }
        </SwitchPrimitives.Thumb>
    </SwitchPrimitives.Root>
))
LangSwitch.displayName = SwitchPrimitives.Root.displayName

export {LangSwitch}
