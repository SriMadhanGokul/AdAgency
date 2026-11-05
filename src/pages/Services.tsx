import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "../data";
import { Label } from "../components/Label";

export function Services() {
  return (
    <div className="mx-auto max-w-[1100px] px-4 pt-32 pb-20 md:px-6">
      <Label>Services</Label>
      <h1 className="font-display mt-4 max-w-3xl text-4xl tracking-[-0.04em] md:text-6xl">
        Five practices. Everything listed underneath.
      </h1>
      <p className="mt-5 max-w-2xl text-mist">
        Pick a practice, or send a mixed brief. Quotes depend on volume, city and how fast you need it — there is no public rate card.
      </p>
      <div className="mt-12 space-y-6">
        {services.map((service) => (
          <article key={service.slug} id={service.slug} className="rounded-[28px] border border-white/10 bg-panel p-6 md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-bold tracking-[0.16em] text-aqua">{service.number}</p>
                <h2 className="font-display mt-2 text-3xl md:text-4xl">{service.title}</h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mist">{service.description}</p>
              </div>
              <Link to={`/services/${service.slug}`} className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] uppercase">
                Open
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {service.items.map((item) => (
                <li key={item.title} className="rounded-2xl border border-white/8 px-4 py-3 text-sm">
                  {item.title}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
