import {getTranslations} from "@/lib/translations";
import type {Locale} from "@/i18n.config";
import {Translations} from "@/contexts/translations-context";
import Navigation from "@/components/naigation/navigation";
import ProjectsGridSection from "@/views/projects-grid-section/projects-grid-section";
import dynamic from "next/dynamic";

const FooterSection = dynamic(() => import('@/views/footer-section/footer-section'))

export default async function Home({params: {lang}}: { params: { lang: Locale } }) {
    const translations: Translations = await getTranslations(lang);

    return (
        <>
            <Navigation translations={translations} currentLanguage={lang}/>
            <main className={"flex flex-col gap-24 pt-7 md:pt-20"}>
                <ProjectsGridSection translations={translations} currentLanguage={lang}/>
            </main>
            <FooterSection translations={translations} currentLanguage={lang}/>
        </>
    );
}
