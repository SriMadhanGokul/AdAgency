export const site = {
  name: "AdyPlus Agency",
  line: "All-in-one digital & business solutions",
  email: "hello@adyplus.in",
  /** Digits only, country code included. Leave empty until the client shares a number. */
  whatsapp: "",
  city: "India",
};

export type ServiceItem = { title: string; text: string };

export type Service = {
  slug: string;
  number: string;
  title: string;
  summary: string;
  description: string;
  items: ServiceItem[];
};

export const services: Service[] = [
  {
    slug: "bulk-messaging",
    number: "01",
    title: "Bulk Messaging",
    summary:
      "Reach customers on WhatsApp, SMS and RCS without splitting the campaign across three vendors.",
    description:
      "Promotions, reminders and follow-ups go out from one desk. We plan the list, the message and the timing, then send on the channels your customers actually open.",
    items: [
      {
        title: "Bulk WhatsApp Messaging",
        text: "Offer drops, payment reminders and festival broadcasts written for the way people read WhatsApp.",
      },
      {
        title: "Bulk SMS Services",
        text: "Short, clear SMS for alerts, OTPs you already own, and offers that still need a text message.",
      },
      {
        title: "RCS Messaging",
        text: "Richer business messages — name, logo and buttons — where the handset supports RCS.",
      },
      {
        title: "Promotional & Marketing Campaigns",
        text: "One calendar for the message, the audience and the follow-up, instead of a pile of one-off blasts.",
      },
    ],
  },
  {
    slug: "taxation-registration",
    number: "02",
    title: "Taxation & Registration",
    summary:
      "GST, company setup and the registrations a trading business is asked for, prepared with you.",
    description:
      "We collect the documents, prepare the forms and file on your instructions. This is filing support, not legal or tax advice — you stay the decision maker.",
    items: [
      {
        title: "GST Registration & Return Filing",
        text: "New GST registration and return filing so the monthly cycle is not left to the last afternoon.",
      },
      {
        title: "Company Registration",
        text: "Private limited company setup with the paperwork lined up before anything is submitted.",
      },
      {
        title: "LLP & Partnership Registration",
        text: "LLP and partnership registrations for firms that are not ready for a company structure.",
      },
      {
        title: "MSME / Udyam Registration",
        text: "Udyam registration for businesses that want the MSME record in place.",
      },
      {
        title: "FSSAI Registration",
        text: "Food-business registration support for kitchens, brands and packaged products.",
      },
      {
        title: "Trademark Registration",
        text: "Application support for the name and mark you want to protect.",
      },
      {
        title: "ITR & TDS Filing",
        text: "Income-tax returns and TDS filing from the documents you share.",
      },
      {
        title: "PAN / TAN / DSC Services",
        text: "PAN, TAN and digital signature requests handled as part of the same desk.",
      },
      {
        title: "Other Business Registrations",
        text: "Local and trade registrations that sit next to the ones above — tell us which one you have been asked for.",
      },
    ],
  },
  {
    slug: "digital-marketing",
    number: "03",
    title: "Digital Marketing",
    summary:
      "Ads, social pages and lead follow-up run as one plan, not five separate retainers.",
    description:
      "We manage the accounts you already have — Meta, Google and your Google Business Profile — and report what the spend actually did.",
    items: [
      {
        title: "Meta Ads Management",
        text: "Campaigns on Facebook and Instagram with creative, audience and a weekly read of the numbers.",
      },
      {
        title: "Facebook & Instagram Marketing",
        text: "Organic posting and paid support so the page and the ads are not telling two stories.",
      },
      {
        title: "Social Media Management",
        text: "A content calendar, captions and replies for the profiles you want kept alive.",
      },
      {
        title: "Google Ads Management",
        text: "Search and display campaigns built around the services you actually sell.",
      },
      {
        title: "Google Business Profile",
        text: "GMB updates, photos, posts and review replies so the map listing stays current.",
      },
      {
        title: "Lead Generation",
        text: "Forms, landing pages and a simple handoff so enquiries do not die in an inbox.",
      },
      {
        title: "Advertising Campaigns",
        text: "A named campaign — festival, launch, hiring — with one budget and one end date.",
      },
    ],
  },
  {
    slug: "graphic-design",
    number: "04",
    title: "Graphic Design",
    summary:
      "Posters, brand marks and short video creatives that match the message going out on ads and WhatsApp.",
    description:
      "Design sits next to marketing and messaging, so the poster, the reel and the broadcast use the same offer and the same colours.",
    items: [
      {
        title: "Poster Design",
        text: "Print and digital posters for offers, events and shop windows.",
      },
      {
        title: "Social Media Creatives",
        text: "Feed and story frames sized for the platforms you post on.",
      },
      {
        title: "Logo & Brand Identity",
        text: "A mark, a colour set and a short guide so the next designer is not guessing.",
      },
      {
        title: "Banners & Advertisements",
        text: "Web banners, shop boards and ad sizes cut from the same layout.",
      },
      {
        title: "Reels & Video Creatives",
        text: "Short edited videos for offers, launches and social ads.",
      },
      {
        title: "Business Promotional Designs",
        text: "Visiting cards, rate cards and festival creatives for the business itself.",
      },
    ],
  },
  {
    slug: "websites",
    number: "05",
    title: "Websites",
    summary:
      "Business sites, shops and landing pages that can take the traffic your ads and messages send.",
    description:
      "We design and build the site, then stay on for changes. The page and the campaign are planned together so the offer matches.",
    items: [
      {
        title: "Business Website Design",
        text: "A clear company site: services, proof, and a way to enquire.",
      },
      {
        title: "E-commerce Development",
        text: "A shop with products, payments and the basics of order handling.",
      },
      {
        title: "Landing Page Design",
        text: "A single page for one offer, built to pair with an ad or a broadcast.",
      },
      {
        title: "Portfolio Website",
        text: "A quiet site for studios and professionals who need the work to speak first.",
      },
      {
        title: "Website Redesign",
        text: "A rebuild of a site that looks dated or does not work on a phone.",
      },
      {
        title: "Maintenance & Support",
        text: "Updates, small edits and a person to call when something breaks.",
      },
    ],
  },
];

export const serviceCount = services.reduce((sum, service) => sum + service.items.length, 0);

export type WorkItem = {
  slug: string;
  title: string;
  service: string;
  image: string;
  text: string;
};

export const work: WorkItem[] = [
  {
    slug: "festival-broadcast",
    title: "Festival offer broadcast",
    service: "Messaging",
    image: "/images/messaging.jpg",
    text: "One offer written once, then sent on WhatsApp, SMS and RCS with a follow-up three days later.",
  },
  {
    slug: "registration-desk",
    title: "Registration paperwork",
    service: "Registrations",
    image: "/images/compliance.jpg",
    text: "GST, Udyam and a trademark application prepared from a single document checklist.",
  },
  {
    slug: "lead-month",
    title: "Lead month",
    service: "Marketing",
    image: "/images/marketing.jpg",
    text: "Meta and Google campaigns pointed at one landing page, with leads handed over the same day.",
  },
  {
    slug: "brand-kit",
    title: "Shop brand kit",
    service: "Design",
    image: "/images/design.jpg",
    text: "A mark, a poster set and social frames so the counter and the Instagram grid match.",
  },
  {
    slug: "store-launch",
    title: "Store website launch",
    service: "Websites",
    image: "/images/web.jpg",
    text: "A small shop site launched with the same products that were going into the ad creatives.",
  },
  {
    slug: "social-month",
    title: "A month of creatives",
    service: "Design",
    image: "/images/studio.jpg",
    text: "Twelve posts, four stories and one reel, planned before the month starts.",
  },
];

export const industries = [
  "Clinics",
  "Retail",
  "Restaurants",
  "Education",
  "Real estate",
  "Salons",
  "Manufacturers",
  "Professionals",
  "Local brands",
  "Startups",
];

export const steps = [
  {
    number: "01",
    title: "Listen",
    text: "We start with the offer, the city and the deadline. Messaging, filing, ads, design and the site are scoped in that same conversation.",
  },
  {
    number: "02",
    title: "Shape",
    text: "You get a short plan: what gets filed, what gets designed, what gets sent, and what we need from you before any of it moves.",
  },
  {
    number: "03",
    title: "Make",
    text: "Creatives, pages, campaigns and forms are produced together, so the public work and the paperwork are not two different projects.",
  },
  {
    number: "04",
    title: "Hand over",
    text: "You receive the files, the logins you should hold, and a note of what happens next month. Support stays on if you want it.",
  },
];

export function whatsappLink() {
  if (!site.whatsapp) return "/contact";
  const text = encodeURIComponent("Hello AdyPlus, I would like to talk about a project.");
  return `https://wa.me/${site.whatsapp}?text=${text}`;
}
