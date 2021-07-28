import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [size, setSize] = useState([]);

  useEffect(() => {
    const handleRezise = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };
    window.addEventListener("resize", handleRezise);
    return () => {
      window.removeEventListener("resize", handleRezise);
    };
  }, []);

  return size;
};

export default useWindowSize;
