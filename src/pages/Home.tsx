import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, FileCheck, Megaphone, MessageCircle, Monitor, PenTool } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { industries, serviceCount, services, steps, work } from "../data";
import { CountUp } from "../components/CountUp";
import { Label } from "../components/Label";
import { Photo } from "../components/Photo";
import { Reveal } from "../components/Reveal";
import { ContactForm } from "../components/ContactForm";

const icons: Record<string, LucideIcon> = {
  "bulk-messaging": MessageCircle,
  "taxation-registration": FileCheck,
  "digital-marketing": Megaphone,
  "graphic-design": PenTool,
  websites: Monitor,
};

export function Home() {
  return (
    <>
      <section className="relative overflow-hidden pt-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(110,60,232,0.28),transparent_55%)]" />
        <div className="relative mx-auto max-w-[1100px] px-4 pb-8 text-center md:px-6">
          <p className="text-[11px] font-bold tracking-[0.22em] text-aqua uppercase">All-in-one digital partner</p>
          <h1 className="font-display mx-auto mt-5 max-w-4xl text-4xl leading-[1.05] font-semibold tracking-[-0.04em] text-balance sm:text-6xl md:text-7xl">
            One platform.
            <span className="mt-2 block">
              <span className="inline-block rounded-2xl bg-brand px-3 text-white sm:px-4">Every</span>{" "}
              business solution.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-mist md:text-lg">
            Messaging, registrations, marketing, design and websites — handled together, so the offer in the ad is the same offer on the poster and the form.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/contact" className="btn btn-primary">
              Get in touch
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
            <Link to="/services" className="btn btn-ghost">
              View services
            </Link>
          </div>
        </div>

        <div className="relative mx-auto mt-8 max-w-[1100px] px-4 pb-16 md:px-6">
          <p className="pointer-events-none absolute top-6 left-1/2 z-0 -translate-x-1/2 font-display text-[18vw] leading-none font-semibold tracking-[-0.06em] whitespace-nowrap text-white/[0.06] select-none">
            ADYPLUS
          </p>
          <div className="relative z-10">
            <Photo
              src="/images/hero.jpg"
              alt="People working together on laptops around a shared table"
              priority
              className="aspect-[16/9] w-full rounded-[28px] object-cover md:aspect-[16/8]"
            />
            <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-t from-ink via-ink/10 to-transparent" />
            <div className="absolute bottom-4 left-4 max-w-[240px] rounded-2xl border border-white/10 bg-ink/80 p-4 backdrop-blur-sm md:bottom-6 md:left-6">
              <p className="text-[11px] font-bold tracking-[0.16em] text-aqua uppercase">One team</p>
              <p className="mt-1 text-sm text-paper">Five practices. {serviceCount} services. A single brief.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-4 py-20 md:px-6 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Label>Services</Label>
            <h2 className="font-display mt-4 text-4xl tracking-[-0.04em] md:text-6xl">What we are offering</h2>
          </div>
          <Link to="/services" className="btn btn-primary">
            View all services
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-6">
          {services.map((service, index) => {
            const Icon = icons[service.slug];
            const span = index < 2 ? "md:col-span-3" : "md:col-span-2";
            return (
              <Reveal key={service.slug} delay={index * 0.05} className={span}>
                <Link
                  to={`/services/${service.slug}`}
                  className="group flex h-full flex-col rounded-[28px] border border-white/10 bg-panel p-7 transition-transform duration-300 hover:-translate-y-1 hover:border-brand/50"
                >
                  <span className="grid size-12 place-items-center rounded-2xl bg-brand/15 text-aqua">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <p className="mt-6 text-[11px] font-bold tracking-[0.16em] text-aqua">{service.number}</p>
                  <h3 className="font-display mt-2 text-2xl">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">{service.summary}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] uppercase">
                    Learn more
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 py-8" aria-label="Industries">
        <div className="overflow-hidden">
          <div className="marquee-track flex w-max gap-12 pr-12">
            {[...industries, ...industries].map((name, index) => (
              <span key={`${name}-${index}`} className="flex items-center gap-12 font-display text-3xl text-paper/90 md:text-5xl">
                {name}
                <span className="text-aqua" aria-hidden="true">+</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(110,60,232,0.32),transparent_62%)]" />
        <div className="relative mx-auto grid max-w-[1100px] grid-cols-2 gap-4 px-4 md:grid-cols-4 md:px-6">
          {[
            { value: 5, suffix: "", label: "Practices" },
            { value: serviceCount, suffix: "", label: "Services" },
            { value: 1, suffix: "", label: "Team on the brief" },
            { value: 4, suffix: "", label: "Message channels" },
          ].map((stat) => (
            <div key={stat.label} className="grid aspect-square place-items-center rounded-full border border-white/15 bg-ink/40 text-center">
              <div>
                <p className="font-display text-5xl tracking-tight md:text-6xl">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 px-4 text-[10px] font-semibold tracking-[0.16em] text-mist uppercase">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="relative mx-auto mt-8 grid max-w-[1100px] overflow-hidden rounded-[28px] border border-white/10 bg-panel/80 md:grid-cols-3">
          {[
            ["One brief", "Ads, filings, creatives and the website start from the same conversation."],
            ["Matched work", "The poster, the broadcast and the landing page use one offer."],
            ["A handover", "You keep the files, the logins and a note of what happens next."],
          ].map(([title, text], index) => (
            <div key={title} className={`px-6 py-8 ${index ? "md:border-l md:border-white/10" : ""}`}>
              <h3 className="font-display text-xl">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-4 py-16 md:px-6 md:py-24">
        <div className="text-center">
          <Label>Work</Label>
          <h2 className="font-display mt-4 text-4xl tracking-[-0.04em] md:text-6xl">Selected kinds of work</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-mist">
            Illustrative engagements — the sort of job this desk runs. These are not named client case studies.
          </p>
        </div>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {work.slice(0, 4).map((item, index) => (
            <article key={item.slug} className={index % 2 ? "md:mt-16" : ""}>
              <Photo src={item.image} alt={item.title} className="aspect-[16/11] w-full rounded-[28px] object-cover" />
              <p className="mt-4 text-[11px] font-bold tracking-[0.16em] text-aqua uppercase">{item.service}</p>
              <h3 className="font-display mt-1 text-3xl">{item.title}</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-mist">{item.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/work" className="btn btn-primary">
            View all work
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-4 py-16 md:px-6 md:py-24">
        <Label>Process</Label>
        <h2 className="font-display mt-4 max-w-xl text-4xl tracking-[-0.04em] md:text-6xl">From the first call to the handover</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {steps.map((step) => (
            <article key={step.number} className="rounded-[28px] border border-white/10 bg-panel p-6">
              <p className="font-display text-3xl text-aqua">{step.number}</p>
              <h3 className="font-display mt-6 text-2xl">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1240px] items-start gap-12 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
        <div>
          <Label>Contact</Label>
          <h2 className="font-display mt-4 text-4xl tracking-[-0.04em] md:text-6xl">Let’s talk.</h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-mist">
            Tell us the service, the deadline and the city. We reply with what we need from you before any work starts.
          </p>
          <p className="mt-6 text-sm text-mist">
            Email{" "}
            <a className="text-aqua underline-offset-4 hover:underline" href="mailto:hello@adyplus.in">
              hello@adyplus.in
            </a>
          </p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
