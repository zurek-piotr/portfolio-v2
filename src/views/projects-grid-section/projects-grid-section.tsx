"use client";

import {cn} from "@/lib/utils";
import {Translations, TranslationsContext} from "@/contexts/translations-context";
import ProjectsData, {Project} from "@/components/project-item/projects-data";
import ProjectItem from "@/components/project-item/project-item";
import {Card, CardContent} from "@/components/ui/card";
import {AspectRatio} from "@/components/ui/aspect-ratio";

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
                        <Card key={index} className={"border-0 bg-transparent p-0 "}>
                            <CardContent className={"p-0"}>
                                <AspectRatio ratio={16 / 9}
                                             className="relative object-cover overflow-hidden rounded-xl">
                                    <ProjectItem
                                        project={project}
                                        fill={true}
                                        sizes={"(max-width: 768px) 100vw, 50vw"}
                                        technologies={project.technologies}
                                    />
                                </AspectRatio>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </TranslationsContext.Provider>
    )
}
