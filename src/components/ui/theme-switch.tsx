"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import {cn} from "@/lib/utils"
import {IconBulbFilled, IconBulbOff} from "@tabler/icons-react";

const ThemeSwitch = React.forwardRef<
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
                "pointer-events-none justify-center items-center flex h-7 w-7 rounded-full bg-background shadow-lg ring-0 group-hover:transition-transform group-hover:data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
            "lg:h-9 lg:w-9"
            )}
        >
            {props.checked ?
                <IconBulbOff
                    className="h-5 w-5 lg:h-6 lg:w-6 py-0.5"/>
                :
                <IconBulbFilled
                    className="h-5 w-5 lg:h-6 lg:w-6 py-0.5"/>
            }
        </SwitchPrimitives.Thumb>
    </SwitchPrimitives.Root>
))
ThemeSwitch.displayName = SwitchPrimitives.Root.displayName

export {ThemeSwitch}
