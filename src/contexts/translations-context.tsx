"use client"

import {Context, createContext, useContext} from 'react';

export interface Translations {
    [key: string]: any;
}

export interface TranslationsContextProps {
    translations: Translations;
    currentLanguage: string;
}

export const TranslationsContext: Context<TranslationsContextProps|null> = createContext<TranslationsContextProps|null>(null);

export const useTranslations = () => useContext(TranslationsContext) as TranslationsContextProps

export function getTranslation(translations: Translations, key: string): string {
    return key.split('.').reduce((a, b) => a?.[b], translations)?.toString() ?? "";
}
