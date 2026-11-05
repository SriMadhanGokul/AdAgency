import { ContactForm } from "../components/ContactForm";
import { Label } from "../components/Label";
import { site } from "../data";

export function Contact() {
  return (
    <div className="mx-auto grid max-w-[1100px] items-start gap-12 px-4 pt-32 pb-20 md:grid-cols-2 md:px-6">
      <div>
        <Label>Contact</Label>
        <h1 className="font-display mt-4 text-4xl tracking-[-0.04em] md:text-6xl">Let’s talk.</h1>
        <p className="mt-4 text-sm leading-relaxed text-mist">
          Share the service, the city and when you need it. We will tell you what documents or logins we need before anything is designed or filed.
        </p>
        <dl className="mt-8 space-y-5 text-sm">
          <div>
            <dt className="text-[11px] font-bold tracking-[0.16em] text-aqua uppercase">Email</dt>
            <dd className="mt-1">
              <a className="hover:text-aqua" href={`mailto:${site.email}`}>{site.email}</a>
            </dd>
          </div>
          <div>
            <dt className="text-[11px] font-bold tracking-[0.16em] text-aqua uppercase">Where</dt>
            <dd className="mt-1 text-mist">Working with businesses across {site.city}.</dd>
          </div>
          <div>
            <dt className="text-[11px] font-bold tracking-[0.16em] text-aqua uppercase">What happens next</dt>
            <dd className="mt-1 text-mist">We read the brief, ask for anything missing, and reply with a scope. Nothing is filed or published without your go-ahead.</dd>
          </div>
        </dl>
      </div>
      <ContactForm />
    </div>
  );
}
