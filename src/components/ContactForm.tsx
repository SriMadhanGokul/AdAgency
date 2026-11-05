import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { services } from "../data";

type Errors = Partial<Record<"name" | "email" | "phone" | "message", string>>;

const fieldClass =
  "peer w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 pb-2.5 pt-6 text-sm text-paper outline-none transition-colors focus:border-aqua";

function Field({
  id,
  label,
  type = "text",
  value,
  error,
  autoComplete,
  onChange,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  error?: string;
  autoComplete?: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <div className="relative">
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          placeholder=" "
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`${fieldClass} ${error ? "border-aqua" : ""}`}
          onChange={(event) => onChange(event.target.value)}
        />
        <label
          htmlFor={id}
          className="pointer-events-none absolute top-4 left-4 text-sm text-mist transition-all peer-focus:top-2 peer-focus:text-[11px] peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[11px]"
        >
          {label}
        </label>
      </div>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-aqua" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [params] = useSearchParams();
  const preset = params.get("service") ?? "";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(preset);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const controls = useAnimation();

  const serviceOptions = useMemo(
    () => services.map((item) => ({ value: item.slug, label: item.title })),
    [],
  );

  function validate() {
    const next: Errors = {};
    if (name.trim().length < 2) next.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = "Enter a valid email.";
    const digits = phone.replace(/\D/g, "");
    const phoneOk = digits.length === 10 || (digits.length === 12 && digits.startsWith("91"));
    if (!phoneOk) next.phone = "Enter a 10-digit mobile number.";
    if (message.trim().length < 10) next.message = "Tell us a little more — at least a sentence.";
    return next;
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) {
      await controls.start({ x: [0, -8, 8, -4, 4, 0], transition: { duration: 0.4 } });
      return;
    }

    setBusy(true);
    await new Promise((resolve) => window.setTimeout(resolve, 450));
    const entry = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      service,
      message: message.trim(),
      at: new Date().toISOString(),
    };
    const existing = JSON.parse(localStorage.getItem("adyplus-enquiries") || "[]") as unknown[];
    localStorage.setItem("adyplus-enquiries", JSON.stringify([entry, ...existing].slice(0, 20)));
    setBusy(false);
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-[28px] border border-white/10 bg-panel p-8" role="status">
        <svg viewBox="0 0 52 52" className="size-12" aria-hidden="true">
          <motion.path
            d="M14 27 l8 8 l16-18"
            fill="none"
            stroke="#14c4d4"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>
        <h3 className="font-display mt-4 text-3xl">Message saved on this device.</h3>
        <p className="mt-3 text-sm leading-relaxed text-mist">
          This form is a demo. Nothing was emailed. Connect an inbox or WhatsApp number when you are ready to receive enquiries.
        </p>
      </div>
    );
  }

  return (
    <motion.form className="space-y-4" onSubmit={onSubmit} noValidate animate={controls}>
      <p className="text-xs tracking-wide text-mist uppercase">
        Demo form — messages stay in this browser until an email service is connected.
      </p>
      <Field id="name" label="Your name" value={name} error={errors.name} autoComplete="name" onChange={setName} />
      <Field id="email" label="Email" type="email" value={email} error={errors.email} autoComplete="email" onChange={setEmail} />
      <Field id="phone" label="Mobile number" type="tel" value={phone} error={errors.phone} autoComplete="tel" onChange={setPhone} />
      <div>
        <label htmlFor="service" className="mb-2 block text-[11px] tracking-[0.14em] text-mist uppercase">
          Service
        </label>
        <select
          id="service"
          name="service"
          value={service}
          onChange={(event) => setService(event.target.value)}
          className="w-full rounded-2xl border border-white/10 bg-[#120e1c] px-4 py-3.5 text-sm text-paper outline-none focus:border-aqua"
        >
          <option value="">Not sure yet</option>
          {serviceOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <div className="relative">
          <textarea
            id="message"
            name="message"
            value={message}
            placeholder=" "
            rows={5}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`${fieldClass} resize-none ${errors.message ? "border-aqua" : ""}`}
            onChange={(event) => setMessage(event.target.value)}
          />
          <label
            htmlFor="message"
            className="pointer-events-none absolute top-4 left-4 text-sm text-mist transition-all peer-focus:top-2 peer-focus:text-[11px] peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[11px]"
          >
            Your message
          </label>
        </div>
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-aqua" role="alert">
            {errors.message}
          </p>
        )}
      </div>
      <button type="submit" className="btn btn-primary" disabled={busy}>
        {busy ? "Sending" : "Send message"}
      </button>
    </motion.form>
  );
}
