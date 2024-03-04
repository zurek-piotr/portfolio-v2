"use client";

import {cn} from "@/lib/utils";
import Image from "next/image";
import {Badge} from "@/components/ui/badge";
import React from "react";
import {Project} from "@/components/project-item/projects-data";
import {getTranslation, useTranslations} from "@/contexts/translations-context";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";
import {IconLink} from "@tabler/icons-react";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import portfoliov2Gif from "../../../public/gifs/portfoliov2.webp";

export default function ProjectItem({project, fill, sizes, technologies, rootClassName, imageClassName}: {
    project: Project,
    fill: boolean,
    sizes: string,
    technologies?: string[],
    rootClassName?: string
    imageClassName?: string

}) {
    const {translations: t} = useTranslations()

    return (
        <div
            className={cn("flex flex-col h-full w-full rounded-xl bg-card text-card-foreground shadow dark:shadow-white/5", rootClassName)}>
            <AspectRatio ratio={16 / 9} className="relative object-cover overflow-hidden rounded-xl">
                <div
                    className={cn("absolute top-0 left-0 w-full h-full group object-cover overflow-hidden rounded-xl")}>
                    <Image
                        className={cn("object-cover z-[11]", imageClassName)}
                        src={project?.src || portfoliov2Gif}
                        alt={project.title}
                        fill={fill}
                        sizes={sizes}
                        priority
                    />
                </div>
            </AspectRatio>

            <div className={""}>
                <div
                    className={"overflow-y-auto min-h-full w-full flex flex-grow flex-col gap-3 md:gap-5 md:justify-end p-4 py-8"}>
                    <h3 className={"font-bold text-xl pb-1 md:text-5xl md:pb-4"}>{project?.title}</h3>
                    <p className={"text-justify text-wrap break-words whitespace-pre-line"}>{project?.description ? getTranslation(t, project.description) : ""}</p>
                    {
                        technologies && (
                            <div className={"flex flex-row flex-wrap gap-0.5 md:gap-2 py-1 md:py-3"}>
                                {
                                    technologies.map((technology, index) => (
                                        <Badge
                                            className={"rounded-full"}
                                            key={index}
                                            variant={"outline"}
                                        >{technology}</Badge>
                                    ))
                                }
                            </div>
                        )
                    }
                    <div className={"flex "}>
                        {project?.link && (
                            <Link href={project.link} className={cn(
                                buttonVariants({variant: "ghost"}),
                                "text-base md:text-lg rounded-full"
                            )} title={getTranslation(t, "project.link")}>
                                <IconLink className={"size-8 md:size-10 pr-3"}/> {getTranslation(t, "project.link")}
                            </Link>
                        )}
                        {
                            project?.underConstruction && (
                                <Badge
                                    className={"rounded-full text-sm md:text-base py-1 px-4 md:py-2 md:px-5"}
                                    variant={"default"} title={getTranslation(t, "project.under_construction")}
                                >
                                    {getTranslation(t, "project.under_construction")}
                                </Badge>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
