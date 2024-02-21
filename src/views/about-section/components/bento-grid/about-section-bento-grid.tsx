"use client";

import {getTranslation, TranslationsContextProps, useTranslations} from "@/contexts/translations-context";
import {cn} from "@/lib/utils";
import {IconBolt, IconBrandOpenai, IconBrandTeams, IconPalette, IconTools} from "@tabler/icons-react";
import Face from "@/components/face/face";
import BentoGridCarousel from "@/views/about-section/components/bento-grid/components/bento-grid-carousel";
import {BackendData, FrontendData} from "@/views/about-section/components/bento-grid/components/carousel-data";
import BentoGridFlipCard from "@/views/about-section/components/bento-grid/components/flip-card/bento-grid-flip-card";
import Image from "next/image";
import React from "react";

export default function AboutSectionBentoGrid({className}: { className?: string }) {
    const {translations: t}: TranslationsContextProps = useTranslations();
    const outlineVariant = "border-4"

    return (
        <div className={cn(
            "w-full grid grid-cols-1 auto-rows-[1fr] gap-4",
            "sm:grid-cols-3",
            "lg:grid-cols-4",
            "[&>div]:rounded-xl [&>div]:p-4",
            "[&>div]:flex [&>div]:flex-col [&>div]:justify-center [&>div]:items-center [&>div]:gap-4",
            "[&>div]:font-bold [&>div]:text-center",
            className
        )}>
            <div className={cn(outlineVariant, "border-accent text-accent", "sm:col-span-2", "text-6xl")}>
                <BentoGridCarousel title={"FrontEnd"} carouselData={FrontendData}/>
            </div>

            <BentoGridFlipCard
                frontBackClassName={cn("p-4 rounded-xl")}
                frontClassName={cn(
                    "bg-secondary text-primary",
                    "text-5xl sm:text-4xl xl:text-5xl",
                    "flex flex-col justify-center items-center gap-4",
                    "font-bold text-center",
                )}
                frontChildren={<>
                    {getTranslation(t, "design_enthusiast.title")}

                    <IconPalette className={"size-32"} stroke={1}/>
                </>}
                backClassName={cn(
                    "border-secondary text-foreground",
                    "text-base md:text-sm lg:text-base",
                    "text-justify text-wrap break-words whitespace-pre-line",
                    outlineVariant,
                )}
                backChildren={<>
                    {getTranslation(t, "design_enthusiast.description")}
                </>}
            />

            <BentoGridFlipCard
                frontBackClassName={cn("p-4 rounded-xl")}
                frontClassName={cn(
                    "flex flex-col justify-center items-center gap-4",
                    outlineVariant,
                    "border-primary text-primary",
                    "text-6xl"
                )}
                frontChildren={<>
                    {getTranslation(t, "ai_exp.title")}

                    <IconBrandOpenai className={"size-32"} stroke={1}/>
                </>}
                backClassName={cn(
                    "text-justify text-wrap break-words whitespace-pre-line",
                    "text-base md:text-sm lg:text-base p-5",
                    "bg-primary text-primary-foreground",
                )}
                backChildren={<>
                    {getTranslation(t, "ai_exp.description")}
                </>}
            />

            <BentoGridFlipCard
                rootClassName={cn("sm:max-lg:col-span-2")}
                frontBackClassName={cn("p-4 rounded-xl")}
                frontClassName={cn(
                    "flex flex-col justify-center items-center gap-4",
                    "bg-accent text-primary",
                    "text-6xl",
                    "dark:text-secondary"
                )}
                frontChildren={<>
                    {getTranslation(t, "tech_lead.title")}

                    <IconBrandTeams className={"size-32"} stroke={1}/>
                </>}
                backClassName={cn(
                    "text-justify text-wrap break-words whitespace-pre-line",
                    "text-base p-5",
                    outlineVariant,
                    "border-accent text-foreground",
                )}
                backChildren={<>
                    {getTranslation(t, "tech_lead.description")}
                </>}
            />

            <BentoGridFlipCard
                rootClassName={cn("sm:col-span-2 sm:max-lg:col-span-3")}
                frontBackClassName={cn("p-4 rounded-xl")}
                frontClassName={cn(
                    "flex flex-col justify-center items-center gap-4",
                    outlineVariant,
                    "border-primary",
                    "dark:bg-primary",
                )}
                frontChildren={<>
                    <Face className={"h-52 w-36"}/>
                </>}
                backClassName={cn(
                    "text-justify text-wrap break-words whitespace-pre-line",
                    "text-xs md:text-base lg:text-sm xl:text-base p-5",
                    "bg-primary text-primary-foreground",
                )}
                backChildren={<>
                    {getTranslation(t, "me_card.description")}
                </>}
            />

            <BentoGridFlipCard
                rootClassName={cn("sm:max-lg:col-span-2")}
                frontBackClassName={cn("p-4 rounded-xl")}
                frontClassName={cn(
                    "flex flex-col justify-center items-center gap-1",
                    "bg-secondary text-primary",
                    "text-5xl sm:text-4xl xl:text-5xl"
                )}
                frontChildren={<>
                    {getTranslation(t, "love_develop_product.title_up")}

                    <IconBolt className={"size-32 rotate-12 text-yellow-200"} stroke={1}/>

                    {getTranslation(t, "love_develop_product.title_down")}
                </>}
                backClassName={cn(
                    "text-justify text-wrap break-words whitespace-pre-line",
                    "text-base p-5",
                    outlineVariant,
                    "border-secondary text-foreground",
                )}
                backChildren={<>
                    {getTranslation(t, "love_develop_product.description")}
                </>}
            />

            <BentoGridFlipCard
                frontBackClassName={cn("p-4 rounded-xl")}
                frontClassName={cn(
                    "flex flex-col justify-center items-center gap-4",
                    outlineVariant,
                    "border-primary text-primary",
                    "text-3xl sm:text-2xl xl:text-4xl"
                )}
                frontChildren={<>
                    {getTranslation(t, "tools_builder.title")}

                    <IconTools className={"size-32"} stroke={1}/>
                </>}
                backClassName={cn(
                    "text-justify text-wrap break-words whitespace-pre-line",
                    "text-base md:text-sm lg:text-base p-5",
                    "bg-primary text-primary-foreground",
                )}
                backChildren={<>
                    {getTranslation(t, "tools_builder.description")}
                </>}
            />

            <div className={cn(
                "bg-accent text-primary",
                "sm:col-span-2",
                "text-6xl",
                "dark:text-secondary",
            )}>
                <BentoGridCarousel title={"BackEnd"} carouselData={BackendData}/>
            </div>

            <BentoGridFlipCard
                frontBackClassName={cn("p-4 rounded-xl")}
                frontClassName={cn(
                    "flex flex-col justify-center items-center gap-4",
                    outlineVariant,
                    "border-secondary text-secondary",
                    "text-4xl"
                )}
                frontChildren={<>
                    {getTranslation(t, "bouldering_freak.title")}

                    <div className={"relative size-32"}>
                        <Image
                            src={"/icons/bouldering.svg"}
                            alt={getTranslation(t, "bouldering_freak.title")}
                            fill
                        />
                    </div>
                </>}
                backClassName={cn(
                    "text-justify text-wrap break-words whitespace-pre-line",
                    "text-base p-5",
                    "bg-secondary text-secondary-foreground",
                )}
                backChildren={<>
                    {getTranslation(t, "bouldering_freak.description")}
                </>}
            />
        </div>
    )
}
