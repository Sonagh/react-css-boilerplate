import { useEffect, useState } from "react";

export default function useMatchMedia() {
  const mediaQuery = "(max-width: 767.98px)";

  const matchMedia = () => {
    if (!window.matchMedia) {
      return false;
    }
    return window.matchMedia(mediaQuery).matches;
  };

  const [matchValue, setMatchValue] = useState(matchMedia);

  useEffect(() => {
    const matchValueHandler = () => setMatchValue(matchMedia);

    window.addEventListener("resize", matchValueHandler);

    return () => window.removeEventListener("resize", matchValueHandler);
  });

  return matchValue;
}
