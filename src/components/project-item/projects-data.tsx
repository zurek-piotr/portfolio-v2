export interface Project {
    title: string;
    description?: string;
    src?: string;
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
        title: "FoodTrack",
        description: "projects.foodtrack.description",
        src: "/gifs/foodtrack.gif",
        technologies: ["Vue", "Vuetify", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Bcrypt"],
        underConstruction: true,
    },
    {
        title: "IoT Manager",
        description: "projects.server_manager.description",
        src: "/gifs/server_manager.gif",
        technologies: ["Vue", "Vuetify", "Laravel", "Eloquent ORM", "PostgreSQL", "JWT"],
        underConstruction: true,
    },
    {
        title: "Porfolio v2",
        description: "projects.portfoliov2.description",
        link: "https://zurekpiotr.pl",
        src: "/gifs/portfoliov2.gif",
        technologies: ["Next.js", "React", "Tailwind", "i18n", "Figma"],
    },
    {
        title: "Porfolio v1",
        description: "projects.portfoliov1.description",
        link: "https://zurekpiotr-portfolio-v1.vercel.app",
        src: "/gifs/portfoliov1.gif",
        technologies: ["Vue", "Vuelidate", "SCSS", "Figma", "i18n", "Google Apps Mail"],
    },
];

export default ProjectsData;
