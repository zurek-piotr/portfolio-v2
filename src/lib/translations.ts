import 'server-only'
import type { Locale } from '@/i18n.config'

const locales = {
    en: () => import('@/locales/en.json').then(module => module.default),
    pl: () => import('@/locales/pl.json').then(module => module.default)
}

export const getTranslations = async (locale: Locale) => locales[locale]()
