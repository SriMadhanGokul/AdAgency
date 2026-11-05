import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Preloader } from "./components/Preloader";
import { Floaters } from "./components/Floaters";
import { ScrollProgress } from "./components/ScrollProgress";
import { ScrollManager } from "./components/ScrollManager";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { ServiceDetail } from "./pages/ServiceDetail";
import { Work } from "./pages/Work";
import { Contact } from "./pages/Contact";
import { Legal } from "./pages/Legal";
import { NotFound } from "./pages/NotFound";

function Page({ title, children }: { title: string; children: ReactNode }) {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (title) document.title = title;
  }, [title]);

  return (
    <motion.main
      id="main"
      initial={reduce ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduce ? undefined : { opacity: 0, y: -10 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-[70vh]"
    >
      {children}
    </motion.main>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[80] focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Preloader />
      <ScrollProgress />
      <ScrollManager />
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Page title="AdyPlus Agency — All-in-One Digital & Business Solutions"><Home /></Page>} />
          <Route path="/about" element={<Page title="About — AdyPlus Agency"><About /></Page>} />
          <Route path="/services" element={<Page title="Services — AdyPlus Agency"><Services /></Page>} />
          <Route path="/services/:slug" element={<Page title=""><ServiceDetail /></Page>} />
          <Route path="/work" element={<Page title="Work — AdyPlus Agency"><Work /></Page>} />
          <Route path="/contact" element={<Page title="Contact — AdyPlus Agency"><Contact /></Page>} />
          <Route path="/privacy" element={<Page title="Privacy — AdyPlus Agency"><Legal kind="privacy" /></Page>} />
          <Route path="/terms" element={<Page title="Terms — AdyPlus Agency"><Legal kind="terms" /></Page>} />
          <Route path="*" element={<Page title="Page not found — AdyPlus Agency"><NotFound /></Page>} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <Floaters />
    </>
  );
}
