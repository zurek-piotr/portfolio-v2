export interface Project {
    title: string;
    description?: string;
    src?: string;
    link?: string;
    github?: string;
    technologies?: string[];
}

export const ProjectsData: Project[] = [
    {
        title: "FoodTrack",
        description: "projects.foodtrack.description",
        technologies: ["Vue", "Vuetify", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Bcrypt"],
    },
    {
        title: "Server Manager",
        description: "projects.server_manager.description",
        technologies: ["Vue", "Vuetify", "Laravel", "Eloquent ORM", "PostgreSQL", "JWT"],
    },
    {
        title: "Niebo Do Wynajęcia",
        description: "projects.niebodowynajecia.description",
        link: "https://niebo-do-wynajecia.pl",
        src: "/gifs/niebodowynajecia.gif",
        technologies: ["WordPress", "PHP", "MySQL", "Yoast SEO", "Google Analytics", "Google Search Console", "Google My Buisness"],
    },
    {
        title: "IpAgro",
        description: "projects.ipagro.description",
        link: "https://ipagro.pl",
        src: "/gifs/ipagro.gif",
        technologies: ["WordPress", "WooCommerce", "PHP", "MySQL", "Yoast SEO", "Google Analytics", "Google Search Console", "Google My Buisness"],
    },
    {
        title: "Local Video Player",
        description: "projects.localvideoplayer.description",
        link: "https://localvideoplayer.vercel.app/",
        src: "/gifs/localvideoplayer.gif",
        technologies: ["Vanilla JavaScript", "Large video files support", "FileReader API"],
    },
    {
        title: "Porfolio v2",
        description: "projects.porfoliov2.description",
        link: "https://zurekpiotr.pl",
        technologies: ["Next.js", "React", "Tailwind", "i18n", "Figma"],
    },
    {
        title: "Porfolio v1",
        description: "projects.porfoliov1.description",
        link: "https://zurekpiotr-portoflio-v1.vercel.app",
        src: "/gifs/portfoliov1.gif",
        technologies: ["Vue", "Vuelidate", "SCSS", "Figma", "i18n", "Google Apps Mail"],
    },
];

export default ProjectsData;
