import { useRef, useState } from "react";
import { VIDEOS, VideoItem, waLink } from "../lib/content";
import { Section } from "./Sections1";
import { Btn, Reveal, SectionHead, WaIcon } from "./ui";

/* ============================ VIDEOS / FILMS ============================ */
export function Videos() {
  const [activeVideo, setActiveVideo] = useState<VideoItem>(VIDEOS[0]);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleSelectVideo = (video: VideoItem) => {
    setActiveVideo(video);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback
      });
    }
  };

  return (
    <Section id="videos" tone="forest" className="border-cream/15">
      <SectionHead
        spec="Section 05 — Product Films & Motion Studies"
        tone="light"
        title={
          <>
            Watch purity
            <span className="italic text-beige"> in motion.</span>
          </>
        }
        intro="Short continuous video captures of our cold-pressed coconut hair oil and flaxseed shampoo. No artificial polish, no CGI — just genuine bottles, unrefined golden texture, and natural sunlight."
      />

      {/* Main Cinema Theater Player */}
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-8">
          <div className="plate plate-light overflow-hidden p-3 sm:p-4">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-forest-deep shadow-2xl">
              <video
                ref={videoRef}
                key={activeVideo.id}
                src={activeVideo.src}
                poster={activeVideo.poster}
                controls
                playsInline
                preload="metadata"
                className="h-full w-full object-contain"
              >
                Your browser does not support the video tag.
              </video>

              {/* Film Spec Pill */}
              <div className="pointer-events-none absolute left-3 top-3 flex flex-wrap items-center gap-2">
                <span className="bg-forest/90 px-3 py-1.5 u-label-sm text-beige backdrop-blur-md">
                  {activeVideo.spec}
                </span>
                <span className="bg-amber px-2.5 py-1 u-label-sm text-cream shadow-sm">
                  {activeVideo.badge}
                </span>
              </div>
            </div>

            {/* Active Video Meta */}
            <div className="px-2 pt-5 pb-2">
              <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-cream/15 pb-3">
                <h3 className="font-display text-xl font-semibold text-beige sm:text-2xl">
                  {activeVideo.title}
                </h3>
                <span className="u-label-sm text-cream/70">
                  {activeVideo.subtitle}
                </span>
              </div>
              <p className="mt-3 max-w-[70ch] text-[0.96rem] leading-[1.8] text-cream/80">
                {activeVideo.desc}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Video Playlist / Selector Sidebar */}
        <div className="lg:col-span-4">
          <Reveal delay={0.08}>
            <div className="flex items-center justify-between border-b border-cream/20 pb-3">
              <span className="u-label-sm text-beige">All 5 Films</span>
              <span className="u-label-sm text-cream/60">Click to Play</span>
            </div>

            <div className="mt-4 flex flex-col gap-3">
              {VIDEOS.map((v, i) => {
                const isActive = v.id === activeVideo.id;
                return (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => handleSelectVideo(v)}
                    className={`group relative flex w-full items-center gap-3.5 border p-2.5 text-left transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "border-amber bg-cream/10 shadow-md ring-1 ring-amber"
                        : "border-cream/15 bg-forest-dark/40 hover:border-cream/40 hover:bg-cream/5"
                    }`}
                  >
                    {/* Thumbnail preview */}
                    <div className="relative aspect-video w-24 shrink-0 overflow-hidden bg-forest/30 sm:w-28">
                      <img
                        src={v.poster}
                        alt={v.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-forest/40 transition-opacity group-hover:bg-forest/20">
                        <span
                          className={`flex h-7 w-7 items-center justify-center rounded-full text-xs shadow-md transition-all ${
                            isActive
                              ? "bg-amber text-cream scale-110"
                              : "bg-cream/90 text-forest group-hover:bg-amber group-hover:text-cream"
                          }`}
                        >
                          ▶
                        </span>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="u-label-sm text-amber font-mono text-[0.75rem]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="truncate u-label-sm text-beige-deep text-[0.75rem]">
                          {v.badge}
                        </span>
                      </div>
                      <p
                        className={`mt-1 truncate text-[0.92rem] font-medium leading-tight transition-colors ${
                          isActive
                            ? "text-beige"
                            : "text-cream/85 group-hover:text-beige"
                        }`}
                      >
                        {v.title}
                      </p>
                      <p className="mt-0.5 truncate text-[0.8rem] text-cream/55">
                        {v.subtitle}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Inquire CTA */}
            <div className="mt-6 border border-cream/15 bg-cream/5 p-4 text-center">
              <p className="text-[0.85rem] text-cream/70">
                Want to see raw unedited production clips of our latest batch?
              </p>
              <div className="mt-3">
                <Btn
                  href={waLink("Hello Bassi Organics, I would like to see raw video clips of your latest product batches.")}
                  variant="light"
                  className="w-full text-xs! py-2.5!"
                >
                  <WaIcon /> Request Video on WhatsApp
                </Btn>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

