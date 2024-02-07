import {cn} from "@/lib/utils";
import styles from "./face.module.css";

export default function Face({className}: {className?: string}) {
    return (
        <div className={cn(styles.logo, "h-96", "w-72", className)}>
            <div className={cn(styles.main)}></div>
            <div className={cn(styles.third, "bg-accent")}></div>
            <div className={cn(styles.second, "bg-secondary")}></div>
        </div>
    )
}
