import HeroSection from "@/views/hero-section/hero-section";
import {getTranslations} from "@/lib/translations";
import type {Locale} from "@/i18n.config";
import {Translations} from "@/contexts/translations-context";
import AboutSection from "@/views/about-section/about-section";
import Navigation from "@/components/naigation/navigation";
import ProjectsSection from "@/views/projects-section/projects-section";
import FooterSection from "@/views/footer-section/footer-section";

export default async function Home({params: {lang}}: { params: { lang: Locale } }) {
    const translations: Translations = await getTranslations(lang);

    return (
        <>
            <Navigation translations={translations} currentLanguage={lang}/>
            <main className={"flex flex-col gap-24 pt-7 md:pt-20"}>
                <HeroSection translations={translations} currentLanguage={lang}/>
                <AboutSection translations={translations} currentLanguage={lang}/>
                <ProjectsSection translations={translations} currentLanguage={lang}/>
            </main>
            <FooterSection translations={translations} currentLanguage={lang}/>
        </>
    );
}
