import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"
import {RefObject} from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function scrollToBottom(ref: RefObject<any>) {
  ref.current?.scrollIntoView({ behavior: "smooth" })
  ref.current?.scrollTo({
    top: ref.current?.scrollHeight,
    behavior: "smooth"
  });
}
