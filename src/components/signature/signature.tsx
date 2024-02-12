import {Pacifico} from "next/font/google";
import {cn} from "@/lib/utils";
import styles from './signature.module.css'

const pacifico = Pacifico({
    weight: '400',
    subsets: ['latin'],
})

export default function Signature({className}: {className?: string}) {
    return (
        <h1 className={cn(
            pacifico.className,
            "text-8xl text-primary leading-none",
            "sm:text-[10rem]",
            styles.signature,
            className
        )}>
            <span>Piotr</span><br/>
            <span className={"pl-2 sm:pl-4"}>Żurek</span>
        </h1>
    )
}
