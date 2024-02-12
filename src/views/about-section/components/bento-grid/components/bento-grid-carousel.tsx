"use client";

import {cn} from "@/lib/utils";
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel/carousel";
import Autoplay from "embla-carousel-autoplay";
import {DrawerPopover} from "@/components/ui/drawer-popover";
import {TranslationsContextProps, useTranslations} from "@/contexts/translations-context";
import {CarouselElement} from "@/views/about-section/components/bento-grid/components/carousel-data";
import useMediaQuery from "@/app/hooks/use-media-query";
import {IsDesktopContext} from "@/contexts/is-desktop-context";

export default function BentoGridCarousel({title, carouselData}: { title: string, carouselData: CarouselElement[] }) {
    const {translations: t}: TranslationsContextProps = useTranslations();
    const carouselBasis = "[&>*]:basis-1/2 md:[&>*]:basis-1/3 xl:[&>*]:basis-1/4 2xl:[&>*]:basis-1/6"
    const iconClasses = "size-32 hover:scale-110"
    const isDesktop = useMediaQuery("(min-width: 768px)")

    return (
        <IsDesktopContext.Provider value={isDesktop}>
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
                            <CarouselItem key={index}>
                                <DrawerPopover
                                    title={item?.title}
                                    body={item?.body ? t?.[item.body] : undefined}
                                >
                                    {item?.icon &&
                                        <item.icon className={cn(iconClasses, item.iconClasses)} stroke={1}/>}
                                </DrawerPopover>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
            </Carousel>
        </IsDesktopContext.Provider>
    )
}
