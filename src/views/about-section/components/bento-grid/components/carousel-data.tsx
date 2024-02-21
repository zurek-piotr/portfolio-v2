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
    IconBrandTailwind,
    IconBrandTwilio,
    IconBrandTypescript,
    IconBrandVite,
    IconBrandVue,
    IconBrandWordpress,
    IconSql
} from "@tabler/icons-react";
import {JSX} from "react";

export interface CarouselElement {
    title: string;
    icon?: JSX.ElementType;
    imageSrc?: string;
    body?: string;
    iconClasses?: string;
}

export const FrontendData: CarouselElement[] = [
    {
        title: "React",
        icon: IconBrandReact,
        body: "about.frontend.react",
        iconClasses: "text-[#61DBFB]",
    },
    {
        title: "Angular",
        icon: IconBrandAngular,
        body: "about.frontend.angular",
        iconClasses: "text-[#B52E31]",
    },
    {
        title: "Vue",
        icon: IconBrandVue,
        body: "about.frontend.vue",
        iconClasses: "text-[#41B883] [&>path:first-child]:text-[#34495E]",
    },
    {
        title: "Next.js",
        icon: IconBrandNextjs,
        body: "about.nextjs",
        iconClasses: "text-black",
    },
    {
        title: "Typescript",
        icon: IconBrandTypescript,
        body: "about.typescript",
        iconClasses: "text-[#007ACC]",
    },
    {
        title: "Javascript",
        icon: IconBrandJavascript,
        body: "about.frontend.javascript",
        iconClasses: "text-[#F0DB4F]",
    },
    {
        title: "Vite",
        icon: IconBrandVite,
        body: "about.frontend.vite",
        iconClasses: "text-[#a158ff] [&>path:first-child]:text-[#ffc61e]",
    },
    {
        title: "Tailwind",
        icon: IconBrandTailwind,
        body: "about.frontend.tailwind",
        iconClasses: "text-[#38bdf8]",
    },
    {
        title: "Bootstrap",
        icon: IconBrandBootstrap,
        body: "about.frontend.bootstrap",
        iconClasses: "text-[#563d7c]",
    },
    {
        title: "HTML",
        icon: IconBrandHtml5,
        body: "about.frontend.html",
        iconClasses: "text-[#f06529] [&>path:last-child]:text-[#e34c26]",
    },
    {
        title: "CSS",
        icon: IconBrandCss3,
        body: "about.frontend.css",
        iconClasses: "text-[#2965f1] [&>path:last-child]:text-[#264de4]",
    },
    {
        title: "Cypress",
        icon: IconBrandCypress,
        body: "about.frontend.cypress",
        iconClasses: "text-[#ad8c69]",
    },
    {
        title: "Storybook",
        icon: IconBrandStorybook,
        body: "about.frontend.storybook",
        iconClasses: "text-[#FF4785]",
    },
    {
        title: "WordPress",
        icon: IconBrandWordpress,
        body: "about.frontend.wordpress",
        iconClasses: "text-[#00749C]",
    },
    {
        title: "Oauth",
        icon: IconBrandOauth,
        body: "about.oauth",
        iconClasses: "text-black",
    },
    {
        title: "Figma",
        icon: IconBrandFigma,
        body: "about.frontend.figma",
        iconClasses: "text-[#0acf83] [&>path:nth-child(1)]:text-[#1abcfe]",
    }
];

export const BackendData: CarouselElement[] = [
    {
        title: "Laravel",
        icon: IconBrandLaravel,
        body: "about.backend.laravel",
        iconClasses: "text-[#F05340]",
    },
    {
        title: "Node.js",
        icon: IconBrandNodejs,
        body: "about.backend.nodejs",
        iconClasses: "text-[#68a063]",
    },
    {
        title: "Next.js",
        icon: IconBrandNextjs,
        body: "about.nextjs",
        iconClasses: "text-black",
    },
    {
        title: "Typescript",
        icon: IconBrandTypescript,
        body: "about.typescript",
        iconClasses: "text-[#007ACC]",
    },
    {
        title: "Python / FastAPI",
        icon: IconBrandPython,
        body: "about.backend.fastapi",
        iconClasses: "text-[#4B8BBE] [&>path:nth-child(3)]:text-[#FFE873] [&>path:nth-child(5)]:text-[#FFE873]",
    },
    {
        title: "Cake PHP",
        icon: IconBrandCakephp,
        body: "about.backend.cakephp",
        iconClasses: "text-[#C92735]",
    },
    {
        title: "PHP",
        icon: IconBrandPhp,
        body: "about.backend.php",
        iconClasses: "text-[#777BB3]",
    },
    {
        title: "Nest.js",
        body: "about.backend.nestjs",
        imageSrc: "/icons/nestjs.svg",
    },
    {
        title: "Oauth",
        icon: IconBrandOauth,
        body: "about.oauth",
        iconClasses: "text-black",
    },
    {
        title: "OpenEdge Postgress",
        body: "about.backend.oe_postgress",
        imageSrc: "/icons/oe_postgress.svg",
    },
    {
        title: "SQL",
        icon: IconSql,
        body: "about.backend.sql",
        iconClasses: "text-[#336791]",
    },
    {
        title: "MySQL",
        icon: IconBrandMysql,
        body: "about.backend.sql",
        iconClasses: "text-[#00758F]",
    },
    {
        title: "MongoDB",
        icon: IconBrandMongodb,
        body: "about.backend.mongodb",
        iconClasses: "text-[#4DB33D]",
    },
    {
        title: "Stripe / Przelewy24",
        icon: IconBrandStripe,
        body: "about.backend.payments",
        iconClasses: "text-[#6B71E3]",
    },
    {
        title: "Twilio",
        icon: IconBrandTwilio,
        body: "about.backend.twilio",
        iconClasses: "text-[#ea2e44]",
    }
];
