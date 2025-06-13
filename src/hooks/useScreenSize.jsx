import { useEffect, useState } from "react";

export default function useScreenSize(smallScreenSizeThreshold) {
    const [onSmallDevice, setOnSmallDevice] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            if (window.innerWidth <= smallScreenSizeThreshold) {
                setOnSmallDevice(true);
            } else {
                setOnSmallDevice(false);
            }
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        // cleanup area
        return () => {
            // cleanup task
            window.removeEventListener("resize", checkScreenSize);
        };
    }, [smallScreenSizeThreshold]);

    return onSmallDevice;
}
