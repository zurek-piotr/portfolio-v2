"use client";

import {cn} from "@/lib/utils";
import {Translations, TranslationsContext} from "@/contexts/translations-context";
import {Carousel, CarouselApi, CarouselContent, CarouselItem} from "@/components/ui/carousel/carousel";
import React, {useEffect, useState} from "react";
import ProjectsData, {Project} from "@/components/project-item/projects-data";
import ProjectItem from "@/components/project-item/project-item";
import {IconHandMove} from "@tabler/icons-react";
import styles from "./projects-section.module.css";

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
                    "flex min-h-svh flex-col items-center gap-5 p-5 pb-24"
                )}>
                <h2 className={"text-7xl font-bold mb-5"}>{translations.Projects}</h2>

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
                                <ProjectItem
                                    rootClassName={cn(index === current && "scale-105")}
                                    project={project}
                                    fill={true}
                                    priority={false}
                                    sizes={"(max-width: 768px) 100vw, 50vw"}
                                    technologies={project.technologies}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>

                <IconHandMove className={cn(styles.handIcon, "size-6 -rotate-45")} stroke={1}/>
            </section>
        </TranslationsContext.Provider>
    )
}
