import { useMemo, useState, type ChangeEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BRAND,
  CREDIT,
  FOUNDER,
  IMAGES,
  NAV,
  PHONE_DISPLAY,
  PHONE_TEL,
  POLICIES,
  PRODUCTS,
  waLink,
} from "../lib/content";
import { Btn, Logo, Mark, PhoneIcon, Photo, Reveal, SectionHead, WaIcon } from "./ui";
import { Section } from "./Sections1";

/* ============================ ORDER & ENQUIRY ============================ */
export function Order() {
  const [productId, setProductId] = useState(PRODUCTS[0].id);
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [note, setNote] = useState("");

  const product = PRODUCTS.find((p) => p.id === productId) ?? PRODUCTS[0];

  const message = useMemo(() => {
    const lines = [
      `Hello ${BRAND}, I would like to order the ${product.name}.`,
      name.trim() ? `Name: ${name.trim()}` : "",
      place.trim() ? `City / PIN: ${place.trim()}` : "",
      note.trim() ? `Note: ${note.trim()}` : "",
      "Please share the current price, pack sizes and delivery details.",
    ];
    return lines.filter(Boolean).join("\n");
  }, [product, name, place, note]);

  const field =
    "w-full border border-cream/35 bg-cream/10 px-4 py-3 text-[0.98rem] text-cream placeholder:text-cream/45 transition-colors focus:border-beige focus:bg-cream/15 outline-none";

  return (
    <Section id="order" tone="forest" className="relative overflow-hidden border-cream/15">
      <div className="pointer-events-none absolute inset-0">
        <img
          src={IMAGES.darkOil}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(22,36,27,0.94),rgba(36,59,43,0.86))]" />
      </div>

      <div className="relative">
        <SectionHead
          spec="Section 10 — Order & Enquiry"
          tone="light"
          title={
            <>
              Write it once,
              <span className="italic text-beige"> send it in a tap.</span>
            </>
          }
          intro="Pick a product, add your details, and the WhatsApp message below is assembled for you. Nothing is charged until we confirm price and availability with you."
        />

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <fieldset>
              <legend className="u-label-sm text-beige-deep">01 — Choose a product</legend>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {PRODUCTS.map((p) => {
                  const on = p.id === productId;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setProductId(p.id)}
                      aria-pressed={on}
                      className={`flex items-start gap-3 border px-4 py-4 text-left transition-all duration-300 ${
                        on
                          ? "border-beige bg-cream text-forest"
                          : "border-cream/30 text-cream/85 hover:border-cream/70"
                      }`}
                    >
                      <span
                        className={`mt-1 h-3.5 w-3.5 shrink-0 border ${
                          on ? "border-forest bg-amber" : "border-cream/60"
                        }`}
                      />
                      <span>
                        <span className="block font-display text-[1.15rem] leading-tight">
                          {p.name}
                        </span>
                        <span className={`u-label-sm mt-1 block ${on ? "text-taupe" : "text-beige-deep"}`}>
                          {p.spec} · {p.base}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="u-label-sm text-beige-deep">02 — Your name</span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full name"
                  className={`mt-3 ${field}`}
                />
              </label>
              <label className="block">
                <span className="u-label-sm text-beige-deep">03 — City / PIN code</span>
                <input
                  value={place}
                  onChange={(e) => setPlace(e.target.value)}
                  placeholder="Delivery location"
                  className={`mt-3 ${field}`}
                />
              </label>
            </div>

            <label className="mt-4 block">
              <span className="u-label-sm text-beige-deep">04 — Anything else</span>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={3}
                placeholder="Pack size, quantity, or a question about ingredients"
                className={`mt-3 resize-none ${field}`}
              />
            </label>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="plate plate-light sticky top-28 bg-cream p-6 text-forest">
              <div className="flex items-center justify-between border-b border-forest/25 pb-3">
                <span className="u-label-sm text-amber">Message docket</span>
                <span className="u-label-sm text-taupe">Live preview</span>
              </div>
              <pre className="mt-5 min-h-[9.5rem] whitespace-pre-wrap break-words font-sans text-[0.95rem] leading-[1.75] text-forest/90">
                {message}
              </pre>
              <div className="mt-5 border-t border-dashed border-forest/35 pt-4 text-[0.85rem] text-taupe">
                Sending opens WhatsApp with this text pre-filled to +91 90247 75584.
              </div>
              <Btn href={waLink(message)} variant="solid" className="mt-5 w-full">
                <WaIcon /> Send order on WhatsApp
              </Btn>
              <Btn href={`tel:${PHONE_TEL}`} variant="outline" className="mt-3 w-full">
                <PhoneIcon /> Or call {PHONE_DISPLAY}
              </Btn>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

/* ============================ CONTACT ============================ */
type Errors = Partial<Record<"name" | "phone" | "email" | "message", string>>;

export function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sentLink, setSentLink] = useState<string | null>(null);

  const set =
    (k: keyof typeof form) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [k]: e.target.value }));
      setErrors((x) => ({ ...x, [k]: undefined }));
    };

  const validate = (): Errors => {
    const e: Errors = {};
    if (form.name.trim().length < 2) e.name = "Please enter your name.";
    const digits = form.phone.replace(/[^\d]/g, "");
    if (!/^(91)?[6-9]\d{9}$/.test(digits)) e.phone = "Enter a valid 10-digit Indian mobile number.";
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim()))
      e.email = "That email address doesn't look right.";
    if (form.message.trim().length < 10) e.message = "Please tell us a little more (10 characters minimum).";
    return e;
  };

  const submit = (ev: { preventDefault: () => void }) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) {
      const first = document.querySelector<HTMLElement>("[data-invalid='true']");
      first?.focus();
      return;
    }
    const text = [
      `Hello ${BRAND}, here is an enquiry from your website.`,
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      form.email.trim() ? `Email: ${form.email.trim()}` : "",
      `Message: ${form.message.trim()}`,
    ]
      .filter(Boolean)
      .join("\n");
    const link = waLink(text);
    setSentLink(link);
    window.open(link, "_blank", "noopener");
  };

  const inputCls = (bad?: string) =>
    `mt-2 w-full border px-4 py-3 text-[0.98rem] outline-none transition-colors ${
      bad
        ? "border-amber bg-amber/8 text-forest"
        : "border-forest/30 bg-cream focus:border-forest/70"
    }`;

  return (
    <Section id="contact" tone="cream">
      <SectionHead
        spec="Section 11 — Contact"
        title={
          <>
            Talk to a person,
            <span className="italic text-amber"> not a ticket number.</span>
          </>
        }
        intro="Call or message the numbers below, or leave your details in the form — a valid enquiry opens WhatsApp with everything already written in it."
      />

      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-5">
          <div className="plate bg-paper p-6 sm:p-8">
            <Photo
              src={IMAGES.bottles}
              alt="Rows of glass bottles holding herbs and oils, ready for labelling"
              className="mb-6 aspect-[16/9]"
              spec="Plate H"
              caption="Bassi Organics — direct lines"
            />
            <span className="u-label-sm text-amber">Direct lines</span>

            <div className="mt-5 flex flex-col gap-3">
              <Btn href={`tel:${PHONE_TEL}`} variant="solid" className="w-full">
                <PhoneIcon /> Call {PHONE_DISPLAY}
              </Btn>
              <Btn
                href={waLink("Hello Bassi Organics, I would like to enquire about your products.")}
                variant="outline"
                className="w-full"
              >
                <WaIcon /> Chat on WhatsApp
              </Btn>
            </div>

            <dl className="mt-8 border-t border-forest/25">
              {[
                ["Brand", BRAND],
                ["Founder", FOUNDER],
                ["Phone / WhatsApp", PHONE_DISPLAY],
                ["Response hours", "[Timings to be confirmed]"],
                ["Address", "[Full postal address to be confirmed]"],
                ["Serving", "Orders confirmed directly over WhatsApp"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex flex-wrap items-baseline justify-between gap-3 border-b border-forest/15 py-3.5"
                >
                  <dt className="u-label-sm text-taupe">{k}</dt>
                  <dd className="text-right text-[0.95rem] text-forest">{v}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 text-[0.85rem] leading-relaxed text-taupe">
              Fields marked “to be confirmed” are placeholders — send us the real address and
              timings and they will be published here the same day.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-7">
          <form onSubmit={submit} noValidate className="plate bg-cream p-6 sm:p-8">
            <div className="flex items-baseline justify-between border-b border-forest/25 pb-3">
              <span className="u-label-sm text-amber">Enquiry form</span>
              <span className="u-label-sm text-taupe">Validated before sending</span>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="c-name" className="u-label-sm text-taupe">
                  Your name *
                </label>
                <input
                  id="c-name"
                  value={form.name}
                  onChange={set("name")}
                  data-invalid={errors.name ? "true" : "false"}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "c-name-err" : undefined}
                  className={inputCls(errors.name)}
                  placeholder="Full name"
                />
                {errors.name && (
                  <p id="c-name-err" role="alert" className="mt-2 text-[0.82rem] text-amber">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="c-phone" className="u-label-sm text-taupe">
                  Mobile number *
                </label>
                <input
                  id="c-phone"
                  inputMode="tel"
                  value={form.phone}
                  onChange={set("phone")}
                  data-invalid={errors.phone ? "true" : "false"}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "c-phone-err" : undefined}
                  className={inputCls(errors.phone)}
                  placeholder="90000 00000"
                />
                {errors.phone && (
                  <p id="c-phone-err" role="alert" className="mt-2 text-[0.82rem] text-amber">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="c-email" className="u-label-sm text-taupe">
                  Email (optional)
                </label>
                <input
                  id="c-email"
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  data-invalid={errors.email ? "true" : "false"}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "c-email-err" : undefined}
                  className={inputCls(errors.email)}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p id="c-email-err" role="alert" className="mt-2 text-[0.82rem] text-amber">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="c-message" className="u-label-sm text-taupe">
                  Your enquiry *
                </label>
                <textarea
                  id="c-message"
                  rows={5}
                  value={form.message}
                  onChange={set("message")}
                  data-invalid={errors.message ? "true" : "false"}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "c-message-err" : undefined}
                  className={`${inputCls(errors.message)} resize-none`}
                  placeholder="Which product, how many, and where it needs to be delivered"
                />
                {errors.message && (
                  <p id="c-message-err" role="alert" className="mt-2 text-[0.82rem] text-amber">
                    {errors.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-[42ch] text-[0.84rem] leading-relaxed text-taupe">
                We use these details only to reply to you. Nothing is stored on this website.
              </p>
              <Btn type="submit" variant="solid">
                <WaIcon /> Send enquiry
              </Btn>
            </div>

            <AnimatePresence>
              {sentLink && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-6 border border-forest/35 bg-paper px-5 py-4"
                  role="status"
                >
                  <p className="u-label-sm text-amber">Ready to send</p>
                  <p className="mt-2 text-[0.95rem] text-forest">
                    WhatsApp should have opened with your enquiry. If it did not, use this link:
                  </p>
                  <a
                    href={sentLink}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link-underline mt-2 inline-block text-[0.95rem] text-forest underline"
                  >
                    Open the pre-filled message
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

/* ============================ FOOTER ============================ */
export function Footer() {
  const [policy, setPolicy] = useState<string | null>(null);
  const active = POLICIES.find((p) => p.id === policy);

  return (
    <>
      <footer className="bg-forest-deep text-cream">
        <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 lg:py-20">
          <div className="grid gap-10 border-b border-cream/20 pb-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 text-beige">
                <Logo className="h-11 w-11 shadow-sm" />
                <span className="font-display text-xl font-semibold uppercase tracking-[0.16em] text-cream">
                  {BRAND}
                </span>
              </div>
              <p className="mt-6 max-w-[44ch] text-[1rem] leading-[1.8] text-cream/75">
                Coconut-oil-based herbal hair oil and a herbal shampoo. Short ingredient lists,
                small batches, and a WhatsApp line that a human answers.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Btn href={`tel:${PHONE_TEL}`} variant="light" className="px-5! py-3!">
                  <PhoneIcon /> {PHONE_DISPLAY}
                </Btn>
                <Btn
                  href={waLink("Hello Bassi Organics, I would like to place an order.")}
                  variant="outline"
                  className="border-cream/40! text-cream! hover:bg-cream! hover:text-forest! px-5! py-3!"
                >
                  <WaIcon /> WhatsApp
                </Btn>
              </div>
            </div>

            <nav className="lg:col-span-3" aria-label="Footer quick links">
              <p className="u-label-sm text-beige-deep">Quick links</p>
              <ul className="mt-5 grid gap-2.5">
                {[{ id: "home", label: "Home" }, ...NAV].map((l) => (
                  <li key={l.id}>
                    <a
                      href={`#${l.id}`}
                      className="link-underline text-[0.95rem] text-cream/75 transition-colors hover:text-beige"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="lg:col-span-4">
              <p className="u-label-sm text-beige-deep">Policies</p>
              <ul className="mt-5 grid gap-2.5">
                {POLICIES.map((p) => (
                  <li key={p.id}>
                    <button
                      type="button"
                      onClick={() => setPolicy(p.id)}
                      className="link-underline text-left text-[0.95rem] text-cream/75 transition-colors hover:text-beige"
                    >
                      {p.title}
                    </button>
                  </li>
                ))}
              </ul>

              <p className="u-label-sm mt-8 text-beige-deep">Elsewhere</p>
              <ul className="mt-4 grid gap-2.5">
                {["Instagram", "Facebook", "YouTube"].map((s) => (
                  <li key={s} className="flex items-baseline gap-3 text-[0.95rem] text-cream/45">
                    <span>{s}</span>
                    <span className="u-label-sm text-cream/35">link to be added</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="u-label-sm text-cream/55">
              © {new Date().getFullYear()} {BRAND} — all rights reserved
            </p>
            <p className="u-label-sm text-beige-deep">
              Website credit: designed by {CREDIT}
            </p>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[80] flex items-end justify-center bg-forest-deep/85 p-0 sm:items-center sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            onClick={() => setPolicy(null)}
          >
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 16, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] w-full max-w-2xl overflow-y-auto border border-forest/40 bg-cream p-6 text-forest sm:p-9"
            >
              <div className="flex items-start justify-between gap-6 border-b border-forest/25 pb-4">
                <div>
                  <span className="u-label-sm text-amber">Policy</span>
                  <h2 className="mt-2 text-[1.75rem] leading-tight">{active.title}</h2>
                </div>
                <button
                  type="button"
                  onClick={() => setPolicy(null)}
                  aria-label="Close policy"
                  className="flex h-10 w-10 shrink-0 items-center justify-center border border-forest/35 transition-colors hover:bg-forest hover:text-cream"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" stroke="currentColor" strokeWidth={1.6} fill="none">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>
              <div className="mt-5 grid gap-4">
                {active.body.map((para) => (
                  <p key={para.slice(0, 24)} className="text-[0.98rem] leading-[1.85] text-taupe">
                    {para}
                  </p>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Btn href={waLink(`Hello ${BRAND}, I have a question about your ${active.title}.`)}>
                  <WaIcon /> Ask about this
                </Btn>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
