import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export function ScrollManager() {
  const { pathname } = useLocation();
  const navType = useNavigationType();
  const positions = useRef<Record<string, number>>({});
  const previous = useRef(pathname);

  useEffect(() => {
    const onScroll = () => {
      positions.current[previous.current] = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (navType === "POP") {
      const y = positions.current[pathname] ?? 0;
      window.scrollTo({ top: y, behavior: "instant" as ScrollBehavior });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
    previous.current = pathname;
  }, [pathname, navType]);

  return null;
}
