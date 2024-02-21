"use client";

import {cn} from "@/lib/utils";
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel/carousel";
import Autoplay from "embla-carousel-autoplay";
import {DrawerPopover} from "@/components/ui/drawer-popover";
import {getTranslation, TranslationsContextProps, useTranslations} from "@/contexts/translations-context";
import {CarouselElement} from "@/views/about-section/components/bento-grid/components/carousel-data";
import {IsDesktopProvider} from "@/contexts/is-desktop-context";
import Image from "next/image";
import React from "react";

export default function BentoGridCarousel({title, carouselData}: { title: string, carouselData: CarouselElement[] }) {
    const {translations: t}: TranslationsContextProps = useTranslations();
    const carouselBasis = "[&>*]:basis-1/2 md:[&>*]:basis-1/3 xl:[&>*]:basis-1/4 2xl:[&>*]:basis-1/5"
    const iconClasses = "size-32 hover:scale-110"
    const imageClasses = "relative size-32 hover:scale-110"

    return (
        <IsDesktopProvider>
            {title}

            <Carousel
                opts={{
                    loop: true,
                    dragFree: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 2000,
                        stopOnInteraction: false,
                        stopOnFocusIn: true,
                        stopOnMouseEnter: true
                    }),
                ]}
                className={"w-full"}
            >
                <CarouselContent className={cn("w-full", carouselBasis)}>
                    {
                        carouselData.map((item: CarouselElement, index: number) => (
                            <CarouselItem className={"cursor-grab"} key={index}>
                                <DrawerPopover
                                    title={item?.title}
                                    body={item?.body ? getTranslation(t, item.body) : undefined}
                                >
                                    {item?.icon &&
                                        <item.icon className={cn(iconClasses, item.iconClasses)} stroke={1}/>
                                    }

                                    {item?.imageSrc &&
                                        <div className={cn(imageClasses, "cursor-pointer")}>
                                            <Image
                                                src={item.imageSrc}
                                                alt={item.title}
                                                fill
                                            />
                                        </div>
                                    }
                                </DrawerPopover>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
            </Carousel>
        </IsDesktopProvider>
    )
}
