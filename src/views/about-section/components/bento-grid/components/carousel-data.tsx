import {
    IconBrandAngular,
    IconBrandBootstrap,
    IconBrandCakephp,
    IconBrandCss3,
    IconBrandCypress,
    IconBrandFigma,
    IconBrandHtml5,
    IconBrandJavascript,
    IconBrandLaravel,
    IconBrandMongodb,
    IconBrandMysql,
    IconBrandNextjs,
    IconBrandNodejs,
    IconBrandOauth,
    IconBrandPhp,
    IconBrandPython,
    IconBrandReact,
    IconBrandStorybook,
    IconBrandStripe,
    IconBrandTailwind, IconBrandTwilio,
    IconBrandTypescript,
    IconBrandVite,
    IconBrandVue, IconBrandWordpress,
    IconSql
} from "@tabler/icons-react";
import {JSX} from "react";

export interface CarouselElement {
    title: string;
    icon: JSX.ElementType;
    body?: string;
    iconClasses?: string;
}

export const FrontendData: CarouselElement[] = [
    {
        title: "React",
        icon: IconBrandReact,
        iconClasses: "text-[#61DBFB]",
    },
    {
        title: "Angular",
        icon: IconBrandAngular,
        body: "about_frontend_angular",
        iconClasses: "text-[#B52E31]",
    },
    {
        title: "Vue",
        icon: IconBrandVue,
        iconClasses: "text-[#41B883] [&>path:first-child]:text-[#34495E]",
    },
    {
        title: "Next.js",
        icon: IconBrandNextjs,
        iconClasses: "text-black",
    },
    {
        title: "Typescript",
        icon: IconBrandTypescript,
        iconClasses: "text-[#007ACC]",
    },
    {
        title: "Javascript",
        icon: IconBrandJavascript,
        iconClasses: "text-[#F0DB4F]",
    },
    {
        title: "Vite",
        icon: IconBrandVite,
        iconClasses: "text-[#a158ff] [&>path:first-child]:text-[#ffc61e]",
    },
    {
        title: "Tailwind",
        icon: IconBrandTailwind,
        iconClasses: "text-[#38bdf8]",
    },
    {
        title: "Bootstrap",
        icon: IconBrandBootstrap,
        iconClasses: "text-[#563d7c]",
    },
    {
        title: "HTML",
        icon: IconBrandHtml5,
        iconClasses: "text-[#f06529] [&>path:last-child]:text-[#e34c26]",
    },
    {
        title: "CSS",
        icon: IconBrandCss3,
        iconClasses: "text-[#2965f1] [&>path:last-child]:text-[#264de4]",
    },
    {
        title: "Cypress",
        icon: IconBrandCypress,
        iconClasses: "text-[#ad8c69]",
    },
    {
        title: "Storybook",
        icon: IconBrandStorybook,
        iconClasses: "text-[#FF4785]",
    },
    {
        title: "WordPress",
        icon: IconBrandWordpress,
        iconClasses: "text-[#00749C]",
    },
    {
        title: "Oauth",
        icon: IconBrandOauth,
        iconClasses: "text-black",
    },
    {
        title: "Figma",
        icon: IconBrandFigma,
        iconClasses: "text-[#0acf83] [&>path:nth-child(1)]:text-[#1abcfe]",
    }
];

export const BackendData: CarouselElement[] = [
    {
        title: "Laravel",
        icon: IconBrandLaravel,
        iconClasses: "text-[#F05340]",
    },
    {
        title: "Node.js",
        icon: IconBrandNodejs,
        iconClasses: "text-[#68a063]",
    },
    {
        title: "Nest.js",
        icon: IconBrandJavascript,
        iconClasses: "text-[#E0234E]",
    },
    {
        title: "Next.js",
        icon: IconBrandNextjs,
        iconClasses: "text-black",
    },
    {
        title: "Typescript",
        icon: IconBrandTypescript,
        iconClasses: "text-[#007ACC]",
    },
    {
        title: "Python / FastAPI",
        icon: IconBrandPython,
        iconClasses: "text-[#4B8BBE] [&>path:nth-child(3)]:text-[#FFE873] [&>path:nth-child(5)]:text-[#FFE873]",
    },
    {
        title: "Cake PHP",
        icon: IconBrandCakephp,
        iconClasses: "text-[#C92735]",
    },
    {
        title: "PHP",
        icon: IconBrandPhp,
        iconClasses: "text-[#777BB3]",
    },
    {
        title: "Oauth",
        icon: IconBrandOauth,
        iconClasses: "text-black",
    },
    {
        title: "SQL",
        icon: IconSql,
        iconClasses: "text-[#336791]",
    },
    {
        title: "MySQL",
        icon: IconBrandMysql,
        iconClasses: "text-[#00758F]",
    },
    {
        title: "MongoDB",
        icon: IconBrandMongodb,
        iconClasses: "text-[#4DB33D]",
    },
    {
        title: "Stripe / Przelewy24",
        icon: IconBrandStripe,
        iconClasses: "text-[#6B71E3]",
    },
    {
        title: "Twilio",
        icon: IconBrandTwilio,
        iconClasses: "text-[#ea2e44]",
    }
];
