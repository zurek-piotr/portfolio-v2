"use client";

import {cn} from "@/lib/utils";
import Image from "next/image";
import {Badge} from "@/components/ui/badge";
import React, {useEffect, useRef, useState} from "react";
import {Project} from "@/components/project-item/projects-data";
import {getTranslation, useTranslations} from "@/contexts/translations-context";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";
import {IconLink} from "@tabler/icons-react";

export default function ProjectItem({project, fill, sizes, technologies, rootClassName, imageClassName}: {
    project: Project,
    fill: boolean,
    sizes: string,
    technologies?: string[],
    rootClassName?: string
    imageClassName?: string

}) {
    const {translations: t} = useTranslations()
    const [open, setOpen] = useState(false)
    const ref = useRef<any>(null);

    useEffect(() => {
        const handleOutSideClick = (event: { target: any; }) => {
            if (!ref.current?.contains(event.target)) {
                setOpen(false)
            }
        };

        window.addEventListener("mousedown", handleOutSideClick);
        return () => {
            window.removeEventListener("mousedown", handleOutSideClick);
        };
    }, [ref]);

    return (
        <div className={cn("absolute top-0 left-0 w-full h-full group object-cover overflow-hidden rounded-xl", rootClassName)} onClick={() => setOpen(!open)} ref={ref}>
            <Image
                className={cn("object-cover z-[11]", imageClassName)}
                src={project?.src || "/images/sample-site-gif.gif"}
                alt={project.title}
                fill={fill}
                sizes={sizes}
                priority={true}
            />
            <div className={cn(
                "w-full h-full p-4 md:p-10 pb-5 top-0 left-0 absolute opacity-0 z-[11]",
                "group-focus:opacity-100 group-active:opacity-100 group-hover:opacity-100 transition duration-300 ease-in-out ",
                "bg-background/80 backdrop-blur-lg backdrop-filter",
                "flex flex-col justify-end gap-3 md:gap-5 visible",
                open && "opacity-100",
            )}>
                <h3 className={"font-bold text-xl pb-1 md:text-5xl md:pb-4"}>{project?.title}</h3>
                <p className={"text-justify text-wrap break-words whitespace-pre-line"}>{project?.description ? getTranslation(t, project.description) : ""}</p>
                {
                    technologies && (
                        <div className={"flex flex-row flex-wrap gap-2 py-1 md:py-3"}>
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
                            "text-lg"
                        )} title={getTranslation(t, "project.link")}>
                            <IconLink className={"size-10 pr-3"} /> {getTranslation(t, "project.link")}
                        </Link>
                    )}
                </div>

            </div>
        </div>
    )
}
