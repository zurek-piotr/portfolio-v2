import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "@/components/ui/drawer";
import {Button} from "@/components/ui/button";
import React from "react";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {cn} from "@/lib/utils";
import {useIsDesktop} from "@/contexts/is-desktop-context";
import {TranslationsContextProps, useTranslations} from "@/contexts/translations-context";


export function DrawerPopover({title, description, body, children}: {
    title: string,
    children: React.ReactNode
    body?: string,
    description?: string,
}) {
    const isDesktop = useIsDesktop()
    const {translations: t}: TranslationsContextProps = useTranslations();
    const [open, setOpen] = React.useState(false)

    return (
        <div>
            {isDesktop ? (
                <Popover>
                    <PopoverTrigger title={title}>{children}</PopoverTrigger>
                    <PopoverContent>
                        <h4 className={cn("font-bold", !body && "text-center")}>{title}</h4>
                        {body && <p>{body}</p>}
                    </PopoverContent>
                </Popover>
            ) : (
                <Drawer open={open} onOpenChange={setOpen}>
                    <DrawerTrigger asChild>
                        <button title={title}>
                            {children}
                        </button>
                    </DrawerTrigger>
                    <DrawerContent>
                        <DrawerHeader className="text-left">
                            <DrawerTitle className={cn("font-bold", !body && "text-center")}>{title}</DrawerTitle>
                            {description && <DrawerDescription>
                                {description}
                            </DrawerDescription>}
                        </DrawerHeader>
                        {body && <p className={"p-4"}>  {body}</p>}
                        <DrawerFooter className="pt-2">
                            <DrawerClose asChild>
                                <Button variant="outline">{t.Close}</Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            )}
        </div>
    )

}
