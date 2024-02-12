"use client";

import {cn} from "@/lib/utils";
import {Translations, TranslationsContext} from "@/contexts/translations-context";
import {Carousel, CarouselApi, CarouselContent, CarouselItem} from "@/components/ui/carousel/carousel";
import {useEffect, useState} from "react";
import {Card, CardContent} from "@/components/ui/card";
import ProjectItem from "@/views/projects-section/components/project-item";
import ProjectsData, {Project} from "@/views/projects-section/components/projects-data";

export default function ProjectsSection({translations, currentLanguage}: {
    translations: Translations,
    currentLanguage: string
}) {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        if (!api) {
            return
        }

        setCurrent(api.selectedScrollSnap())

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    return (
        <TranslationsContext.Provider value={{translations, currentLanguage}}>
            <section
                className={cn(
                    "flex min-h-svh flex-col items-center gap-10 p-5 pb-24"
                )}>
                <h2 className={"text-7xl font-bold"}>{translations.Projects}</h2>

                <Carousel
                    setApi={setApi}
                    opts={{
                        loop: true,
                        align: "center",
                    }}
                    className={"w-full"}
                >
                    <CarouselContent className={cn("w-full items-center")}>
                        {ProjectsData.map((project: Project, index: number) => (

                            <CarouselItem
                                key={index}
                                className={cn(
                                    "basis-3/4 md:basis-7/12 2xl:basis-1/2 p-0 rounded-xl",
                                    index === current && "z-10 my-5 shadow-lg -mx-1"
                                )}
                            >
                                <Card className={cn(
                                    "object-cover border-0 bg-accent",
                                    index === current && "bg-primary"
                                )}>
                                    <CardContent className={cn(
                                        "relative object-cover overflow-hidden rounded-xl",
                                        "flex h-80",
                                        index === current && "h-96"
                                    )}>
                                        <ProjectItem
                                            projectName={project.title}
                                            projectDescription={project.description ? translations[project.description] : ""}
                                            src={"/sample-site-gif.gif"}
                                            alt={"Sample site gif"}
                                            fill={true}
                                            sizes={"(max-width: 768px) 100vw, 50vw"}
                                            technologies={project.technologies}
                                        />
                                    </CardContent>
                                </Card>
                            </CarouselItem>

                        ))}
                    </CarouselContent>
                </Carousel>
            </section>
        </TranslationsContext.Provider>
    )
}
