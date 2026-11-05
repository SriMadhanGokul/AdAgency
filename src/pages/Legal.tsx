export function Legal({ kind }: { kind: "privacy" | "terms" }) {
  const privacy = kind === "privacy";

  return (
    <article className="mx-auto max-w-3xl px-4 pt-32 pb-20 md:px-6">
      <h1 className="font-display text-4xl tracking-[-0.04em] md:text-6xl">
        {privacy ? "Privacy" : "Terms"}
      </h1>
      <div className="mt-8 space-y-4 text-sm leading-relaxed text-mist">
        {privacy ? (
          <>
            <p>
              The enquiry form on this site stores what you type in your own browser, on this device. It is not sent to an email server yet. Clear the site data in your browser to remove it.
            </p>
            <p>
              If you email us, we use that message to reply about the work you asked for. We do not sell enquiry details. When a real inbox is connected, this page should be updated with who holds the data and how long it is kept.
            </p>
            <p>
              Pages may load type from Google Fonts. Photography is used under the Unsplash licence.
            </p>
          </>
        ) : (
          <>
            <p>
              AdyPlus describes services it can take on. A listing on this website is not a quote, a filing, or a promise of a particular result from ads or registrations.
            </p>
            <p>
              Tax, GST and registration pages are practical support. They are not legal, financial or tax advice. You approve documents before they are submitted in your name.
            </p>
            <p>
              Work examples on the site are illustrative. They are not claims that a named business is a client.
            </p>
            <p>
              The enquiry form is a demonstration until an email or WhatsApp number is connected. Sending it does not create a contract.
            </p>
          </>
        )}
      </div>
    </article>
  );
}
