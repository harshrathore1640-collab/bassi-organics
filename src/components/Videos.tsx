import { useRef, useState } from "react";
import { VIDEOS, VideoItem, waLink } from "../lib/content";
import { Section } from "./Sections1";
import { Btn, Reveal, SectionHead, WaIcon } from "./ui";

/* ============================ VIDEOS / FILMS ============================ */
export function Videos() {
  const [activeVideo, setActiveVideo] = useState<VideoItem>(VIDEOS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerContainerRef = useRef<HTMLDivElement | null>(null);

  const handleSelectVideo = (video: VideoItem) => {
    setActiveVideo(video);
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
    // On mobile devices, smoothly scroll to the player so user sees it playing immediately
    if (typeof window !== "undefined" && window.innerWidth < 1024 && playerContainerRef.current) {
      const topOffset = playerContainerRef.current.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
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
        intro="Continuous unedited video captures of our cold-pressed coconut hair oil and flaxseed shampoo. No CGI, no artificial polish — just genuine bottles, unrefined golden texture, and natural sunlight."
      />

      {/* Main Container */}
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        {/* Main Cinema Theater Player */}
        <Reveal className="lg:col-span-8">
          <div ref={playerContainerRef} className="plate plate-light overflow-hidden p-2.5 sm:p-4">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-forest-deep shadow-2xl">
              <video
                ref={videoRef}
                key={activeVideo.id}
                src={activeVideo.src}
                poster={activeVideo.poster}
                controls
                playsInline
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="h-full w-full object-contain"
              >
                Your browser does not support the video tag.
              </video>

              {/* Film Spec Badge Overlay */}
              <div className="pointer-events-none absolute left-2.5 top-2.5 z-10 flex flex-wrap items-center gap-1.5 sm:left-3 sm:top-3 sm:gap-2">
                <span className="border border-cream/20 bg-forest-deep/90 px-2.5 py-1 text-[0.65rem] sm:px-3 sm:py-1.5 sm:text-[0.72rem] u-label-sm text-beige backdrop-blur-md">
                  {activeVideo.spec}
                </span>
                <span className="bg-amber px-2 py-0.5 text-[0.65rem] sm:px-2.5 sm:py-1 sm:text-[0.72rem] u-label-sm text-cream shadow-sm">
                  {activeVideo.badge}
                </span>
              </div>

              {/* Big Center Play Icon overlay when paused */}
              {!isPlaying && (
                <button
                  type="button"
                  onClick={handleTogglePlay}
                  aria-label={`Play ${activeVideo.title}`}
                  className="absolute inset-0 z-10 flex items-center justify-center bg-forest-deep/30 transition-opacity hover:bg-forest-deep/20 active:bg-forest-deep/40 cursor-pointer"
                >
                  <span className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-amber text-cream shadow-2xl transition-transform hover:scale-110 active:scale-95 pl-1">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 sm:h-8 sm:w-8">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </button>
              )}
            </div>

            {/* Active Video Meta */}
            <div className="px-1 pt-3.5 pb-1 sm:px-2 sm:pt-5 sm:pb-2">
              <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:justify-between border-b border-cream/15 pb-3">
                <div className="min-w-0">
                  <p className="u-label-sm text-amber text-[0.7rem] sm:text-xs">
                    Now Playing · {activeVideo.spec}
                  </p>
                  <h3 className="mt-1 font-display text-lg sm:text-xl md:text-2xl font-semibold text-beige leading-snug">
                    {activeVideo.title}
                  </h3>
                </div>
                <span className="u-label-sm text-cream/70 text-[0.75rem] sm:text-[0.8rem] shrink-0">
                  {activeVideo.subtitle}
                </span>
              </div>
              <p className="mt-2.5 text-[0.88rem] sm:text-[0.96rem] leading-[1.7] sm:leading-[1.8] text-cream/80">
                {activeVideo.desc}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Video Playlist / Selector Sidebar */}
        <div className="lg:col-span-4">
          <Reveal delay={0.08}>
            {/* Header */}
            <div className="flex items-center justify-between border-b border-cream/20 pb-3">
              <span className="u-label-sm text-beige">Select Film (5 available)</span>
              <span className="u-label-sm text-cream/60 hidden sm:inline">Click to Play</span>
              <span className="u-label-sm text-amber sm:hidden">Tap to Play</span>
            </div>

            {/* Mobile quick-switch pill tabs */}
            <div className="mt-3.5 flex gap-2 overflow-x-auto pb-2 no-scrollbar lg:hidden">
              {VIDEOS.map((v, i) => {
                const isActive = v.id === activeVideo.id;
                return (
                  <button
                    key={`pill-${v.id}`}
                    type="button"
                    onClick={() => handleSelectVideo(v)}
                    className={`shrink-0 flex items-center gap-1.5 border px-3 py-1.5 text-xs transition-all cursor-pointer ${
                      isActive
                        ? "border-amber bg-amber text-cream font-medium shadow-sm"
                        : "border-cream/20 bg-forest-dark/40 text-cream/80 hover:border-cream/40"
                    }`}
                  >
                    <span className="font-mono text-[0.7rem] opacity-75">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="truncate max-w-[130px]">{v.badge}</span>
                  </button>
                );
              })}
            </div>

            {/* Video Cards Grid / Column */}
            <div className="mt-3.5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:flex lg:flex-col lg:gap-3">
              {VIDEOS.map((v, i) => {
                const isActive = v.id === activeVideo.id;
                return (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => handleSelectVideo(v)}
                    className={`group relative flex w-full items-center gap-3 border p-2 sm:p-2.5 text-left transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "border-amber bg-cream/10 shadow-md ring-1 ring-amber"
                        : "border-cream/15 bg-forest-dark/40 hover:border-cream/40 hover:bg-cream/5"
                    }`}
                  >
                    {/* Thumbnail preview */}
                    <div className="relative aspect-video w-20 sm:w-24 shrink-0 overflow-hidden bg-forest/30">
                      <img
                        src={v.poster}
                        alt={v.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-forest/40 transition-opacity group-hover:bg-forest/20">
                        <span
                          className={`flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full text-[0.65rem] sm:text-xs shadow-md transition-all ${
                            isActive
                              ? "bg-amber text-cream scale-110"
                              : "bg-cream/90 text-forest group-hover:bg-amber group-hover:text-cream"
                          }`}
                        >
                          ▶
                        </span>
                      </div>
                    </div>

                    {/* Film Info */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="u-label-sm text-amber font-mono text-[0.7rem]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="truncate u-label-sm text-beige-deep text-[0.7rem]">
                          {v.badge}
                        </span>
                      </div>
                      <p
                        className={`mt-0.5 truncate text-[0.86rem] sm:text-[0.92rem] font-medium leading-tight transition-colors ${
                          isActive
                            ? "text-beige"
                            : "text-cream/85 group-hover:text-beige"
                        }`}
                      >
                        {v.title}
                      </p>
                      <p className="mt-0.5 truncate text-[0.75rem] sm:text-[0.8rem] text-cream/55">
                        {v.subtitle}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Inquire CTA */}
            <div className="mt-5 sm:mt-6 border border-cream/15 bg-cream/5 p-3.5 sm:p-4 text-center">
              <p className="text-[0.82rem] sm:text-[0.86rem] text-cream/70 leading-relaxed">
                Want to see raw unedited production clips of our latest batch?
              </p>
              <div className="mt-3">
                <Btn
                  href={waLink("Hello Bassi Organics, I would like to see raw video clips of your latest product batches.")}
                  variant="light"
                  className="w-full justify-center text-xs! py-2.5!"
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
