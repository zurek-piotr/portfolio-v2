import {getTranslation, Translations} from "@/contexts/translations-context";

export function getMailTo(translations: Translations): string {
    const mail: string = "kontakt@zurekpiotr.pl"
    return `mailto:${mail}?subject=${getTranslation(translations, "mail.hire_me.subject")}&body=${getTranslation(translations, "mail.hire_me.body")}`
}
