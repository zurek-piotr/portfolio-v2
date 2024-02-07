"use client"

import {Context, createContext, useContext} from 'react';

export interface Translations {
    [key: string]: string;
}

export interface TranslationsContextProps {
    translations: Translations;
    currentLanguage: string;
}

export const TranslationsContext: Context<TranslationsContextProps|null> = createContext<TranslationsContextProps|null>(null);

export const useTranslations = () => useContext(TranslationsContext) as TranslationsContextProps
