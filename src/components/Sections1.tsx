import type { ReactNode } from "react";
import {
  CONFIRMED_INGREDIENT,
  HOW_TO,
  IMAGES,
  PRODUCTS,
  RESERVED_INGREDIENTS,
  WHY,
  waLink,
} from "../lib/content";
import { Btn, Photo, Reveal, SectionHead, WaIcon } from "./ui";

export function Section({
  id,
  children,
  tone = "cream",
  className = "",
}: {
  id?: string;
  children: ReactNode;
  tone?: "cream" | "paper" | "beige" | "forest";
  className?: string;
}) {
  const bg =
    tone === "beige"
      ? "bg-beige"
      : tone === "paper"
        ? "bg-paper"
        : tone === "forest"
          ? "bg-forest text-cream"
          : "bg-cream";
  return (
    <section
      id={id}
      className={`scroll-mt-24 border-b border-forest/15 ${bg} ${className}`}
    >
      <div className="mx-auto max-w-[1500px] px-5 py-20 sm:px-8 lg:py-28">{children}</div>
    </section>
  );
}

/* ============================ ABOUT ============================ */
export function About() {
  return (
    <Section id="about" tone="cream">
      <SectionHead
        spec="Section 01 — About"
        title={
          <>
            A hair-care house that makes two products,
            <span className="italic text-amber"> and names what goes in them.</span>
          </>
        }
        intro="Bassi Organics was founded by Shiv Pratap Singh on a plain idea: keep the line short enough to explain every bottle from memory, and hand over the ingredient list before the order, not after."
      />

      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-5">
          <div className="plate p-3">
            <Photo
              src={IMAGES.about}
              alt="Flat lay of a botanical oil bottle with natural elements on a warm beige surface"
              className="aspect-[4/5]"
              spec="Plate A"
              caption="The house table — oil, herbs, paper"
            />
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal delay={0.08}>
            <p className="font-display text-[1.35rem] leading-[1.6] text-forest lg:text-[1.55rem]">
              We started from a frustration almost everyone recognises — a shelf of hair-care
              bottles with ingredient lists nobody can read out loud.
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mt-7 grid gap-5 text-[1rem] leading-[1.8] text-taupe sm:grid-cols-2">
              <p>
                So we went the other way. One coconut-oil base. One herbal hair oil built on
                it. One shampoo to wash it out. That is the entire catalogue, and each one is
                prepared in batches small enough that we can tell you which batch your bottle
                came from.
              </p>
              <p>
                Coconut oil — <em className="font-display italic text-forest">Cocus nucifera</em>{" "}
                — is the confirmed foundation of the line. Everything else about a formula is
                published only once the brand signs it off, which is why a few plates further
                down this page are still marked as reserved.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="mt-10 border-t border-forest/25">
              {[
                ["Brand", "Bassi Organics"],
                ["Founder", "Shiv Pratap Singh"],
                ["Products", "Herbal Hair Oil · Herbal Shampoo"],
                ["Base ingredient", "Coconut oil"],
                ["Ordering", "Direct, over WhatsApp"],
                ["Enquiries", "+91 90247 75584"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex flex-wrap items-baseline justify-between gap-3 border-b border-forest/15 py-3.5"
                >
                  <dt className="u-label-sm text-taupe">{k}</dt>
                  <dd className="text-[0.98rem] text-forest">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.26}>
            <p className="mt-7 text-[0.9rem] leading-relaxed text-taupe">
              This site publishes no certifications, no clinical results and no ingredient
              list that has not been confirmed. What we do not know, we say we do not know.
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

/* ============================ PRODUCTS ============================ */
export function Products() {
  return (
    <Section id="products" tone="paper">
      <SectionHead
        spec="Section 02 — Our Products"
        title={
          <>
            Two bottles, mounted and
            <span className="italic text-amber"> catalogued.</span>
          </>
        }
        intro="Prices are deliberately not published here so that you always receive the current one from us directly. Tap a button and the enquiry message is already written for you."
      />

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        {PRODUCTS.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.08}>
            <article className="plate flex h-full flex-col bg-cream p-4 sm:p-5">
              <div className="relative">
                <Photo
                  src={p.image}
                  alt={`${p.name} by Bassi Organics`}
                  className="aspect-[4/5]"
                  imgClassName="hover:scale-[1.03] transition-transform duration-[900ms] ease-out"
                />
                <span className="absolute left-3 top-3 bg-cream/95 px-3 py-1.5 u-label-sm text-amber">
                  {p.spec}
                </span>
              </div>

              <div className="mt-6 flex flex-1 flex-col px-1 pb-1">
                <h3 className="text-[1.9rem] leading-tight text-forest">{p.name}</h3>
                <p className="mt-1.5 font-display text-[0.95rem] italic text-taupe">{p.latin}</p>
                <p className="mt-4 text-[0.98rem] leading-[1.75] text-taupe">{p.blurb}</p>

                <ul className="mt-6 border-t border-forest/20">
                  {p.facts.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 border-b border-forest/12 py-3 text-[0.92rem] text-forest/85"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-amber" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-baseline justify-between border border-dashed border-forest/35 px-4 py-3">
                  <span className="u-label-sm text-taupe">Price</span>
                  <span className="text-[0.95rem] text-forest">Confirmed on WhatsApp</span>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Btn href={waLink(p.enquiry)} className="flex-1">
                    <WaIcon /> Enquire — {p.name}
                  </Btn>
                  <Btn href="#howto" variant="outline" className="flex-1">
                    How to use
                  </Btn>
                </div>
                <p className="u-label-sm mt-4 text-taupe">{p.base}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ============================ INGREDIENTS ============================ */
export function Ingredients() {
  const c = CONFIRMED_INGREDIENT;
  return (
    <Section id="ingredients" tone="beige">
      <SectionHead
        spec="Section 03 — Natural Ingredients"
        tone="beige"
        title={
          <>
            One confirmed base.
            <span className="italic text-amber"> Everything else, reserved until verified.</span>
          </>
        }
        intro="We will not list an herb because it sounds right. The plates below are held open until Bassi Organics confirms each formula — ask on WhatsApp for the sheet of the batch you receive."
      />

      <Reveal>
        <article className="plate grid bg-cream lg:grid-cols-2">
          <div className="relative min-h-[280px]">
            <Photo
              src={c.image}
              alt="Freshly cracked coconut beside a dish of clear golden coconut oil"
              className="h-full min-h-[280px]"
            />
          </div>
          <div className="p-7 sm:p-10">
            <div className="flex items-center gap-3">
              <span className="u-label-sm text-amber">{c.spec}</span>
              <span className="border border-forest/40 px-2.5 py-1 u-label-sm text-forest">
                Confirmed
              </span>
            </div>
            <h3 className="mt-5 text-[2.4rem] leading-none text-forest">{c.common}</h3>
            <p className="mt-2 font-display text-lg italic text-taupe">{c.latin}</p>
            <p className="u-label-sm mt-6 text-amber">{c.role}</p>
            <p className="mt-3 text-[1rem] leading-[1.8] text-taupe">{c.note}</p>

            <dl className="mt-7 border-t border-forest/20">
              {[
                ["Confirmed by brand", "Yes — base ingredient"],
                ["Used in", "Herbal Hair Oil · Herbal Shampoo"],
                ["Full declaration", "Shared on WhatsApp before ordering"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex flex-wrap items-baseline justify-between gap-2 border-b border-forest/15 py-3"
                >
                  <dt className="u-label-sm text-taupe">{k}</dt>
                  <dd className="text-[0.92rem] text-forest">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </article>
      </Reveal>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {RESERVED_INGREDIENTS.map((r, i) => (
          <Reveal key={r.spec} delay={i * 0.07}>
            <article className="plate h-full bg-cream p-4">
              <div className="relative">
                <Photo src={r.image} alt={r.label} className="aspect-[3/2]" imgClassName="grayscale-[0.35] opacity-85" />
                <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(36,59,43,0.16)_0_2px,transparent_2px_9px)]" />
                <span className="absolute bottom-3 left-3 bg-forest px-2.5 py-1 u-label-sm text-cream">
                  Reserved
                </span>
              </div>
              <div className="mt-4">
                <span className="u-label-sm text-amber">{r.spec}</span>
                <h4 className="mt-2 text-[1.2rem] text-forest">{r.label}</h4>
                <p className="mt-2 text-[0.9rem] leading-[1.7] text-taupe">{r.note}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-8 flex flex-col items-start justify-between gap-5 border border-forest/30 px-6 py-6 sm:flex-row sm:items-center">
          <p className="max-w-[62ch] text-[0.98rem] leading-relaxed text-forest">
            Want the complete ingredient declaration for a specific batch? Send us the product
            name and we reply with the list before you commit to anything.
          </p>
          <Btn
            href={waLink(
              "Hello Bassi Organics, please share the complete ingredient list for your Herbal Hair Oil and Herbal Shampoo.",
            )}
            variant="solid"
            className="shrink-0"
          >
            <WaIcon /> Request ingredient list
          </Btn>
        </div>
      </Reveal>
    </Section>
  );
}

/* ============================ WHY US ============================ */
export function WhyUs() {
  return (
    <Section id="why" tone="cream">
      <SectionHead
        spec="Section 04 — Why Choose Us"
        title={
          <>
            Six commitments we can
            <span className="italic text-amber"> actually keep.</span>
          </>
        }
        intro="No certifications we have not earned, no results we cannot show. This is what a Bassi Organics order is, described plainly."
      />

      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <div className="plate p-3">
              <Photo
                src={IMAGES.leafTexture}
                alt="Close-up of a fresh green leaf showing its veins"
                className="aspect-[3/4]"
                spec="Plate B"
                caption="Leaf structure — nothing hidden in the detail"
              />
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-8">
          <ol className="grid gap-px bg-forest/15">
            {WHY.map((w, i) => (
              <li
                key={w.n}
                className={`group bg-cream px-5 py-7 transition-colors duration-500 hover:bg-paper sm:px-7 ${
                  i % 2 === 1 ? "lg:pl-16" : ""
                }`}
              >
                <Reveal delay={i * 0.05}>
                  <div className="flex gap-5 sm:gap-8">
                    <span className="font-display text-[2.4rem] font-semibold leading-none text-amber transition-colors duration-500 group-hover:text-forest sm:text-[3rem]">
                      {w.n}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-[1.3rem] leading-snug text-forest">{w.title}</h3>
                      <p className="mt-2 max-w-[62ch] text-[0.97rem] leading-[1.8] text-taupe">
                        {w.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}

/* ============================ HOW TO USE ============================ */
export function HowTo() {
  return (
    <Section id="howto" tone="paper">
      <SectionHead
        spec="Section 05 — How to Use"
        title={
          <>
            Two procedures,
            <span className="italic text-amber"> written like a label.</span>
          </>
        }
        intro="Follow the oil first, the shampoo second. Times are suggestions, not prescriptions — your hair and your routine decide the rest."
      />

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        {HOW_TO.map((h, i) => (
          <Reveal key={h.spec} delay={i * 0.08}>
            <article className="plate h-full bg-cream p-4 sm:p-5">
              <div className="relative overflow-hidden">
                <Photo src={h.image} alt={h.title} className="aspect-[16/10]" />
              </div>
              <div className="px-1 pt-6">
                <span className="u-label-sm text-amber">{h.spec}</span>
                <h3 className="mt-2 text-[1.65rem] text-forest">{h.title}</h3>
                <ol className="mt-5">
                  {h.steps.map((s, idx) => (
                    <li
                      key={s}
                      className="flex gap-4 border-t border-forest/15 py-3.5 last:border-b"
                    >
                      <span className="u-label-sm mt-1 shrink-0 text-amber">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[0.97rem] leading-[1.7] text-forest/90">{s}</span>
                    </li>
                  ))}
                </ol>
                <p className="mt-5 border-l-2 border-amber bg-paper/70 px-4 py-3 text-[0.86rem] leading-relaxed text-taupe">
                  {h.note}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
