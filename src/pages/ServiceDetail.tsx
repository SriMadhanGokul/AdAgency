import { Link, useParams } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useEffect } from "react";
import { services } from "../data";

export function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  useEffect(() => {
    if (service) document.title = `${service.title} — AdyPlus Agency`;
  }, [service]);

  if (!service) {
    return (
      <div className="mx-auto max-w-3xl px-4 pt-32 pb-20">
        <h1 className="font-display text-4xl">That service is not on the list.</h1>
        <Link to="/services" className="btn btn-primary mt-6">All services</Link>
      </div>
    );
  }

  const others = services.filter((item) => item.slug !== service.slug);

  return (
    <div className="mx-auto max-w-[900px] px-4 pt-32 pb-20 md:px-6">
      <p className="text-[11px] font-bold tracking-[0.16em] text-aqua uppercase">
        <Link to="/services" className="hover:text-white">Services</Link>
        <span className="mx-2 text-mist">/</span>
        {service.number}
      </p>
      <h1 className="font-display mt-4 text-4xl tracking-[-0.04em] md:text-6xl">{service.title}</h1>
      <p className="mt-5 text-lg leading-relaxed text-mist">{service.description}</p>
      {service.slug === "taxation-registration" && (
        <p className="mt-4 rounded-2xl border border-aqua/30 bg-brand/10 px-4 py-3 text-sm text-mist">
          Filing support is done on your documents and instructions. This page is not legal or tax advice.
        </p>
      )}
      <ol className="mt-10 divide-y divide-white/10 border-y border-white/10">
        {service.items.map((item, index) => (
          <li key={item.title} className="grid gap-2 py-5 md:grid-cols-[4rem_1fr]">
            <span className="font-display text-aqua">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h2 className="font-display text-2xl">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-mist">{item.text}</p>
            </div>
          </li>
        ))}
      </ol>
      <Link to={`/contact?service=${service.slug}`} className="btn btn-primary mt-10">
        Enquire about this
        <ArrowUpRight size={16} aria-hidden="true" />
      </Link>
      <div className="mt-14">
        <h2 className="text-[11px] font-bold tracking-[0.16em] text-aqua uppercase">Other practices</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {others.map((item) => (
            <Link key={item.slug} to={`/services/${item.slug}`} className="rounded-2xl border border-white/10 px-4 py-4 hover:border-brand/50">
              <span className="text-aqua">{item.number}</span>
              <span className="font-display mt-1 block text-xl">{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
