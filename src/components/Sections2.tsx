import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FAQS,
  FOUNDER_PROFILE,
  GALLERY,
  GALLERY_NOTE,
  IMAGES,
  REVIEWS,
  waLink,
} from "../lib/content";
import { Btn, Photo, Reveal, SectionHead, WaIcon } from "./ui";
import { Section } from "./Sections1";

/* ============================ FOUNDER ============================ */
export function Founder() {
  const f = FOUNDER_PROFILE;
  return (
    <Section id="founder" tone="forest" className="border-cream/15">
      <SectionHead
        spec="Section 06 — Meet the Founder"
        tone="light"
        title={
          <>
            Shiv Pratap Singh,
            <span className="italic text-beige"> founder of Bassi Organics.</span>
          </>
        }
        intro="A short introduction written by the founder himself. Until his final text and photograph are supplied, the copy and portrait below are clearly marked placeholders."
      />

      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-5">
          <div className="plate plate-light p-3">
            <div className="relative">
              <Photo
                src={f.portrait}
                alt={f.portraitAlt}
                className="aspect-[4/5]"
                imgClassName="object-top"
              />
              <span className="absolute left-3 top-3 bg-cream px-3 py-1.5 u-label-sm text-forest">
                Placeholder portrait
              </span>
            </div>
            <div className="px-1 pt-4 pb-1">
              <p className="u-label-sm text-beige-deep">Plate F — founder</p>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-cream/70">
                Replace <span className="text-beige">src/assets/founder.jpg</span> with the
                founder's own photograph — the frame and caption will stay as they are.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal delay={0.08}>
            <p className="font-display text-[clamp(1.4rem,2.2vw,2rem)] italic leading-[1.5] text-beige">
              “{f.quote}”
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mt-8 grid gap-5 text-[1rem] leading-[1.85] text-cream/80 sm:grid-cols-2">
              {f.bio.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="mt-9 border-t border-cream/25">
              {f.details.map((d) => (
                <div
                  key={d.k}
                  className="flex flex-wrap items-baseline justify-between gap-3 border-b border-cream/15 py-3.5"
                >
                  <dt className="u-label-sm text-beige-deep">{d.k}</dt>
                  <dd className="text-[0.95rem] text-cream/90">{d.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="mt-7 border border-dashed border-cream/40 px-5 py-4">
              <p className="u-label-sm text-beige">Placeholder content</p>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-cream/70">
                {f.placeholderNote}
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Btn
                href={waLink(
                  "Hello Bassi Organics, I would like to know more about the founder and the brand story.",
                )}
                variant="light"
              >
                <WaIcon /> Ask us directly
              </Btn>
              <Btn
                href="#contact"
                variant="outline"
                className="border-cream/40! text-cream! hover:bg-cream! hover:text-forest!"
              >
                Contact the brand
              </Btn>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

/* ============================ GALLERY + LIGHTBOX ============================ */
const SPANS = [
  "col-span-2 lg:col-span-7 aspect-[16/10]",
  "col-span-1 lg:col-span-5 aspect-[4/5]",
  "col-span-1 lg:col-span-4 aspect-[3/4]",
  "col-span-1 lg:col-span-4 aspect-[3/4]",
  "col-span-1 lg:col-span-4 aspect-[3/4]",
  "col-span-1 lg:col-span-6 aspect-[4/3]",
  "col-span-1 lg:col-span-6 aspect-[4/3]",
  "col-span-2 lg:col-span-12 aspect-[16/7]",
];

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") setIndex((i) => (i === null ? i : (i + 1) % GALLERY.length));
      if (e.key === "ArrowLeft")
        setIndex((i) => (i === null ? i : (i - 1 + GALLERY.length) % GALLERY.length));
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index]);

  return (
    <Section id="gallery" tone="cream">
      <SectionHead
        spec="Section 07 — Product Gallery"
        title={
          <>
            Plates I–VIII,
            <span className="italic text-amber"> the photographic record.</span>
          </>
        }
        intro="Bottle studies, packaging and the raw botanicals behind them. Select any plate to open it full-screen — arrow keys move through the set."
      />

      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-12">
        {GALLERY.map((g, i) => (
          <Reveal key={g.spec} delay={(i % 4) * 0.05} className={SPANS[i]}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Open ${g.caption} in full screen`}
              className="group relative block h-full w-full overflow-hidden border border-forest/25 bg-beige text-left"
            >
              <img
                src={g.src}
                alt={g.caption}
                loading="lazy"
                decoding="async"
                className="plate-img h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
              />
              <span className="absolute inset-0 bg-[linear-gradient(to_top,rgba(22,36,27,0.7),transparent_55%)] opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
              <span className="absolute bottom-3 left-3 right-3 flex items-baseline gap-3">
                <span className="u-label-sm text-beige">{g.spec}</span>
                <span className="u-label-sm text-cream/85 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {g.caption}
                </span>
              </span>
              <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center border border-cream/50 text-cream opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <svg viewBox="0 0 24 24" className="h-4 w-4" stroke="currentColor" strokeWidth={1.6} fill="none">
                  <path d="M4 9V4h5M20 15v5h-5M15 4h5v5M9 20H4v-5" />
                </svg>
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-6 max-w-[70ch] text-[0.88rem] leading-relaxed text-taupe">{GALLERY_NOTE}</p>
      </Reveal>

      <AnimatePresence>
        {index !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="fixed inset-0 z-[80] flex flex-col bg-forest-deep/97 p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={GALLERY[index].caption}
            onClick={() => setIndex(null)}
          >
            <div className="flex items-center justify-between gap-4 border-b border-cream/20 pb-4">
              <div className="flex items-baseline gap-4">
                <span className="u-label-sm text-amber">{GALLERY[index].spec}</span>
                <span className="u-label-sm text-cream/80">{GALLERY[index].caption}</span>
              </div>
              <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={() => setIndex((i) => (i! - 1 + GALLERY.length) % GALLERY.length)}
                  className="flex h-10 w-10 items-center justify-center border border-cream/35 text-cream transition-colors hover:bg-cream hover:text-forest"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" stroke="currentColor" strokeWidth={1.6} fill="none">
                    <path d="M15 5l-7 7 7 7" />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  onClick={() => setIndex((i) => (i! + 1) % GALLERY.length)}
                  className="flex h-10 w-10 items-center justify-center border border-cream/35 text-cream transition-colors hover:bg-cream hover:text-forest"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" stroke="currentColor" strokeWidth={1.6} fill="none">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label="Close gallery"
                  onClick={() => setIndex(null)}
                  className="flex h-10 w-10 items-center justify-center border border-cream/35 text-cream transition-colors hover:bg-cream hover:text-forest"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" stroke="currentColor" strokeWidth={1.6} fill="none">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>
            </div>
            <motion.img
              key={GALLERY[index].src}
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              src={GALLERY[index].src}
              alt={GALLERY[index].caption}
              onClick={(e) => e.stopPropagation()}
              className="mx-auto min-h-0 flex-1 object-contain py-4"
            />
            <p className="u-label-sm text-center text-cream/55">
              {index + 1} / {GALLERY.length} — press esc to close
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}

/* ============================ REVIEWS ============================ */
export function Reviews() {
  return (
    <Section id="reviews" tone="beige">
      <SectionHead
        spec="Section 08 — Customer Reviews"
        tone="beige"
        title={
          <>
            Review slots,
            <span className="italic text-amber"> held open until they are real.</span>
          </>
        }
        intro="We will not publish a review we cannot attribute to a real customer. These three slots are reserved and clearly marked until verified feedback is collected with permission."
      />

      <Reveal>
        <div className="relative mb-8 overflow-hidden border border-forest/30">
          <Photo
            src={IMAGES.herbalFlatlay}
            alt="Flat lay of herbal preparations and botanical plants on a warm background"
            className="aspect-[16/7] min-h-[190px] sm:aspect-[16/5]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(22,36,27,0.86),rgba(22,36,27,0.35)_70%,transparent)]" />
          <div className="absolute inset-0 flex flex-col justify-center gap-3 p-5 sm:p-8">
            <span className="w-fit bg-amber px-2.5 py-1 u-label-sm text-cream">Notice</span>
            <p className="max-w-[46ch] text-[0.95rem] leading-relaxed text-cream sm:text-[1.02rem]">
              Placeholder testimonials — no customer review is published on this page yet, and
              none will be until it has been written by a real customer.
            </p>
          </div>
        </div>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-3">
        {REVIEWS.map((r, i) => (
          <Reveal key={r.meta} delay={i * 0.07}>
            <figure className="plate flex h-full flex-col bg-cream p-6">
              <span className="font-display text-[3.5rem] leading-[0.6] text-beige-deep">“</span>
              <blockquote className="mt-5 flex-1 text-[1rem] leading-[1.8] text-taupe">
                {r.text}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4 border-t border-forest/20 pt-5">
                <span className="flex h-11 w-11 items-center justify-center border border-forest/30 font-display text-lg text-forest/60">
                  {r.initials}
                </span>
                <span>
                  <span className="block text-[0.95rem] text-forest">{r.name}</span>
                  <span className="u-label-sm mt-1 block text-amber">{r.meta}</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-8 max-w-[74ch] text-[0.9rem] leading-relaxed text-taupe">
          Have you used our products? Send your feedback on WhatsApp with the batch details —
          published reviews are shown to you for approval before they go live, with your name
          exactly as you want it to appear.
        </p>
      </Reveal>
    </Section>
  );
}

/* ============================ FAQ ============================ */
export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" tone="paper">
      <SectionHead
        spec="Section 09 — Frequently Asked"
        title={
          <>
            Everything, before
            <span className="italic text-amber"> you have to ask.</span>
          </>
        }
        intro="Ingredients, usage, prices, ordering and delivery — answered plainly. Anything still unclear, the WhatsApp line at the bottom of every page is open."
      />

      <div className="grid gap-8 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <div className="plate h-full bg-cream p-6">
            <Photo
              src={IMAGES.coconutMarket}
              alt="Fresh coconuts split open, showing their white flesh"
              className="mb-6 aspect-[4/3] -mx-1"
              spec="Plate G"
              caption="Before the bottle"
            />
            <span className="u-label-sm text-amber">Still unsure?</span>
            <p className="mt-4 text-[1rem] leading-[1.8] text-taupe">
              Questions about a specific batch, a delivery pin code or a wholesale quantity are
              best answered by a person. We reply on WhatsApp ourselves.
            </p>
            <Btn
              href={waLink("Hello Bassi Organics, I have a question about your products.")}
              variant="solid"
              className="mt-6 w-full"
            >
              <WaIcon /> Ask on WhatsApp
            </Btn>
            <p className="u-label-sm mt-5 text-taupe">Mon–Sat · replies by the founder's team</p>
          </div>
        </Reveal>

        <div className="lg:col-span-8">
          <ul className="border-t border-forest/25">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q} className="border-b border-forest/20">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-button-${i}`}
                      className="flex w-full items-start justify-between gap-6 py-5 text-left transition-colors hover:text-amber"
                    >
                      <span className="flex gap-4">
                        <span className="u-label-sm mt-1.5 text-amber">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display text-[1.15rem] leading-snug text-forest sm:text-[1.3rem]">
                          {f.q}
                        </span>
                      </span>
                      <span
                        className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center border border-forest/35 transition-transform duration-500 ${
                          isOpen ? "rotate-45 bg-forest text-cream" : ""
                        }`}
                        aria-hidden="true"
                      >
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" stroke="currentColor" strokeWidth={1.8} fill="none">
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        role="region"
                        aria-labelledby={`faq-button-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-[70ch] pb-6 pl-0 text-[0.98rem] leading-[1.85] text-taupe sm:pl-11">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
}
