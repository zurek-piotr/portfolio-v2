import HeroSection from "@/views/hero-section/hero-section";
import {getTranslations} from "@/lib/translations";
import type {Locale} from "@/i18n.config";
import {Translations} from "@/contexts/translations-context";
import AboutSection from "@/views/about-section/about-section";
import Navigation from "@/components/naigation/navigation";

export default async function Home({params: {lang}}: { params: { lang: Locale } }) {
    const translations: Translations = await getTranslations(lang);

    return (
        <>
            <Navigation translations={translations} currentLanguage={lang}/>
            <main>
                <HeroSection translations={translations} currentLanguage={lang}/>
                <AboutSection translations={translations} currentLanguage={lang}/>
            </main>
        </>
    );
}
