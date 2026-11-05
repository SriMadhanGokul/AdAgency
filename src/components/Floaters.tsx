import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { site, whatsappLink } from "../data";

export function Floaters() {
  const [showTop, setShowTop] = useState(false);
  const href = whatsappLink();
  const external = href.startsWith("http");

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-4 bottom-4 z-30 flex flex-col items-end gap-3">
      {showTop && (
        <button
          type="button"
          className="grid size-11 place-items-center rounded-full bg-brand text-white shadow-lg"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp size={18} />
        </button>
      )}
      {external ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="grid size-12 place-items-center rounded-full bg-brand text-white shadow-lg"
          aria-label="WhatsApp AdyPlus"
        >
          <MessageCircle size={20} />
        </a>
      ) : (
        <Link
          to={href}
          className="grid size-12 place-items-center rounded-full bg-brand text-white shadow-lg"
          aria-label={site.whatsapp ? "WhatsApp AdyPlus" : "Contact AdyPlus"}
        >
          <MessageCircle size={20} />
        </Link>
      )}
    </div>
  );
}
