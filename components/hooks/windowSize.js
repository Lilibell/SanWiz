import { useState, useEffect } from "react";

const useWindowSize = () => {
    const [size, setSize] = useState(null);

    useEffect(() => {
        setSize(window.innerWidth);
        const handleRezise = () => {
            setSize(window.innerWidth);
        };
        window.addEventListener("resize", handleRezise);
        return () => {
            window.removeEventListener("resize", handleRezise);
        };
    }, []);

    return size;
};

export default useWindowSize;
