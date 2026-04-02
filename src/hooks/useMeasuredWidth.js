import { useRef, useLayoutEffect } from "react";

export function useMeasuredWidth() {
    const ref = useRef(null);

    useLayoutEffect(() => {
        if (ref.current) {
            ref.current.style.setProperty(
                "--pill-locked-width",
                `${ref.current.offsetWidth}px`
            );
        }
    }, []);

    return ref;
}