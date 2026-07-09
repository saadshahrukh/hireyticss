'use client';

import {
  ArrowRight,
  TrendingUp,
  Users,
  Brain,
  CheckCircle2,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const scenes = [
  "dashboard",
  "createJob",
  "screening",
  "interview",
  "report",
  "pipeline",
] as const;
type Scene = (typeof scenes)[number];

export default function Hero() {
  return (
    <section className="relative overflow-hidden hero-bg">
      <div className="pointer-events-none absolute inset-0 hero-grid" />
      <main className="relative mx-auto max-w-[1360px] px-6 pt-24 pb-10 lg:px-10 lg:pt-28">
        <div className="w-auto">
          <HeroCopy />
        </div>
      </main>
      <div className="relative">
        <hr  className="hl"  />
        <div className="mx-auto w-full max-w-[1360px]  py-10 px-6 pb-20 lg:px-10">
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
            <p className="text-[11.5px] uppercase tracking-[0.22em] text-muted-foreground">
              Live product walkthrough
            </p>
            <h2 className="mt-3 text-[32px] font-semibold tracking-tight text-foreground sm:text-[38px] lg:text-[44px]">
              See the hiring workflow move like a mobile product demo.
            </h2>
            <p className="mt-4 max-w-2xl text-[15.5px] leading-relaxed text-muted-foreground">
              Watch AI-sourced roles, candidate summaries and offer staging animate in a single full-width preview.
            </p>
          </div>
          <div className="mt-10 overflow-hidden rounded-[36px] border border-white/10 bg-[#0A0F19]/95 p-4 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.45)] backdrop-blur-xl">
            <ProductStage />
          </div>
        </div>
      </div>
    </section>
  );
}


function HeroCopy() {
  return (
    <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center justify-center">
      <span className="chip w-fit">
        <span className="dot-live" /> AI TALENT OPS PLATFORM
      </span>
      <h1 className="mt-6 text-[44px] font-semibold leading-[1.02] tracking-tight sm:text-[56px] lg:text-[64px]">
            Turn 20 Hours of Hiring Into 20 Minutes.      </h1>
      <p className="mt-5 max-w-[640px] text-[15.5px] leading-relaxed text-muted-foreground">
Transform the entire talent journey with Hireytics that automates screening, AI-led Realtime interviews, analytics, hiring, negotiations, onboarding, and workforce operations—helping your team save time, reduce complexity, and focus on people instead of processes.      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button className="group inline-flex items-center gap-2 rounded-lg bg-[color:var(--primary)] px-5 py-3 text-[14px] font-semibold text-[color:var(--primary-foreground)] shadow-[0_10px_40px_-10px_var(--ring)] transition hover:brightness-110">
          Start onboarding
          <span className="transition group-hover:translate-x-0.5" aria-hidden>→</span>
        </button>
        <button className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-[14px] font-medium text-foreground/90 transition hover:bg-surface-2">
          <PlayIcon /> Watch 90s tour
        </button>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Stat label="Faster hires" value="12×" />
        <Stat label="AI productivity" value="92%" />
        <Stat label="Hours saved / wk" value="40+" />
      </div>
       {/* <LogoRow /> */}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[22px] font-semibold tracking-tight">{value}</div>
      <div className="mt-1 text-[11.5px] uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

function LogoRow() {
  const items = ["Stripe", "Linear", "Notion", "Vercel", "OpenAI", "Ramp"];
  return (
    <div className="mt-20 flex flex-col items-center gap-5">
      <p className="text-[11.5px] uppercase tracking-[0.2em] text-muted-foreground">
        Trusted by talent teams shipping at scale
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-70">
        {items.map((n) => (
          <span key={n} className="text-[15px] font-semibold tracking-tight text-foreground/70">
            {n}
          </span>
        ))}
      </div>
    </div>
  );
}

function PlayIcon() {
  return (
    <span className="grid h-5 w-5 place-items-center rounded-full bg-foreground/10">
      <svg viewBox="0 0 10 10" className="h-2.5 w-2.5 fill-current">
        <path d="M2 1v8l7-4z" />
      </svg>
    </span>
  );
}

function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <div className="relative grid place-items-center rounded-md bg-[#151A26] overflow-hidden" style={{ height: size, width: size }}>
      <img src="/logo-icon.png" alt="Hireytics logo" className="h-full w-full object-contain" />
    </div>
  );
}

function TypingText({ text, speed = 40, className, play = true }: { text: string; speed?: number; className?: string; play?: boolean }) {
  const [out, setOut] = useState("");
  useEffect(() => {
    let i = 0;
    let id: number | null = null;
    setOut("");
    if (play) {
      id = window.setInterval(() => {
        i += 1;
        setOut(text.slice(0, i));
        if (i >= text.length && id) window.clearInterval(id);
      }, speed);
    }
    return () => {
      if (id) window.clearInterval(id);
    };
  }, [text, speed, play]);
  return <span className={className}>{out}<span className="caret" /></span>;
}

/* ------------------------------ Product stage ------------------------------ */

function ProductStage() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [activeScene, setActiveScene] = useState<Scene>("dashboard");
  const sceneRefs = useRef<Record<Scene, HTMLDivElement | null>>({
    dashboard: null,
    createJob: null,
    screening: null,
    interview: null,
    report: null,
    pipeline: null,
  });
  const setRef = (name: Scene) => (el: HTMLDivElement | null) => {
    sceneRefs.current[name] = el;
  };

  const productStageStyle = {
    background: "#0A0F19",
  } as React.CSSProperties;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Subtle cinematic float on the whole window
      gsap.to(".ag-window", {
        y: -8,
        duration: 6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
      gsap.fromTo(
        ".ag-window",
        { opacity: 0, y: 40, scale: 0.985 },
        { opacity: 1, y: 0, scale: 1, duration: 1.1, ease: "power3.out" }
      );

      const tl = gsap.timeline({ repeat: -1, defaults: { ease: "power2.inOut" } });

      const showScene = (name: Scene, dur = 2.1) => {
        const el = sceneRefs.current[name];
        if (!el) return;
        tl.call(() => setActiveScene(name));
        // entrance
        tl.fromTo(
          el,
          { opacity: 0, y: 22, filter: "blur(8px)", scale: 0.985 },
          { opacity: 1, y: 0, filter: "blur(0px)", scale: 1, duration: 0.75 }
        );

        // add a subtle zoom pulse for the report scene to emphasize generation
        if (name === "report") {
          const target = (el.querySelector?.(".report-zoom") as HTMLElement) || (el as any);
          try {
            tl.fromTo(target, { scale: 0.98 }, { scale: 1.02, duration: 0.7, ease: "power1.out" }, "<");
            tl.to(target, { scale: 1, duration: 0.25 }, ">");
          } catch (e) {
            /* ignore if selector not found */
          }
        }

        // hold and exit
        tl.to(el, { duration: dur }, ">");
        tl.to(el, { opacity: 0, y: -14, filter: "blur(6px)", duration: 0.55 });
      };

      showScene("dashboard", 2.0);
      showScene("createJob", 2.1);
      showScene("screening", 2.3);
      showScene("interview", 2.3);
      showScene("report", 3.8);
      showScene("pipeline", 2.0);
    }, stageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={stageRef} className="relative z-10">
      <div className="ag-window dark relative float text-foreground" style={productStageStyle}>

        {/* Ambient glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-10 -z-10 rounded-[36px] opacity-70"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 40%, rgba(126,232,255,0.18), transparent 70%), radial-gradient(50% 40% at 80% 80%, rgba(255,122,198,0.18), transparent 70%)",
          }}
        />
        <div
          className="glass overflow-hidden rounded-2xl"
          style={{
            background: "rgba(10, 15, 25, 0.92)",
            borderColor: "rgba(148, 163, 184, 0.16)",
            boxShadow: "0 40px 60px -20px rgba(0,0,0,0.35)",
          }}
        >
          <WindowChrome />
          <div className="grid grid-cols-[178px_minmax(0,1fr)]">
            <Sidebar activeScene={activeScene} />
            <div className="relative h-[520px] overflow-hidden border-l border-border bg-[color:var(--background)]/40">
              <div className="scene" ref={setRef("dashboard")}>
                <DashboardScene />
              </div>
              <div className="scene" ref={setRef("createJob")}>
                <CreateJobScene />
              </div>
              <div className="scene" ref={setRef("screening")}>
                <ScreeningScene />
              </div>
              <div className="scene" ref={setRef("interview")}>
                <InterviewScene />
              </div>
              <div className="scene" ref={setRef("report")}>
                <ReportScene active={activeScene === "report"} />
              </div>
              <div className="scene" ref={setRef("pipeline")}>
                <PipelineScene />
              </div>
            </div>
          </div>
        </div>

        {/* Floating side card — mimics real product notification */}
        <FloatingCard />
      </div>
    </div>
  );
}

function WindowChrome() {
  return (
    <div
      className="flex items-center gap-2 border-b border-border px-4 py-2.5"
      style={{ background: "#151A26", color: "#E2E8F0" }}
    >
      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
      <div className="ml-4 flex items-center gap-2 rounded-md border border-border bg-background/70 px-2.5 py-1 text-[11px] text-muted-foreground">
        <LockIcon /> app.hireytics.com / dashboard
      </div>
      <div className="ml-auto flex items-center gap-2 text-[11px] text-muted-foreground">
        <span className="chip !py-[3px] !text-[10.5px]">
          <span className="dot-live" /> AI Engine v5.0
        </span>
      </div>
    </div>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 12 12" className="h-3 w-3 fill-current opacity-70">
      <path d="M3 5V3.5a3 3 0 116 0V5h.5A1.5 1.5 0 0111 6.5v3A1.5 1.5 0 019.5 11h-7A1.5 1.5 0 011 9.5v-3A1.5 1.5 0 012.5 5H3zm1 0h4V3.5a2 2 0 10-4 0V5z" />
    </svg>
  );
}

/* ------------------------------ Sidebar ------------------------------ */

function Sidebar({ activeScene }: { activeScene: Scene }) {
  const items: { key: string; label: string; icon: React.ReactElement; matches: Scene[] }[] = [
    { key: "dashboard", label: "Dashboard", icon: <IconGrid />, matches: ["dashboard"] },
    { key: "jobs", label: "Jobs", icon: <IconBriefcase />, matches: ["createJob"] },
    { key: "candidates", label: "Candidates", icon: <IconUsers />, matches: ["screening", "pipeline"] },
    { key: "interviews", label: "Interviews", icon: <IconMic />, matches: ["interview"] },
    { key: "reports", label: "Reports", icon: <IconChart />, matches: ["report"] },
    { key: "employees", label: "Employees", icon: <IconUser />, matches: [] },
    { key: "settings", label: "Settings", icon: <IconGear />, matches: [] },
  ];
  return (
    <aside className="flex h-[520px] flex-col gap-3 bg-surface/50 p-3">
      <div className="flex items-center gap-2 px-1.5 py-1">
        {/* <LogoMark size={26} /> */}
        <div className="min-w-0">
          <div className="text-[12.5px] font-semibold leading-tight">
            Hire<span className="gradient-text">ytics</span>
          </div>
          <div className="truncate text-[10.5px] text-muted-foreground">Talent Ops</div>
        </div>
      </div>
      <button className="mt-1 w-full rounded-md px-2.5 py-2 text-left text-[11.5px] font-medium shadow-sm bg-[color:var(--primary)] text-[color:var(--primary-foreground)] hover:brightness-95">
        + Post New Job
      </button>
      <p className="mt-2 px-1.5 text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
        Workspace
      </p>
      <ul className="flex flex-col gap-0.5">
        {items.map((it) => {
          const active = it.matches.includes(activeScene);
          return (
            <li key={it.key}>
              <div
                className={
                  "flex items-center gap-2 rounded-md px-2 py-1.5 text-[12px] transition-colors " +
                  (active
                    ? "bg-[color:var(--primary)]/10 ring-1 ring-[color:var(--primary)]/20 border-l-2 border-[color:var(--primary)]/40 text-foreground"
                    : "text-muted-foreground hover:text-foreground")
                }
                aria-current={active ? "page" : undefined}
              >
                <span className={active ? "text-[color:var(--primary)]" : ""}>{it.icon}</span>
                <span className="truncate">{it.label}</span>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="mt-auto space-y-2">
        <div className="flex items-center justify-between rounded-md border border-border bg-surface/60 px-2 py-1.5 text-[10.5px]">
          <span className="text-muted-foreground">System</span>
          <span className="flex items-center gap-1 text-[color:var(--success)]">
            <span className="dot-live" /> Stable
          </span>
        </div>
        <div className="flex items-center gap-2 rounded-md border border-border bg-surface/60 px-2 py-1.5">
          <div className="grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-[10px] font-bold text-black">
            JD
          </div>
          <div className="min-w-0">
            <div className="truncate text-[11px] font-medium">John Doe</div>
            <div className="truncate text-[9.5px] text-muted-foreground">
              john@hireytics.com
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

/* ------------------------------ Scene: Dashboard ------------------------------ */

function DashboardScene() {
  return (
    <div className="flex h-full flex-col gap-4 p-5">
      <div
        className="relative overflow-hidden rounded-xl border border-border p-4"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.24 0.08 285) 0%, oklch(0.18 0.02 265) 55%, oklch(0.18 0.02 265) 100%)",
        }}
      >
        <div className="flex items-start justify-between">
          <div>
            <span className="chip !py-[3px]">
              <span className="dot-live" /> AI Engine v5.0 Active
            </span>
            <h3 className="mt-2 text-[18px] font-semibold tracking-tight">
              Your Intelligent Workforce Command Center
            </h3>
            <p className="mt-1 max-w-[420px] text-[11.5px] text-muted-foreground">
              Manage employees, payroll, attendance, onboarding, performance with AI automation.
            </p>
          </div>
          <div className="flex gap-2">
            <button className="rounded-md border border-border bg-surface-2/60 px-2.5 py-1.5 text-[11px]">
              Employee Directory
            </button>
            <button className="rounded-md bg-foreground px-2.5 py-1.5 text-[11px] font-medium text-background">
              + Start Onboarding
            </button>
          </div>
        </div>
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full opacity-40"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.55), transparent 70%)" }}
        />
      </div>

      <div className="grid grid-cols-3 gap-3">
        <MetricTile label="Total Employees" value={842} delta="+12" tone="cyan" icon={<IconUsers />} />
        <MetricTile label="Active Jobs" value={24} delta="+3" tone="violet" icon={<IconBriefcase />} />
        <MetricTile label="On Leave Today" value={15} delta="-2" tone="warn" icon={<IconCalendar />} />
        <MetricTile label="Hired (This Month)" value={64} delta="+18%" tone="success" icon={<IconCheck />} />
        <MetricTile label="Avg. Hiring Time" value={12} suffix=" days" delta="-3 days" tone="cyan" icon={<IconClock />} />
        <MetricTile label="AI Productivity" value={92} suffix="%" delta="+4%" tone="pink" icon={<IconSpark />} />
      </div>

      <div className="grid grid-cols-[1.4fr_1fr] gap-3">
        <Panel title="Hiring Velocity" rightSlot={<span className="text-[10.5px] text-muted-foreground">Last 6 Months ›</span>}>
          <VelocityChart />
        </Panel>
        <Panel title={<span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full gradient-pink" /> AI Sourcing Funnel</span>}>
          <FunnelBars />
        </Panel>
      </div>
    </div>
  );
}

function MetricTile({
  label, value, suffix = "", delta, tone, icon,
}: {
  label: string; value: number; suffix?: string; delta: string;
  tone: "cyan" | "violet" | "pink" | "success" | "warn"; icon: React.ReactElement;
}) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    const obj = { v: 0 };
    const anim = gsap.to(obj, {
      v: value,
      duration: 1.4,
      ease: "power2.out",
      onUpdate: () => setDisplay(Math.round(obj.v)),
    });
    return () => { anim.kill(); };
  }, [value]);

  const toneMap = {
    cyan: "text-cyan-300",
    violet: "text-violet-300",
    pink: "text-pink-300",
    success: "text-emerald-300",
    warn: "text-amber-300",
  } as const;

  return (
    <div className="rounded-xl border border-border bg-surface/70 p-3">
      <div className="flex items-center justify-between">
        <div className={"grid h-7 w-7 place-items-center rounded-md bg-surface-3/70 " + toneMap[tone]}>
          {icon}
        </div>
        <span className={"rounded-md bg-surface-3/60 px-1.5 py-0.5 text-[10px] " + toneMap[tone]}>
          ↗ {delta}
        </span>
      </div>
      <div className="mt-3 text-[10.5px] uppercase tracking-[0.12em] text-muted-foreground">
        {label}
      </div>
      <div className="mt-1 text-[22px] font-semibold tracking-tight">
        {display}
        {suffix}
      </div>
    </div>
  );
}

function Panel({
  title, children, rightSlot,
}: {
  title: React.ReactNode; children: React.ReactNode; rightSlot?: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border bg-surface/70 p-3">
      <div className="flex items-center justify-between">
        <div className="text-[12px] font-semibold">{title}</div>
        {rightSlot}
      </div>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function VelocityChart() {
  const pathRef = useRef<SVGPathElement>(null);
  useEffect(() => {
    if (!pathRef.current) return;
    const len = pathRef.current.getTotalLength();
    gsap.fromTo(
      pathRef.current,
      { strokeDasharray: len, strokeDashoffset: len },
      { strokeDashoffset: 0, duration: 1.6, ease: "power2.out" }
    );
  }, []);
  return (
    <svg viewBox="0 0 300 90" className="h-24 w-full">
      <defs>
        <linearGradient id="vg" x1="0" x2="1">
          <stop offset="0%" stopColor="#7ee8ff" />
          <stop offset="100%" stopColor="#ff7ac6" />
        </linearGradient>
        <linearGradient id="vgFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#7ee8ff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#7ee8ff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 70 L40 60 L70 65 L110 45 L150 50 L185 30 L220 38 L260 18 L300 22 L300 90 L0 90 Z"
        fill="url(#vgFill)"
      />
      <path
        ref={pathRef}
        d="M0 70 L40 60 L70 65 L110 45 L150 50 L185 30 L220 38 L260 18 L300 22"
        stroke="url(#vg)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FunnelBars() {
  const rows = [
    { label: "Applied", pct: 100, color: "gradient-pink" },
    { label: "Screened", pct: 72, color: "gradient-cyan" },
    { label: "Interviewed", pct: 46, color: "gradient-pink" },
    { label: "Hired", pct: 18, color: "gradient-cyan" },
  ];
  return (
    <div className="space-y-2.5">
      {rows.map((r, i) => (
        <div key={r.label}>
          <div className="flex items-center justify-between text-[10.5px] text-muted-foreground">
            <span>{r.label}</span>
            <span>{r.pct}%</span>
          </div>
          <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-surface-3">
            <div
              className={"h-full " + r.color + " progress-fill"}
              style={{
                width: r.pct + "%",
                animation: `growBar 1.2s ${i * 0.08}s both cubic-bezier(.2,.7,.2,1)`,
              }}
            />
          </div>
        </div>
      ))}
      <style>{`@keyframes growBar { from { transform: scaleX(0); } to { transform: scaleX(1); } }`}</style>
    </div>
  );
}

/* ------------------------------ Scene: Create Job ------------------------------ */

function CreateJobScene() {
  const [text, setText] = useState("");
  const full =
    "Describe your experience with Figma and Adobe XD. Which do you prefer, and why? Share a specific project where you leveraged one of these tools effectively.";
  useEffect(() => {
    let i = 0;
    setText("");
    const id = window.setInterval(() => {
      i += 3;
      setText(full.slice(0, i));
      if (i >= full.length) window.clearInterval(id);
    }, 22);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="flex h-full flex-col gap-4 p-5">
      <div>
        <div className="text-[11px] text-muted-foreground">← Back</div>
        <h3 className="text-[18px] font-semibold tracking-tight">Create New Job Opening</h3>
        <p className="text-[11.5px] text-muted-foreground">
          Configure job details and set up AI automation rules for the recruiting pipeline.
        </p>
      </div>

      <Stepper current={3} />

      <div className="flex-1 rounded-xl border border-border bg-surface/70 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="grid h-6 w-6 place-items-center rounded-md gradient-pink text-[10px] font-bold text-black">AI</div>
            <div>
              <div className="text-[12.5px] font-semibold">Interview Questions</div>
              <div className="text-[10.5px] text-muted-foreground">
                Screening questions generated from “UI UX Designer” description.
              </div>
            </div>
          </div>
          <button className="rounded-md border border-border bg-surface-2 px-2.5 py-1 text-[10.5px] text-muted-foreground">
            ⟳ Regenerate
          </button>
        </div>

        <div className="mt-3 space-y-2">
          <QRow n="Q1" tag="Experience" active>
            <span>{text}<span className="caret" /></span>
          </QRow>
          <QRow n="Q2" tag="Problem Solving">
            Give an example of a time when you had to simplify a complex user flow.
          </QRow>
          <QRow n="Q3" tag="Technical">
            What are the key UX principles you consider when designing a web interface?
          </QRow>
          <QRow n="Q4" tag="Experience">
            Tell me about a challenging prototyping experience you've had.
          </QRow>
        </div>
      </div>
    </div>
  );
}

function Stepper({ current }: { current: number }) {
  return (
    <div className="flex items-center gap-2">
      {[1, 2, 3, 4].map((n, i) => {
        const done = n < current;
        const active = n === current;
        return (
          <div key={n} className="flex flex-1 items-center gap-2">
            <div
              className={
                "grid h-6 w-6 shrink-0 place-items-center rounded-full text-[10.5px] font-semibold " +
                (done
                  ? "bg-[color:var(--success)]/20 text-emerald-300 border border-emerald-400/40"
                  : active
                  ? "text-white shadow-[0_0_18px_var(--ring)]"
                  : "border border-border text-muted-foreground")
              }
              style={active ? { background: "linear-gradient(135deg,#8b5cf6,#6366f1)" } : {}}
            >
              {done ? "✓" : n}
            </div>
            {i < 3 && (
              <div className="h-[2px] flex-1 rounded-full bg-surface-3">
                <div
                  className={"h-full rounded-full " + (n < current ? "bg-[color:var(--success)]" : "bg-surface-3")}
                  style={{ width: n < current ? "100%" : "0%" }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function QRow({
  n, tag, children, active,
}: { n: string; tag: string; children: React.ReactNode; active?: boolean }) {
  return (
    <div
      className={
        "rounded-lg border p-2.5 transition-colors " +
        (active
          ? "border-[color:var(--primary)]/40 bg-[color:var(--primary)]/[0.06]"
          : "border-border bg-surface/50")
      }
    >
      <div className="flex items-start gap-2 text-[11.5px] leading-relaxed">
        <span className="rounded-sm bg-surface-3 px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground">
          {n}
        </span>
        <div className="flex-1">
          <div>{children}</div>
          <span className="mt-1.5 inline-block rounded-md bg-surface-3 px-1.5 py-0.5 text-[9.5px] uppercase tracking-wider text-muted-foreground">
            {tag}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------ Scene: CV Screening ------------------------------ */

function ScreeningScene() {
  const candidates = [
    { name: "Michael Chen", email: "michael.chen@example.com", target: 42, status: "rejected" },
    { name: "Robert Grant", email: "robert.grant@example.com", target: 58, status: "rejected" },
    { name: "John Doe",     email: "john.doe@example.com",     target: 87, status: "passed" },
    { name: "Emma Wilson",  email: "emma.wilson@example.com",  target: 76, status: "passed" },
  ] as const;

  return (
    <div className="relative flex h-full flex-col gap-3 p-5">
      <PipelineTabs active={0} />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <UploadCard
          icon={<IconUpload />}
          title="Upload Candidate Resumes"
          desc="Match candidates against the JD using advanced AI analysis."
          actions={
            <>
              <button className="rounded-md bg-[color:var(--violet)] px-2.5 py-1 text-[10.5px] font-medium text-white/95">Manual Upload</button>
              <button className="rounded-md border border-border bg-surface-2 px-2.5 py-1 text-[10.5px]">Bulk AI OCR</button>
            </>
          }
        />
        <UploadCard
          icon={<IconMail />}
          title="Automated Mail Fetch"
          desc="Inbox listener extracts resume attachments automatically."
          rightBadge={<span className="chip !py-[3px] !text-[10px]"><span className="dot-live" /> Connected</span>}
        />
      </div>

      <div className="relative flex-1 overflow-hidden rounded-xl border border-border bg-surface/70">
        <div className="scanline pointer-events-none absolute inset-0 z-10" />
        <div className="grid grid-cols-1 gap-2.5 md:grid-cols-[1.4fr_1fr_140px] items-center border-b border-border px-4 py-2 text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
          <span>Candidate</span>
          <span>JD Match Score</span>
          <span className="text-right">Action Status</span>
        </div>
        <div>
          {candidates.map((c, i) => (
            <ScoreRow key={c.name} c={c} delay={i * 0.15} />
          ))}
        </div>
        <div className="absolute bottom-3 right-3">
          <button className="inline-flex items-center gap-1.5 rounded-md gradient-pink px-3 py-1.5 text-[11px] font-semibold text-black shadow-[0_10px_30px_-8px_rgba(255,122,198,0.6)]">
            ✈ Send AI Invites (2)
          </button>
        </div>
      </div>
    </div>
  );
}

function ScoreRow({
  c, delay,
}: { c: { name: string; email: string; target: number; status: string }; delay: number }) {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const obj = { v: 0 };
    const anim = gsap.to(obj, {
      v: c.target, duration: 1.1, delay, ease: "power2.out",
      onUpdate: () => setPct(Math.round(obj.v)),
    });
    return () => { anim.kill(); };
  }, [c.target, delay]);

  const passed = c.status === "passed";
  return (
    <div className="grid grid-cols-[1.4fr_1fr_140px] items-center border-b border-border/60 px-4 py-2.5">
      <div className="flex items-center gap-2">
        <div className="grid h-7 w-7 place-items-center rounded-full bg-surface-3 text-[10.5px] font-semibold">
          {c.name.split(" ").map((s) => s[0]).slice(0, 2).join("")}
        </div>
        <div className="min-w-0">
          <div className="truncate text-[12px] font-medium">{c.name}</div>
          <div className="truncate text-[10px] text-muted-foreground">{c.email}</div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="h-1.5 w-40 overflow-hidden rounded-full bg-surface-3">
          <div
            className={"h-full " + (passed ? "gradient-cyan" : "gradient-pink")}
            style={{ width: pct + "%", transition: "width 0.05s linear" }}
          />
        </div>
        <span className={"text-[11px] font-semibold " + (passed ? "text-cyan-300" : "text-pink-300")}>
          {pct}%
        </span>
      </div>
      <div className="text-right">
        <span
          className={
            "rounded-md px-2 py-1 text-[10px] font-medium " +
            (passed
              ? "bg-emerald-500/10 text-emerald-300 border border-emerald-400/30"
              : "bg-red-500/10 text-rose-300 border border-rose-400/30")
          }
        >
          {passed ? "✓ Passed" : "✕ Rejected"}
        </span>
      </div>
    </div>
  );
}

function UploadCard({
  icon, title, desc, actions, rightBadge,
}: {
  icon: React.ReactElement; title: string; desc: string;
  actions?: React.ReactNode; rightBadge?: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border bg-surface/70 p-3">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-md bg-[color:var(--violet)]/15 text-violet-300">
            {icon}
          </div>
          <div>
            <div className="text-[12.5px] font-semibold">{title}</div>
            <div className="mt-0.5 text-[10.5px] leading-relaxed text-muted-foreground">{desc}</div>
          </div>
        </div>
        {rightBadge}
      </div>
      {actions && <div className="mt-2.5 flex gap-2">{actions}</div>}
    </div>
  );
}

function PipelineTabs({ active }: { active: 0 | 1 | 2 }) {
  const tabs = ["1. CV Screening (2)", "2. AI Interviews (4)", "3. HR & Offers (2)"];
  return (
    <div>
      <div className="text-[10.5px] text-muted-foreground">← Back to Jobs</div>
      <div className="flex items-center justify-between">
        <h3 className="text-[16px] font-semibold tracking-tight">
          UI UX Designer Pipeline{" "}
          <span className="ml-1 rounded-md border border-[color:var(--primary)]/40 bg-[color:var(--primary)]/10 px-1.5 py-0.5 align-middle text-[9.5px] text-cyan-300">
            ● ACTIVE REQ
          </span>
        </h3>
        <div className="rounded-md border border-border bg-surface/70 px-2 py-1 text-[10.5px] text-muted-foreground">
          🔍 Search applicants…
        </div>
      </div>
      <div className="mt-2 flex gap-1 rounded-lg border border-border bg-surface/60 p-1">
        {tabs.map((t, i) => (
          <div
            key={t}
            className={
              "flex-1 rounded-md px-3 py-1.5 text-center text-[11px] transition-colors " +
              (i === active ? "bg-surface-3 text-foreground" : "text-muted-foreground")
            }
          >
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------ Scene: AI Interview ------------------------------ */

function InterviewScene() {
  const lines = [
    "Hi John — let's dive in. Describe your experience with Figma and Adobe XD.",
    "Which do you prefer, and why?",
    "Share a specific project where you leveraged one of these tools effectively.",
  ];
  const [displayed, setDisplayed] = useState(["", "", ""]);
  useEffect(() => {
    setDisplayed(["", "", ""]);
    let li = 0, ci = 0;
    const id = window.setInterval(() => {
      if (li >= lines.length) { window.clearInterval(id); return; }
      const cur = lines[li]!;
      ci += 2;
      const slice = cur.slice(0, ci);
      setDisplayed((prev) => {
        const next = [...prev];
        next[li] = slice;
        return next;
      });
      if (ci >= cur.length) { li += 1; ci = 0; }
    }, 30);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="grid h-full grid-cols-[1fr_1.2fr] gap-3 p-5">
      <div className="flex flex-col gap-3">
        <div className="rounded-xl border border-border bg-surface/70 p-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[13px] font-semibold">Live Interview</div>
              <div className="text-[10.5px] text-muted-foreground">UI UX Designer</div>
            </div>
            <span className="chip !py-[3px] !text-[10px]">
              <span className="dot-live" style={{ background: "#ef4444", boxShadow: "0 0 12px #ef4444" }} /> Recording · 00:51
            </span>
          </div>
          <div className="mt-3 flex items-center gap-2 rounded-md bg-surface-3/60 p-2">
            <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-[10px] font-bold text-black">JD</div>
            <div>
              <div className="text-[11px] font-medium">John Doe</div>
              <div className="text-[10px] text-muted-foreground">Candidate</div>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-surface/70 p-3">
          <div className="text-[11.5px] font-semibold">Interview Progress</div>
          <ul className="mt-2 space-y-1.5 text-[11px]">
            {["Introduction","Technical Skills","Problem Solving","Behavioral","Q&A Session"].map((s, i) => (
              <li key={s} className="flex items-center gap-2">
                <span className={"grid h-4 w-4 place-items-center rounded-full text-[9px] " + (i < 4 ? "bg-emerald-500/20 text-emerald-300" : "bg-surface-3 text-muted-foreground")}>
                  {i < 4 ? "✓" : ""}
                </span>
                <span className={i < 4 ? "text-foreground" : "text-muted-foreground"}>{s}</span>
              </li>
            ))}
          </ul>
          <div className="mt-2 flex items-center justify-between text-[10.5px] text-muted-foreground">
            <span>Progress</span>
            <span className="text-emerald-300">80% Complete</span>
          </div>
          <div className="mt-1 h-1 overflow-hidden rounded-full bg-surface-3">
            <div className="h-full gradient-cyan" style={{ width: "80%", animation: "growBar 1.2s .1s both cubic-bezier(.2,.7,.2,1)" }} />
          </div>
        </div>

        <div className="rounded-xl border border-border bg-surface/70 p-3">
          <div className="text-[11.5px] font-semibold">AI Analysis</div>
          <div className="mt-2 space-y-2">
            {[
              { label: "Confidence", pct: 78 },
              { label: "Communication", pct: 86 },
              { label: "Technical", pct: 72 },
            ].map((m, i) => (
              <div key={m.label}>
                <div className="flex justify-between text-[10.5px] text-muted-foreground">
                  <span>{m.label}</span>
                  <span>{m.pct}%</span>
                </div>
                <div className="mt-1 h-1 overflow-hidden rounded-full bg-surface-3">
                  <div
                    className={i % 2 ? "h-full gradient-cyan" : "h-full gradient-pink"}
                    style={{ width: m.pct + "%", animation: `growBar 1.1s ${0.1 + i * 0.1}s both cubic-bezier(.2,.7,.2,1)` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="relative flex-1 overflow-hidden rounded-xl border border-border bg-gradient-to-br from-[oklch(0.18_0.02_265)] to-[oklch(0.22_0.06_290)]">
          <div className="absolute left-3 top-3 text-[11px] font-semibold flex items-center gap-2">
            <span className="dot-live" /> AI Interviewer
          </div>
          <div className="absolute right-3 top-3 chip !py-[3px] !text-[10px]">Eye Contact: 96%</div>
          <div className="grid h-full place-items-center">
            <div className="relative">
              <div
                className="absolute inset-0 -m-6 rounded-full opacity-70"
                style={{
                  background:
                    "radial-gradient(circle, rgba(139,92,246,0.55), transparent 60%)",
                  animation: "float 4s ease-in-out infinite",
                }}
              />
              <div className="relative grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-[0_0_60px_-5px_rgba(168,85,247,0.7)]">
                <BotIcon />
              </div>
              <div className="mt-3 text-center text-[10.5px] text-muted-foreground">Speaking…</div>
            </div>
          </div>
          <div className="absolute bottom-3 left-3 right-3 rounded-lg border border-border bg-surface/70 p-2.5 backdrop-blur">
            <div className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Current Question</div>
            <div className="mt-1 space-y-0.5 text-[11.5px] leading-relaxed">
              {displayed.map((l, i) => (
                <div key={i} className={i === 0 ? "text-foreground" : "text-muted-foreground"}>
                  {l}
                  {i === displayed.findIndex((x, idx) => idx === displayed.length - 1 || displayed[idx + 1] === "") && l.length > 0 && (
                    <span className="caret" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between rounded-xl border border-border bg-surface/70 px-3 py-2 text-[11px]">
          <div className="flex gap-2">
            <button className="grid h-7 w-7 place-items-center rounded-full bg-red-500/90 text-white">■</button>
            <button className="grid h-7 w-7 place-items-center rounded-full border border-border bg-surface-2">⏸</button>
            <button className="grid h-7 w-7 place-items-center rounded-full border border-border bg-surface-2">⏭</button>
          </div>
          <span className="text-muted-foreground">Question 4 / 5 · Technical</span>
          <span className="text-muted-foreground">00:51 / 45:00</span>
        </div>
      </div>
    </div>
  );
}

function BotIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-10 w-10 fill-white/95">
      <path d="M12 2a1 1 0 011 1v1h3a3 3 0 013 3v9a3 3 0 01-3 3H8a3 3 0 01-3-3V7a3 3 0 013-3h3V3a1 1 0 011-1zM9 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM4 11a1 1 0 00-1 1v3a1 1 0 002 0v-3a1 1 0 00-1-1zm16 0a1 1 0 00-1 1v3a1 1 0 002 0v-3a1 1 0 00-1-1z" />
    </svg>
  );
}

/* ------------------------------ Scene: Candidate Report ------------------------------ */

function ReportScene({ active }: { active?: boolean }) {
  const reportRef = useRef<HTMLDivElement | null>(null);
  const fullSummary =
    "Candidate demonstrated strong grasp of UI/UX principles, communicated clearly, and " +
    "showed practical proficiency in Figma. Recommend advancing to HR & offers with a " +
    "senior-band package.";

  useEffect(() => {
    if (!active || !reportRef.current) return;
    const el = reportRef.current;
    const tl = gsap.timeline();
    tl.fromTo(el, { scale: 0.98 }, { scale: 1.02, duration: 0.68, ease: 'power1.out' });
    tl.to(el, { scale: 1, duration: 0.28 });
    return () => { tl.kill(); };
  }, [active]);

  return (
    <div className="grid h-full grid-cols-[1.2fr_1fr] gap-3 p-5">
      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[10.5px] text-muted-foreground">← Back to Pipeline</div>
            <div className="mt-1 flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-[11px] font-bold text-black">JD</div>
              <div>
                <div className="text-[15px] font-semibold leading-tight">John Doe</div>
                <div className="text-[10.5px] text-muted-foreground">
                  UI UX Designer · On-site · Expected: 5 Min
                </div>
              </div>
              <span className="ml-2 rounded-md border border-emerald-400/40 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                ★ Strong Hire (80% Match)
              </span>
            </div>
          </div>
          <button className="rounded-md gradient-pink px-2.5 py-1 text-[10.5px] font-semibold text-black">
            Advance to Negotiation ›
          </button>
        </div>

        <div ref={reportRef} className="rounded-xl border border-border bg-surface/70 p-3 report-zoom p-fluid" style={{ animation: "zoomIn 0.85s ease-out both" }}>
          <div className="text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">
            ✦ AI Executive Summary
          </div>
          <p className="mt-1.5 fluid-body leading-relaxed text-foreground/90">
            <TypingText text={fullSummary} speed={28} play={!!active} />
          </p>
        </div>

        <div className="rounded-xl border border-border bg-surface/70 p-3">
          <div className="text-[11.5px] font-semibold">AI Diagnostics</div>
          <div className="mt-2 space-y-2">
            {[
              { l: "Demonstrates familiarity with industry-standard tools", v: 75, c: "gradient-pink" },
              { l: "Shows willingness to engage with interviewer", v: 88, c: "gradient-cyan" },
              { l: "Needs further probing on user-centric design", v: 60, c: "gradient-pink" },
            ].map((r, i) => (
              <div key={r.l}>
                <div className="flex items-center justify-between text-[10.5px]">
                  <span className="text-muted-foreground">● {r.l}</span>
                  <span className="font-semibold">{r.v}%</span>
                </div>
                <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-surface-3">
                  <div
                    className={"h-full " + r.c}
                    style={{ width: r.v + "%", animation: `growBar 1.2s ${0.1 + i * 0.1}s both cubic-bezier(.2,.7,.2,1)` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="rounded-xl border border-border bg-surface/70 p-3">
          <div className="text-[11.5px] font-semibold">Skills Radar</div>
          <RadarChart />
        </div>
        <div className="rounded-xl border border-border bg-surface/70 p-3">
          <div className="text-[11.5px] font-semibold">Skill Score Breakdown</div>
          <div className="mt-2 space-y-2 text-[10.5px]">
            {[
              { l: "Technical Skills", v: 8 },
              { l: "Communication", v: 7 },
              { l: "Problem Solving", v: 8 },
              { l: "Experience", v: 9 },
            ].map((s, i) => (
              <div key={s.l} className="flex items-center gap-2">
                <span className="w-24 shrink-0 text-muted-foreground">{s.l}</span>
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface-3">
                  <div
                    className="h-full gradient-cyan"
                    style={{ width: s.v * 10 + "%", animation: `growBar 1s ${0.05 + i * 0.08}s both cubic-bezier(.2,.7,.2,1)` }}
                  />
                </div>
                <span className="w-8 text-right font-semibold">{s.v}/10</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function RadarChart() {
  const ref = useRef<SVGPolygonElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current,
      { attr: { points: "80,80 80,80 80,80 80,80" }, opacity: 0 },
      {
        attr: { points: "80,20 140,55 120,130 40,130 20,55" },
        opacity: 1,
        duration: 1.1,
        ease: "power3.out",
      }
    );
  }, []);
  return (
    <svg viewBox="0 0 160 160" className="mx-auto h-40 w-40">
      {[1, 2, 3, 4].map((r) => (
        <polygon
          key={r}
          points="80,20 140,55 120,130 40,130 20,55"
          fill="none"
          stroke="oklch(0.4 0.02 265 / 0.6)"
          strokeWidth="1"
          transform={`translate(${80 - 80 * (r / 4)} ${80 - 80 * (r / 4)}) scale(${r / 4})`}
        />
      ))}
      <polygon
        ref={ref}
        points="80,20 140,55 120,130 40,130 20,55"
        fill="url(#radarFill)"
        stroke="#ff7ac6"
        strokeWidth="1.5"
      />
      <defs>
        <linearGradient id="radarFill" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#7ee8ff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#ff7ac6" stopOpacity="0.35" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ------------------------------ Scene: Pipeline complete ------------------------------ */

function PipelineScene() {
  const stages = [
    { l: "CV Screening", v: "2 passed" },
    { l: "AI Interviews", v: "4 completed" },
    { l: "HR & Offers", v: "Emma accepted" },
    { l: "Onboarding", v: "In progress" },
  ];
  return (
    <div className="flex h-full flex-col gap-3 p-5">
      <div>
        <div className="text-[10.5px] text-muted-foreground">← Back to Jobs</div>
        <div className="flex items-center justify-between">
          <h3 className="text-[16px] font-semibold tracking-tight">UI UX Designer · Pipeline complete</h3>
          <span className="chip !py-[3px] !text-[10px]">
            <span className="dot-live" /> Autonomous
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 xl:grid-cols-4">
        {stages.map((s, i) => (
          <div
            key={s.l}
            className="relative overflow-hidden rounded-xl border border-border bg-surface/70 p-3"
            style={{ animation: `stageIn .6s ${i * 0.12}s both cubic-bezier(.2,.7,.2,1)` }}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold text-muted-foreground">STEP {i + 1}</span>
              <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-500/20 text-[10px] text-emerald-300">✓</span>
            </div>
            <div className="mt-2 text-[12.5px] font-semibold">{s.l}</div>
            <div className="text-[10.5px] text-muted-foreground">{s.v}</div>
            <div
              className="mt-2 h-0.5 overflow-hidden rounded-full bg-surface-3"
            >
              <div className="h-full gradient-cyan" style={{ width: "100%", animation: `growBar .8s ${0.2 + i * 0.12}s both cubic-bezier(.2,.7,.2,1)` }} />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-surface/70 p-3">
          <div className="text-[11.5px] font-semibold">HR & Negotiation</div>
          <div className="mt-2 space-y-2 text-[11px]">
            <div className="flex items-center justify-between rounded-md border border-border bg-surface/60 px-2.5 py-1.5">
              <div>
                <div className="font-medium">John Doe <span className="ml-1 text-[9.5px] text-amber-300">Top Performer</span></div>
                <div className="text-[10px] text-muted-foreground"><TypingText text={"Negotiating · Exp $84k · Off $80k"} speed={30} /></div>
              </div>
              <button className="rounded-md border border-border bg-surface-2 px-2 py-1 text-[10px]">Review</button>
            </div>
            <div className="flex items-center justify-between rounded-md border border-border bg-surface/60 px-2.5 py-1.5">
              <div>
                <div className="font-medium">Emma Wilson <span className="ml-1 text-[9.5px] text-emerald-300">Offer Accepted</span></div>
                <div className="text-[10px] text-muted-foreground">Agreed · $76k</div>
              </div>
              <button className="rounded-md bg-[color:var(--primary)] px-2 py-1 text-[10px] font-semibold text-[color:var(--primary-foreground)]">
                Start Onboarding
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-surface/70 p-3">
          <div className="text-[11.5px] font-semibold">Employee Directory</div>
          <div className="mt-2 space-y-2 text-[11px]">
            {[
              { n: "Alex Mercer", r: "Sr. Product Designer", s: 94 },
              { n: "Sarah Jenkins", r: "Head of Talent", s: 91 },
              { n: "Emma Wilson", r: "UI UX Designer · New", s: 87 },
            ].map((e) => (
              <div key={e.n} className="flex items-center gap-2 rounded-md border border-border bg-surface/60 px-2.5 py-1.5">
                <div className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-[9.5px] font-bold text-black">
                  {e.n.split(" ").map((s) => s[0]).slice(0, 2).join("")}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate font-medium">{e.n}</div>
                  <div className="truncate text-[9.5px] text-muted-foreground">{e.r}</div>
                </div>
                <div className="text-[10.5px] font-semibold text-emerald-300">{e.s}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`@keyframes stageIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; }} @keyframes zoomIn { from { opacity: 0; transform: scale(0.96); } to { opacity: 1; transform: scale(1); }}`}</style>
    </div>
  );
}

/* ------------------------------ Floating side card ------------------------------ */

function FloatingCard() {
  return (
    <div
      className="absolute -right-4 top-24 hidden w-[240px] rounded-xl border border-border bg-surface/85 p-3 backdrop-blur lg:block"
      style={{ animation: "float 7s ease-in-out infinite" }}
    >
      <div className="flex items-center gap-2">
        <div className="grid h-7 w-7 place-items-center rounded-md gradient-pink text-[10px] font-bold text-black">SJ</div>
        <div className="min-w-0">
          <div className="truncate text-[11.5px] font-semibold">Sarah Jenkins</div>
          <div className="truncate text-[9.5px] text-muted-foreground">Head of Talent · Northwind</div>
        </div>
      </div>
      <p className="mt-2 text-[10.5px] leading-relaxed text-muted-foreground">
        “Integrating autonomous AI screeners was seamless. Hireytics saved our HR team{" "}
        <span className="text-foreground">over 40 hours a week.</span>”
      </p>
    </div>
  );
}

/* ------------------------------ Icons ------------------------------ */

function IconGrid() { return <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current"><path d="M3 3h6v6H3zm8 0h6v6h-6zM3 11h6v6H3zm8 0h6v6h-6z" /></svg>; }
function IconBriefcase() { return <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current"><path d="M7 4h6a2 2 0 012 2v1h2a1 1 0 011 1v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a1 1 0 011-1h2V6a2 2 0 012-2zm0 3h6V6H7v1z" /></svg>; }
function IconUsers() { return <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current"><path d="M7 9a3 3 0 100-6 3 3 0 000 6zm7 1a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM2 16a5 5 0 0110 0v1H2v-1zm11-1a4 4 0 015 3.87V19h-5v-4z" /></svg>; }
function IconMic() { return <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current"><path d="M10 3a2.5 2.5 0 012.5 2.5v4a2.5 2.5 0 11-5 0v-4A2.5 2.5 0 0110 3zm-5.5 6a5.5 5.5 0 0011 0h-2a3.5 3.5 0 11-7 0h-2zM9 15h2v3H9z" /></svg>; }
function IconChart() { return <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current"><path d="M3 17V3h2v14h13v2H3zm4-4v-4h2v4H7zm4 0V6h2v7h-2zm4 0V9h2v4h-2z" /></svg>; }
function IconUser() { return <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current"><path d="M10 10a4 4 0 100-8 4 4 0 000 8zm-7 8a7 7 0 0114 0H3z" /></svg>; }
function IconGear() { return <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current"><path d="M10 6a4 4 0 100 8 4 4 0 000-8zm7.5 4a7.5 7.5 0 01-.15 1.5l1.6 1.24-1.5 2.6-1.9-.65a7.5 7.5 0 01-2.6 1.5l-.3 2H8.35l-.3-2a7.5 7.5 0 01-2.6-1.5l-1.9.65-1.5-2.6L3.65 11.5A7.5 7.5 0 013.5 10c0-.51.05-1.01.15-1.5L2.05 7.26l1.5-2.6 1.9.65a7.5 7.5 0 012.6-1.5l.3-2h3.3l.3 2a7.5 7.5 0 012.6 1.5l1.9-.65 1.5 2.6-1.6 1.24c.1.49.15.99.15 1.5z" /></svg>; }
function IconCalendar() { return <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current"><path d="M5 3v2H4a2 2 0 00-2 2v9a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1V3h-2v2H7V3H5zm-1 6h12v7H4V9z" /></svg>; }
function IconCheck() { return <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current"><path d="M7.5 13.5L4 10l1.5-1.5L7.5 10.5 14.5 3.5 16 5l-8.5 8.5z" /></svg>; }
function IconClock() { return <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm.5 4v4.3l3.3 2-1 1.4L9 11V6h1.5z" /></svg>; }
function IconSpark() { return <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current"><path d="M10 2l1.6 4.4L16 8l-4.4 1.6L10 14l-1.6-4.4L4 8l4.4-1.6L10 2z" /></svg>; }
function IconUpload() { return <svg viewBox="0 0 20 20" className="h-4 w-4 fill-current"><path d="M10 3l5 5h-3v5H8V8H5l5-5zM4 16h12v2H4z" /></svg>; }
function IconMail() { return <svg viewBox="0 0 20 20" className="h-4 w-4 fill-current"><path d="M2 4a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm2 .5v.511l6 4.5 6-4.5V4.5l-6 4.5-6-4.5z" /></svg>; }
