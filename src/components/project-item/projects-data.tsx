import nieboDoWynajeciaGif from "../../../public/gifs/niebodowynajecia.webp";
import ipagroGif from "../../../public/gifs/ipagro.webp";
import localVideoPlayerGif from "../../../public/gifs/localvideoplayer.webp";
import foodTrackGif from "../../../public/gifs/foodtrack.webp";
import serverManagerGif from "../../../public/gifs/server_manager.webp";
import portfoliov2Gif from "../../../public/gifs/portfoliov2.webp";
import portfoliov1Gif from "../../../public/gifs/portfoliov1.webp";

import {StaticImageData} from "next/image";

export interface Project {
    title: string;
    description?: string;
    src?: StaticImageData;
    link?: string;
    github?: string;
    technologies?: string[];
    underConstruction?: boolean,
}

export const ProjectsData: Project[] = [
    {
        title: "Niebo Do Wynajęcia",
        description: "projects.niebodowynajecia.description",
        link: "https://niebo-do-wynajecia.pl",
        src: nieboDoWynajeciaGif,
        technologies: ["WordPress", "PHP", "MySQL", "Yoast SEO", "Google Analytics", "Google Search Console", "Google My Buisness"],
    },
    {
        title: "IpAgro",
        description: "projects.ipagro.description",
        link: "https://ipagro.pl",
        src: ipagroGif,
        technologies: ["WordPress", "WooCommerce", "PHP", "MySQL", "Yoast SEO", "Google Analytics", "Google Search Console", "Google My Buisness"],
    },
    {
        title: "Local Video Player",
        description: "projects.localvideoplayer.description",
        link: "https://localvideoplayer.vercel.app/",
        src: localVideoPlayerGif,
        technologies: ["Vanilla JavaScript", "Large video files support", "FileReader API"],
    },
    {
        title: "FoodTrack",
        description: "projects.foodtrack.description",
        src: foodTrackGif,
        technologies: ["Vue", "Vuetify", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Bcrypt"],
        underConstruction: true,
    },
    {
        title: "IoT Manager",
        description: "projects.server_manager.description",
        src: serverManagerGif,
        technologies: ["Vue", "Vuetify", "Laravel", "Eloquent ORM", "PostgreSQL", "JWT"],
        underConstruction: true,
    },
    {
        title: "Porfolio v2",
        description: "projects.portfoliov2.description",
        link: "https://zurekpiotr.pl",
        src: portfoliov2Gif,
        technologies: ["Next.js", "React", "Tailwind", "i18n", "Figma"],
    },
    {
        title: "Porfolio v1",
        description: "projects.portfoliov1.description",
        link: "https://zurekpiotr-portfolio-v1.vercel.app",
        src: portfoliov1Gif,
        technologies: ["Vue", "Vuelidate", "SCSS", "Figma", "i18n", "Google Apps Mail"],
    },
];

export default ProjectsData;
