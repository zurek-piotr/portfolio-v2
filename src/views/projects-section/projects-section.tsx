"use client";

import {cn} from "@/lib/utils";
import {Translations, TranslationsContext} from "@/contexts/translations-context";
import {Carousel, CarouselApi, CarouselContent, CarouselItem} from "@/components/ui/carousel/carousel";
import React, {useEffect, useState} from "react";
import {Card, CardContent} from "@/components/ui/card";
import ProjectsData, {Project} from "@/components/project-item/projects-data";
import ProjectItem from "@/components/project-item/project-item";
import {AspectRatio} from "@/components/ui/aspect-ratio";

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
                    className={"w-full z-[11]"}
                >
                    <CarouselContent className={cn("w-full items-center")}>
                        {ProjectsData.map((project: Project, index: number) => (

                            <CarouselItem
                                key={index}
                                className={cn(
                                    "basis-3/4 md:basis-7/12 2xl:basis-1/2 p-0 rounded-xl cursor-grab",
                                    index === current && "z-[12] my-5 shadow-lg -mx-1"
                                )}
                            >
                                <Card className={cn(
                                    "border-0 bg-accent",
                                    index === current && "bg-primary"
                                )}>
                                    <CardContent className={cn("p-0")}>
                                        <AspectRatio ratio={16 / 9}
                                                     className={cn(
                                                         "relative object-cover overflow-hidden rounded-xl",
                                                         index === current && "scale-105"
                                                     )}
                                        >
                                            <ProjectItem
                                                project={project}
                                                fill={true}
                                                sizes={"(max-width: 768px) 100vw, 50vw"}
                                                technologies={project.technologies}
                                            />
                                        </AspectRatio>
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
