import { useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BRAND, IMAGES } from "../lib/content";
import { cn } from "../utils/cn";

/* ---------------- brand logo badge ---------------- */
export function Logo({
  className = "h-8 w-8",
  alt = BRAND,
}: {
  className?: string;
  alt?: string;
}) {
  return (
    <img
      src={IMAGES.logo}
      alt={alt}
      className={cn("rounded-full object-contain shrink-0", className)}
      loading="eager"
      decoding="async"
    />
  );
}

/* ---------------- brand mark: drawn, not generated ---------------- */
export function Mark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M24 45C9.8 34.4 6.6 19.6 24 3c17.4 16.6 14.2 31.4 0 42Z" />
      <path d="M24 45V9" />
      <path d="M24 19.5 33 13M24 19.5 15 13M24 30l9.5-6.5M24 30l-9.5-6.5" />
    </svg>
  );
}

/* ---------------- scroll reveal: plates settling into place ---------------- */
export function Reveal({
  children,
  delay = 0,
  y = 26,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- image with a deliberate fallback surface ---------------- */
export function Photo({
  src,
  alt,
  className = "",
  imgClassName = "",
  caption,
  spec,
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  caption?: string;
  spec?: string;
  eager?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <figure className={`relative ${className}`}>
      <div className="relative h-full w-full overflow-hidden bg-beige">
        {failed ? (
          <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(140deg,#E8D8B7_0%,#F7F1E4_48%,#C9B893_100%)] text-forest/45">
            <Mark className="h-16 w-16" />
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            loading={eager ? "eager" : "lazy"}
            decoding="async"
            onError={() => setFailed(true)}
            className={`plate-img h-full w-full object-cover ${imgClassName}`}
          />
        )}
      </div>
      {(caption || spec) && (
        <figcaption className="mt-3 flex items-baseline gap-3 text-taupe">
          {spec && <span className="u-label-sm shrink-0 text-amber">{spec}</span>}
          {caption && <span className="u-label-sm">{caption}</span>}
        </figcaption>
      )}
    </figure>
  );
}

/* ---------------- section header: hanging catalogue caption ---------------- */
export function SectionHead({
  spec,
  title,
  intro,
  tone = "dark",
  id,
}: {
  spec: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "dark" | "beige" | "light";
  id?: string;
}) {
  const isLight = tone === "light";
  const isBeige = tone === "beige";
  const specColor = isLight ? "text-beige" : isBeige ? "text-forest" : "text-amber";
  const ruleColor = isLight ? "border-cream/25" : "border-forest/20";
  const brandColor = isLight ? "text-cream/55" : isBeige ? "text-forest/70" : "text-taupe";
  return (
    <Reveal className="mb-10 lg:mb-14">
      <div className={`flex items-center gap-4 border-b pb-4 ${ruleColor}`}>
        <span className={`u-label-sm ${specColor}`}>{spec}</span>
        <span className={`h-px flex-1 ${isLight ? "bg-cream/25" : "bg-forest/20"}`} />
        <span className={`u-label-sm ${brandColor}`}>Bassi Organics</span>
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-12 lg:gap-10">
        <h2
          id={id}
          className={`lg:col-span-7 text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.02] tracking-[-0.015em] ${
            isLight ? "text-cream" : "text-forest"
          }`}
        >
          {title}
        </h2>
        {intro && (
          <p
            className={`lg:col-span-5 lg:pt-2 text-[0.98rem] leading-[1.75] ${
              isLight ? "text-beige/85" : "text-taupe"
            }`}
          >
            {intro}
          </p>
        )}
      </div>
    </Reveal>
  );
}

/* ---------------- buttons: square, letterpress ---------------- */
const btnBase =
  "inline-flex items-center justify-center gap-2 px-6 py-3.5 u-label transition-all duration-300 border";

export function Btn({
  href,
  children,
  variant = "solid",
  className = "",
  onClick,
  type,
  disabled,
}: {
  href?: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "light";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  const styles =
    variant === "solid"
      ? "border-forest bg-forest text-cream hover:bg-forest-deep hover:border-forest-deep"
      : variant === "light"
        ? "border-cream bg-cream text-forest hover:bg-beige hover:border-beige"
        : "border-forest/35 bg-transparent text-forest hover:border-forest hover:bg-forest hover:text-cream";
  const cls = `${btnBase} ${styles} ${disabled ? "pointer-events-none opacity-50" : ""} ${className}`;
  if (href) {
    return (
      <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer noopener" : undefined}>
        {children}
      </a>
    );
  }
  return (
    <button type={type ?? "button"} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  );
}

/* ---------------- WhatsApp glyph ---------------- */
export function WaIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.24h.01c5.5 0 9.96-4.46 9.96-9.96A9.9 9.9 0 0 0 19.1 4.9 9.9 9.9 0 0 0 12.04 2Zm0 18.17h-.01a8.27 8.27 0 0 1-4.21-1.15l-.3-.18-3.09.81.83-3.01-.2-.31a8.24 8.24 0 0 1-1.26-4.38c0-4.56 3.71-8.27 8.28-8.27 2.21 0 4.28.86 5.84 2.42a8.2 8.2 0 0 1 2.42 5.85c0 4.56-3.71 8.22-8.3 8.22Zm4.54-6.16c-.25-.13-1.47-.72-1.7-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.78.97-.15.16-.29.18-.53.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.41.09-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.13.17 1.74 2.65 4.21 3.72.59.25 1.05.4 1.4.52.59.18 1.13.16 1.55.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29Z" />
    </svg>
  );
}

export function PhoneIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden="true">
      <path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5L16 12l4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3.5 5.2 2 2 0 0 1 5.5 3h1Z" />
    </svg>
  );
}
