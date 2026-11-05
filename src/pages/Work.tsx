import { useMemo, useState } from "react";
import { work } from "../data";
import { Label } from "../components/Label";
import { Photo } from "../components/Photo";

const filters = ["All", ...Array.from(new Set(work.map((item) => item.service)))];

export function Work() {
  const [filter, setFilter] = useState("All");
  const items = useMemo(
    () => (filter === "All" ? work : work.filter((item) => item.service === filter)),
    [filter],
  );

  return (
    <div className="mx-auto max-w-[1100px] px-4 pt-32 pb-20 md:px-6">
      <Label>Work</Label>
      <h1 className="font-display mt-4 text-4xl tracking-[-0.04em] md:text-6xl">The kind of work we take on</h1>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mist">
        These are representative engagements, shown so you can see the shape of a job. They are not claims about named clients.
      </p>
      <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter work">
        {filters.map((name) => {
          const active = filter === name;
          return (
            <button
              key={name}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(name)}
              className={`rounded-full px-4 py-2 text-[11px] font-bold tracking-[0.14em] uppercase ${
                active ? "bg-brand text-white" : "border border-white/15 text-mist"
              }`}
            >
              {name}
            </button>
          );
        })}
      </div>
      <div className="mt-10 grid gap-10 md:grid-cols-2">
        {items.map((item, index) => (
          <article key={item.slug} className={index % 2 ? "md:mt-12" : ""}>
            <Photo src={item.image} alt={item.title} className="aspect-[16/11] w-full rounded-[28px] object-cover" />
            <p className="mt-4 text-[11px] font-bold tracking-[0.16em] text-aqua uppercase">{item.service}</p>
            <h2 className="font-display mt-1 text-3xl">{item.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-mist">{item.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
