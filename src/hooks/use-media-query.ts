"use client";

import {useEffect, useState} from "react";

function useMediaQuery(query: string) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        const setValue = () => {
            if (media.matches !== matches) {
                setMatches(media.matches);
            }
        }
        setValue();

        const listener = () => {
            setValue()
        };
        media.addEventListener("change", listener);
        return () => window.removeEventListener("change", listener);
    }, [matches, query]);

    return matches;
}

export default useMediaQuery;
