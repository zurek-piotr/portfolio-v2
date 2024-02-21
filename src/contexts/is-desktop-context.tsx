"use client"

import {Context, createContext, ReactNode, useContext} from 'react';
import useMediaQuery from "@/hooks/use-media-query";


export const IsDesktopContext: Context<boolean> = createContext<boolean>(false);

export const useIsDesktop = () => useContext(IsDesktopContext);

export function IsDesktopProvider({children}: { children: ReactNode }) {
    const isDesktop = useMediaQuery("(min-width: 768px)")

    return (
        <IsDesktopContext.Provider value={isDesktop}>
            {children}
        </IsDesktopContext.Provider>
    )
}
