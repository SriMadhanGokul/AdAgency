import { Link } from "react-router-dom";
import { services, site } from "../data";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#08060f]">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-4 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:px-6">
        <div>
          <Logo className="h-20" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-mist">
            {site.line}. Messaging, registrations, marketing, design and websites from one team.
          </p>
        </div>
        <div>
          <h2 className="text-[11px] font-bold tracking-[0.18em] text-aqua uppercase">Menu</h2>
          <ul className="mt-4 space-y-2 text-sm text-mist">
            <li><Link className="hover:text-white" to="/">Home</Link></li>
            <li><Link className="hover:text-white" to="/about">About</Link></li>
            <li><Link className="hover:text-white" to="/services">Services</Link></li>
            <li><Link className="hover:text-white" to="/work">Work</Link></li>
            <li><Link className="hover:text-white" to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-[11px] font-bold tracking-[0.18em] text-aqua uppercase">Services</h2>
          <ul className="mt-4 space-y-2 text-sm text-mist">
            {services.map((service) => (
              <li key={service.slug}>
                <Link className="hover:text-white" to={`/services/${service.slug}`}>
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-[11px] font-bold tracking-[0.18em] text-aqua uppercase">Contact</h2>
          <ul className="mt-4 space-y-2 text-sm text-mist">
            <li>
              <a className="hover:text-white" href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>Serving businesses across {site.city}</li>
            <li><Link className="hover:text-white" to="/privacy">Privacy</Link></li>
            <li><Link className="hover:text-white" to="/terms">Terms</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-2 px-4 py-5 text-xs text-mist md:flex-row md:items-center md:justify-between md:px-6">
          <p>© {new Date().getFullYear()} AdyPlus Agency. All rights reserved.</p>
          <p>Photography from Unsplash. Logo belongs to AdyPlus.</p>
        </div>
      </div>
    </footer>
  );
}
