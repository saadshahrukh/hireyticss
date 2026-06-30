"use client";

import { Play, Pause } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, SectionHeader } from "@/components/ui/Motion";

const FRAMES = [
  {
    title: "Hiring Dashboard",
    metric: "142 Hires",
    sub: "Velocity up 30% this quarter",
    bars: [40, 65, 45, 80, 55, 90, 70],
  },
  {
    title: "AI Interview Score",
    metric: "8.4 / 10",
    sub: "Technical · Communication · Problem-solving",
    bars: [85, 78, 92, 88, 84],
  },
  {
    title: "Onboarding Progress",
    metric: "Step 4 of 7",
    sub: "Documents collected · Portal active",
    bars: [100, 100, 100, 57, 0, 0, 0],
  },
];

function DemoPreview({ paused }: { paused: boolean }) {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setFrame((f) => (f + 1) % FRAMES.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [paused]);

  const current = FRAMES[frame];

  return (
    <div className="absolute inset-0 flex items-center justify-center p-6 md:p-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={frame}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md md:p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-300">
              {current.title}
            </span>
            <div className="flex gap-1.5">
              {FRAMES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setFrame(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === frame ? "w-6 bg-blue-400" : "w-1.5 bg-white/25 hover:bg-white/40"
                  }`}
                  aria-label={`Frame ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <p className="text-3xl font-bold text-white md:text-4xl">{current.metric}</p>
          <p className="mt-2 text-sm text-slate-400">{current.sub}</p>

          <div className="mt-6 flex items-end gap-1.5 h-16">
            {current.bars.map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-t-md brand-gradient opacity-80"
                initial={{ height: 0 }}
                animate={{ height: `${Math.max(h, 4)}%` }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="demo" className="section-block">
      <div className="section-container">
        <SectionHeader
          eyebrow="See It Live"
          title="Your entire workforce lifecycle — in one view"
          description="From the first interview to the quarterly review, see how Hireytics keeps every stage connected and measurable."
        />

        <FadeIn>
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute -inset-6 rounded-3xl brand-gradient-subtle blur-2xl opacity-60" />

            <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 shadow-2xl shadow-slate-300/30">
              <div className="relative aspect-video bg-gradient-to-br from-slate-900 via-slate-900 to-[#1a1040]">
                <div
                  className="absolute inset-0 opacity-[0.07]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #fff 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />

                {playing ? (
                  <DemoPreview paused={false} />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <motion.button
                      type="button"
                      onClick={() => setPlaying(true)}
                      className="group relative flex h-20 w-20 items-center justify-center"
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="Play demo"
                    >
                      <span className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping" />
                      <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-xl shadow-blue-500/20">
                        <Play className="h-6 w-6 fill-blue-600 text-blue-600 ml-0.5" />
                      </span>
                    </motion.button>
                    <p className="mt-5 text-sm font-medium text-slate-400">
                      Interactive product preview
                    </p>
                  </div>
                )}

                {playing && (
                  <button
                    type="button"
                    onClick={() => setPlaying(false)}
                    className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20"
                  >
                    <Pause className="h-3.5 w-3.5" />
                    Pause
                  </button>
                )}

                <div className="absolute bottom-5 left-5 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg brand-gradient">
                    <span className="text-xs font-bold text-white">H</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Hireytics Platform
                    </p>
                    <p className="text-xs text-slate-500">
                      Hire · Onboard · Manage
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
