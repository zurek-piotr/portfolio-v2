"use client";

import {cn} from "@/lib/utils";
import {Translations, TranslationsContext} from "@/contexts/translations-context";
import ProjectsData, {Project} from "@/components/project-item/projects-data";
import ProjectItem from "@/components/project-item/project-item";
import {Card, CardContent} from "@/components/ui/card";

export default function ProjectsGridSection({translations, currentLanguage}: {
    translations: Translations,
    currentLanguage: string
}) {
    return (
        <TranslationsContext.Provider value={{translations, currentLanguage}}>
            <section
                className={cn(
                    "flex min-h-svh flex-col items-center gap-10 p-5 pb-24"
                )}>
                <h2 className={"text-7xl font-bold"}>{translations.Projects}</h2>

                <div className={"w-full grid grid-cols-1 lg:grid-cols-2 auto-rows-[1fr] gap-4"}>
                    {ProjectsData.map((project: Project, index: number) => (
                        <Card key={index} className={"border-0 bg-accent"}>
                            <CardContent
                                className={"relative h-96 2xl:h-[30rem] object-cover overflow-hidden rounded-xl"}>
                                <ProjectItem
                                    project={project}
                                    src={"/images/sample-site-gif.gif"}
                                    alt={"Sample site gif"}
                                    fill={true}
                                    sizes={"(max-width: 768px) 100vw, 50vw"}
                                    technologies={project.technologies}
                                />
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </TranslationsContext.Provider>
    )
}
