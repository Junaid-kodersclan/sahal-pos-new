"use client";

import { useEffect, useState } from "react";

// useWindowWidth custom hook
export function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return windowWidth;
}
