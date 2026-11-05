import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Logo } from "./Logo";

const STORAGE_KEY = "adyplus-intro";

export function Preloader() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reduce) return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    setVisible(true);
    const timer = window.setTimeout(() => {
      sessionStorage.setItem(STORAGE_KEY, "1");
      setVisible(false);
    }, 1400);
    return () => window.clearTimeout(timer);
  }, [reduce]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[70] grid place-items-center bg-ink"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          role="status"
          aria-label="Loading AdyPlus"
        >
          <div className="flex w-56 flex-col items-center">
            <Logo className="h-24" />
            <div className="mt-6 h-0.5 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full origin-left bg-[linear-gradient(90deg,#6e3ce8,#3a78e0,#14c4d4)]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
