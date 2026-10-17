import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BRAND, IMAGES, NAV, PHONE_DISPLAY, PHONE_TEL, waLink } from "../lib/content";
import { Btn, Logo, Mark, PhoneIcon, WaIcon } from "./ui";

export function SideRail() {
  return (
    <div className="fixed left-0 top-0 z-50 hidden h-screen w-16 flex-col items-center justify-between border-r border-forest/20 bg-cream py-6 lg:flex">
      <a href="#home" aria-label="Bassi Organics — top of page" className="transition-transform duration-300 hover:scale-110">
        <Logo className="h-9 w-9" />
      </a>
      <div className="vertical-rl u-label-sm rotate-180 text-taupe">
        Bassi Organics — Organic Hair Care
      </div>
      <div className="u-label-sm text-beige-deep">Est.</div>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      let current = "";
      for (const item of NAV) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= 140) current = item.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 lg:left-16 ${
          scrolled ? "border-forest/20 bg-cream/95 backdrop-blur-sm" : "border-forest/10 bg-cream"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1500px] items-center justify-between gap-6 px-5 sm:px-8 lg:h-20">
          <a href="#home" className="group flex items-center gap-3">
            <span className="transition-transform duration-500 group-hover:scale-105">
              <Logo className="h-9 w-9 sm:h-10 sm:w-10" />
            </span>
            <span className="leading-none">
              <span className="block font-display text-[1.05rem] font-semibold tracking-[0.14em] uppercase text-forest">
                {BRAND}
              </span>
              <span className="u-label-sm mt-1 hidden text-taupe sm:block">
                Coconut-Oil-Based Hair Care
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary">
            {NAV.filter((item) =>
              ["about", "products", "ingredients", "why", "videos", "howto", "gallery", "faq", "order", "contact"].includes(
                item.id,
              ),
            ).map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`u-label-sm link-underline transition-colors ${
                  active === item.id ? "text-amber" : "text-forest/75 hover:text-forest"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              className="hidden items-center gap-2 text-forest/80 transition-colors hover:text-forest md:flex"
            >
              <PhoneIcon className="h-4 w-4" />
              <span className="u-label-sm">{PHONE_DISPLAY}</span>
            </a>
            <Btn
              href={waLink("Hello Bassi Organics, I would like to know more about your organic hair products.")}
              variant="solid"
              className="hidden px-5! py-3! sm:inline-flex"
            >
              <WaIcon /> WhatsApp
            </Btn>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center border border-forest/30 text-forest transition-colors hover:bg-forest hover:text-cream xl:hidden"
            >
              <span className="sr-only">Menu</span>
              <svg viewBox="0 0 24 24" className="h-5 w-5" stroke="currentColor" strokeWidth={1.6} fill="none">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[70] bg-forest text-cream"
          >
            <div className="flex h-16 items-center justify-between border-b border-cream/20 px-5 sm:px-8 lg:h-20">
              <div className="flex items-center gap-3">
                <Logo className="h-8 w-8" />
                <span className="u-label text-beige">{BRAND}</span>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center border border-cream/35 transition-colors hover:bg-cream hover:text-forest"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" stroke="currentColor" strokeWidth={1.6} fill="none">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
            <nav className="h-[calc(100%-4rem)] overflow-y-auto px-5 py-8 sm:px-8" aria-label="Mobile">
              <ul className="grid gap-1">
                {NAV.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="border-b border-cream/15"
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline justify-between py-4 font-display text-3xl tracking-tight text-cream transition-colors hover:text-beige"
                    >
                      {item.label}
                      <span className="u-label-sm text-beige-deep">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3">
                <Btn
                  href={waLink("Hello Bassi Organics, I would like to place an order.")}
                  variant="light"
                >
                  <WaIcon /> Order on WhatsApp
                </Btn>
                <Btn href={`tel:${PHONE_TEL}`} variant="outline" className="border-cream/40! text-cream!">
                  <PhoneIcon /> {PHONE_DISPLAY}
                </Btn>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative border-b border-forest/20">
      <div className="grid lg:min-h-[calc(100vh-5rem)] lg:grid-cols-[44%_56%]">
        {/* image plate — right-hand page of the catalogue */}
        <div className="relative order-1 h-[46vh] min-h-[300px] border-b border-forest/25 lg:order-2 lg:h-auto lg:border-b-0 lg:border-l">
          <img
            src={IMAGES.hero}
            alt="Coconut, fresh botanical leaves and a bottle of golden organic hair oil arranged on cream paper"
            className="plate-img absolute inset-0 h-full w-full object-cover object-center"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* label panel — left-hand page */}
        <div className="order-2 flex items-center bg-cream px-5 py-12 sm:px-8 lg:order-1 lg:py-14">
          <div className="plate w-full px-6 py-9 sm:px-10 sm:py-12">
            <div className="flex items-center gap-4">
              <Logo className="h-10 w-10 sm:h-12 sm:w-12" />
              <span className="h-px flex-1 bg-forest/25" />
            </div>

            <p className="u-label mt-8 text-taupe">Organic hair care · coconut oil base</p>

            <h1 className="mt-5 text-[clamp(2.35rem,4.4vw,4.3rem)] font-semibold leading-[0.98] tracking-[-0.02em] text-forest">
              Hair care rooted in
              <span className="italic text-amber"> coconut oil </span>
              and whole herbs.
            </h1>

            <p className="mt-6 max-w-[46ch] text-[1.02rem] leading-[1.75] text-taupe">
              Bassi Organics makes two things, carefully — a coconut-oil-based organic hair oil
              and an organic shampoo. Short ingredient lists, small batches, and the full
              declaration in your hands before you order.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Btn href="#products">Shop Products</Btn>
              <Btn
                href={waLink(
                  "Hello Bassi Organics, I saw your website and would like to order. Please share available products, pack sizes and price.",
                )}
                variant="outline"
              >
                <WaIcon /> WhatsApp Order
              </Btn>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-forest/20 pt-6">
              {[
                ["02", "Products only"],
                ["01", "Base ingredient"],
                ["Direct", "Ordered from us"],
              ].map(([k, v]) => (
                <div key={v}>
                  <dt className="font-display text-2xl font-semibold text-forest">{k}</dt>
                  <dd className="u-label-sm mt-1 text-taupe">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <a
        href={waLink("Hello Bassi Organics, I would like to place an order.")}
        target="_blank"
        rel="noreferrer noopener"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-forest-deep bg-forest text-cream shadow-[0_10px_30px_rgba(22,36,27,0.28)] transition-transform duration-300 hover:scale-105 hover:bg-forest-deep"
        aria-label="Order on WhatsApp"
      >
        <WaIcon className="h-6 w-6" />
      </a>
    </section>
  );
}
