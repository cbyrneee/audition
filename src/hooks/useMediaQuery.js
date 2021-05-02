import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState();

    const updateMatches = () => {
        if (window.matchMedia) {
            if (window.matchMedia(query).matches) {
                setMatches(true);
            } else {
                setMatches(false);
            }
        }
    };

    useEffect(() => {
        updateMatches();

        // We are ignoring warnings on this line as updateMatches is used outside of useEffect
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

    if (window.matchMedia) {
        const mediaQuery = window.matchMedia(query);
        mediaQuery.addEventListener("change", () => {
            updateMatches();
        });
    }

    return matches;
};

export default useMediaQuery;
