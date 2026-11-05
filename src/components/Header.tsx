import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { services } from "../data";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/work", label: "Work" },
  { to: "/contact", label: "Contact" },
];

function navClass(active: boolean) {
  return `rounded-full px-3.5 py-2 text-[11px] font-semibold tracking-[0.14em] uppercase transition-colors duration-300 ${
    active ? "bg-brand text-white" : "text-paper/80 hover:text-white"
  }`;
}

export function Header() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const onServices = pathname.startsWith("/services");

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setServicesOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="relative z-50 border-b border-white/5 bg-ink/85 backdrop-blur-md">
      <div className="mx-auto grid max-w-[1240px] grid-cols-[1fr_auto] items-center gap-3 px-4 py-4 md:grid-cols-[1fr_auto_1fr] md:px-6">
        <Link to="/" className="justify-self-start rounded-xl" aria-label="AdyPlus Agency, home">
          <Logo className="h-14 sm:h-16" />
        </Link>

        <nav
          className="hidden items-center gap-1 rounded-full border border-white/10 bg-ink/80 px-2 py-1.5 backdrop-blur-md md:flex"
          aria-label="Primary"
        >
          <NavLink to="/" end className={({ isActive }) => navClass(isActive)}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => navClass(isActive)}>
            About
          </NavLink>
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className={navClass(onServices || servicesOpen)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((open) => !open)}
            >
              Services
              <ChevronDown className="ml-1 inline size-3.5" aria-hidden="true" />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-1/2 z-20 w-72 -translate-x-1/2 pt-3">
                <div className="rounded-3xl border border-white/10 bg-[#120e1c] p-2 shadow-2xl">
                  <Link
                    to="/services"
                    className="block rounded-2xl px-3 py-2.5 text-sm text-mist hover:bg-white/5 hover:text-white"
                  >
                    All services
                  </Link>
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      className="block rounded-2xl px-3 py-2.5 text-sm text-mist hover:bg-white/5 hover:text-white"
                    >
                      <span className="mr-2 text-aqua">{service.number}</span>
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <NavLink to="/work" className={({ isActive }) => navClass(isActive)}>
            Work
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => navClass(isActive)}>
            Contact
          </NavLink>
        </nav>

        <div className="flex items-center justify-end gap-2">
          <Link to="/contact" className="btn btn-primary hidden md:inline-flex">
            Get in touch
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-white/15 md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-30 bg-ink px-6 pt-28 md:hidden">
          <nav className="flex flex-col gap-2" aria-label="Mobile">
            {links.slice(0, 2).map((link) => (
              <Link key={link.to} to={link.to} className="font-display text-4xl text-white">
                {link.label}
              </Link>
            ))}
            <Link to="/services" className="font-display text-4xl text-white">
              Services
            </Link>
            <div className="mb-4 flex flex-col gap-2 pl-1">
              {services.map((service) => (
                <Link key={service.slug} to={`/services/${service.slug}`} className="text-mist">
                  {service.number} {service.title}
                </Link>
              ))}
            </div>
            {links.slice(2).map((link) => (
              <Link key={link.to} to={link.to} className="font-display text-4xl text-white">
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="btn btn-primary mt-6 w-fit">
              Get in touch
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
