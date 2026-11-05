import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { services, steps } from "../data";
import { Label } from "../components/Label";
import { Photo } from "../components/Photo";

export function About() {
  return (
    <div className="mx-auto max-w-[1100px] px-4 pt-32 pb-20 md:px-6">
      <Label>About</Label>
      <h1 className="font-display mt-4 max-w-3xl text-4xl tracking-[-0.04em] md:text-6xl">
        One desk for the work that usually gets split five ways.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">
        AdyPlus is a digital and business-solutions agency. Businesses come here when they need customers reached, paperwork filed, and a public face that matches — without hiring a separate vendor for each.
      </p>

      <Photo
        src="/images/about.jpg"
        alt="A team gathered for a working session in a bright office"
        className="mt-10 aspect-[16/8] w-full rounded-[28px] object-cover"
      />

      <div className="mt-14 grid gap-10 md:grid-cols-[1fr_1fr]">
        <div>
          <h2 className="font-display text-3xl">How the five practices sit together</h2>
          <p className="mt-4 text-sm leading-relaxed text-mist">
            A festival offer is a message, a poster, an ad and sometimes a landing page. A new shop is a registration, a Google listing and a website. Keeping those in one place is the point of the agency — not a longer list of unrelated services.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-mist">
            Registration work is prepared from your documents and filed on your instructions. It is support with forms, not legal or tax advice.
          </p>
        </div>
        <ol className="divide-y divide-white/10 border-y border-white/10">
          {services.map((service) => (
            <li key={service.slug}>
              <Link to={`/services/${service.slug}`} className="flex items-baseline justify-between gap-4 py-4 hover:text-aqua">
                <span className="font-display text-xl">
                  <span className="mr-3 text-aqua">{service.number}</span>
                  {service.title}
                </span>
                <span className="text-xs tracking-[0.14em] text-mist uppercase">{service.items.length}</span>
              </Link>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-16 grid gap-4 md:grid-cols-4">
        {steps.map((step) => (
          <article key={step.number} className="rounded-[28px] border border-white/10 p-5">
            <p className="text-aqua">{step.number}</p>
            <h3 className="font-display mt-3 text-xl">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-mist">{step.text}</p>
          </article>
        ))}
      </div>

      <Link to="/contact" className="btn btn-primary mt-12">
        Start a brief
        <ArrowUpRight size={16} aria-hidden="true" />
      </Link>
    </div>
  );
}
