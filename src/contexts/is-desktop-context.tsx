"use client"

import {Context, createContext, useContext} from 'react';


export const IsDesktopContext: Context<boolean> = createContext<boolean>(false);

export const useIsDesktop = () => useContext(IsDesktopContext)
