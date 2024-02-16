"use client";

import {cn} from "@/lib/utils";
import {Translations, TranslationsContext} from "@/contexts/translations-context";
import Face from "@/components/face/face";
import {HireMeButton} from "@/components/hire-me-button/hire-me-button";
import Link from "next/link";
import {IconBrandLinkedin, IconFileCv, IconMail} from "@tabler/icons-react";
import {getMailTo} from "@/components/hire-me-button/utils";

export default function FooterSection({translations, currentLanguage}: {
    translations: Translations,
    currentLanguage: string
}) {
    const currentYear = new Date().getFullYear();
    const linkClasses = "flex flex-row flex-nowrap items-center gap-2 hover:underline underline-offset-2 decoration-primary transition duration-300 ease-in-out"
    const mail = "kontakt@zurekpiotr.pl"
    const linkedIn = "https://www.linkedin.com/in/zurek-piotr/"
    const cvLink = `/${currentLanguage}/piotr_zurek_cv.pdf`

    return (
        <TranslationsContext.Provider value={{translations, currentLanguage}}>
            <footer
                className={cn(
                    "flex flex-col",
                    "md:flex-row justify-evenly items-center gap-10 p-5 py-10 bg-secondary"
                )}>

                <div className={"flex flex-col gap-3 text-xl"}>
                    <Link className={linkClasses} href={getMailTo(translations)}>
                        <IconMail className={"size-8"} stroke={1}/> {mail}
                    </Link>
                    <Link className={linkClasses} href={linkedIn}>
                        <IconBrandLinkedin className={"size-8"} stroke={1}/> LinkedIn
                    </Link>
                    <Link className={linkClasses} href={cvLink} target={"_blank"}>
                        <IconFileCv className={"size-8"} stroke={1}/> CV
                    </Link>
                </div>

                <HireMeButton
                    linkClassName={"md:order-last"}
                    iconClassName={"size-12"}
                    className={cn(
                        "rounded-full bg-accent p-8 text-4xl hover:bg-primary/10",
                        "md:text-2xl lg:text-4xl"
                    )}
                />

                <div className={"flex flex-col gap-2 pb-5"}>
                    <Face className={"h-36"}/>
                    <p className={"text-center"}>© {currentYear} Piotr Żurek</p>
                </div>

            </footer>
        </TranslationsContext.Provider>
    )
}
