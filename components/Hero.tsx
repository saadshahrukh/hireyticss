'use client';

import {
  ArrowRight,
  TrendingUp,
  Users,
  Brain,
  CheckCircle2,
  ChevronDown,
  Search,
  Moon,
  Bell,
  Crown,
  ExternalLink,
  Send,
  Plus,
  SlidersHorizontal,
  GitBranch,
  FileQuestion,
  UserCheck,
  DollarSign,
  HelpCircle,
  Settings,
  LayoutGrid,
  Mic,
  BarChart2,
  Lock,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { RiLightbulbAiFill } from "react-icons/ri";
import gsap from "gsap";

const scenes = [
  "recall",
  "dashboard",
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
        <hr className="hl" />
        <div className="mx-auto w-full max-w-[1360px] py-10 px-6 pb-20 lg:px-10">
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
            <p className="text-[11.5px] uppercase tracking-[0.22em] text-muted-foreground">
              Live product walkthrough
            </p>
            <h2 className="mt-3 text-[32px] font-semibold tracking-tight text-foreground sm:text-[38px] lg:text-[44px]">
              Your entire workforce lifecycle in one view
            </h2>
            <p className="mt-4 max-w-2xl text-[15.5px] leading-relaxed text-muted-foreground">
              From the first interview to the quarterly review, see how Hireytics keeps every stage connected and measurable.
            </p>
          </div>

          {/* Product walkthrough animation hidden on mobile as requested */}
          <div className="mt-10 hidden md:block overflow-hidden rounded-[36px] border border-white/10 bg-[#0A0F19]/95 p-4 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.45)] backdrop-blur-xl">
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
        <RiLightbulbAiFill className="text-lg text-yellow-400" /> <strong>Recall v1.0</strong> is live now. Read details{" "}
        <strong className="underline text-blue-500">
          <a href="/recall">here</a>
        </strong>
        .
      </span>
      <h1 className="mt-6 text-[44px] font-semibold leading-[1.02] tracking-tight sm:text-[56px] lg:text-[64px]">
        Turn 20 Hours of Hiring Into 20 Minutes.
      </h1>
      <p className="mt-5 max-w-[640px] text-[15.5px] leading-relaxed text-muted-foreground">
        Transform the entire talent journey with Hireytics that automates screening, AI-led Realtime interviews, analytics, hiring, negotiations, onboarding, and workforce operations—helping your team save time, reduce complexity, and focus on people instead of processes.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href="/onboarding"
          className="group inline-flex items-center gap-2 rounded-lg bg-[color:var(--primary)] px-5 py-3 text-[14px] font-semibold text-[color:var(--primary-foreground)] shadow-[0_10px_40px_-10px_var(--ring)] transition hover:brightness-110"
        >
          Start onboarding
          <span className="transition group-hover:translate-x-0.5" aria-hidden>
            →
          </span>
        </a>
        <button className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-[14px] font-medium text-foreground/90 transition hover:bg-surface-2">
          <PlayIcon /> Watch 90s tour
        </button>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Stat label="Faster hires" value="12×" />
        <Stat label="AI productivity" value="92%" />
        <Stat label="Hours saved / wk" value="40+" />
      </div>
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

function PlayIcon() {
  return (
    <span className="grid h-5 w-5 place-items-center rounded-full bg-foreground/10">
      <svg viewBox="0 0 10 10" className="h-2.5 w-2.5 fill-current">
        <path d="M2 1v8l7-4z" />
      </svg>
    </span>
  );
}

function TypingText({
  text,
  speed = 40,
  className,
  play = true,
}: {
  text: string;
  speed?: number;
  className?: string;
  play?: boolean;
}) {
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
  return (
    <span className={className}>
      {out}
      <span className="caret" />
    </span>
  );
}

/* ------------------------------ Product stage ------------------------------ */

function ProductStage() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [activeScene, setActiveScene] = useState<Scene>("recall");
  const sceneRefs = useRef<Record<Scene, HTMLDivElement | null>>({
    recall: null,
    dashboard: null,
    screening: null,
    interview: null,
    report: null,
    pipeline: null,
  });
  const setRef = (name: Scene) => (el: HTMLDivElement | null) => {
    sceneRefs.current[name] = el;
  };

  const productStageStyle = {
    background: "#080C14",
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

      const showScene = (name: Scene, dur = 2.4) => {
        const el = sceneRefs.current[name];
        if (!el) return;
        tl.call(() => setActiveScene(name));
        // entrance
        tl.fromTo(
          el,
          { opacity: 0, y: 22, filter: "blur(8px)", scale: 0.985 },
          { opacity: 1, y: 0, filter: "blur(0px)", scale: 1, duration: 0.75 }
        );

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

      showScene("recall", 3.4);
      showScene("dashboard", 2.2);
      showScene("screening", 2.4);
      showScene("interview", 2.4);
      showScene("report", 3.4);
      showScene("pipeline", 2.2);
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
              "radial-gradient(60% 50% at 50% 40%, rgba(0, 212, 255, 0.16), transparent 70%), radial-gradient(50% 40% at 80% 80%, rgba(217, 70, 239, 0.16), transparent 70%)",
          }}
        />
        <div
          className="glass overflow-hidden rounded-2xl border border-white/10"
          style={{
            background: "rgba(8, 12, 20, 0.95)",
            boxShadow: "0 40px 60px -20px rgba(0,0,0,0.5)",
          }}
        >
          <WindowChrome />
          <div className="grid grid-cols-[190px_minmax(0,1fr)]">
            <Sidebar activeScene={activeScene} />
            <div className="relative h-[540px] overflow-hidden border-l border-white/10 bg-[#060911]/60">
              <div className="scene" ref={setRef("recall")}>
                <RecallAgentScene active={activeScene === "recall"} />
              </div>
              <div className="scene" ref={setRef("dashboard")}>
                <DashboardScene />
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

        {/* Floating side card */}
        <FloatingCard />
      </div>
    </div>
  );
}

function WindowChrome() {
  return (
    <div
      className="flex items-center justify-between border-b border-white/10 px-4 py-2.5 text-[11.5px]"
      style={{ background: "#0B0F19", color: "#E2E8F0" }}
    >
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>

        {/* Search Input matching the real Hireytics App Header */}
        <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-slate-400">
          <Search className="h-3 w-3 text-slate-400" />
          <span className="hidden sm:inline">Search candidates, jobs, questions...</span>
          <kbd className="rounded border border-white/10 bg-white/10 px-1 text-[9px] font-semibold text-slate-300">
            ⌘ K
          </kbd>
        </div>
      </div>

      <div className="flex items-center gap-2.5">
        <button className="flex items-center gap-1 rounded-md border border-purple-500/30 bg-purple-500/10 px-2 py-0.5 text-[10.5px] font-semibold text-purple-300">
          <Crown className="h-3 w-3 text-purple-400" /> Custom Plan
        </button>
        <div className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300">
          <Moon className="h-3 w-3" />
        </div>
        <div className="relative flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300">
          <Bell className="h-3 w-3" />
          <span className="absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-amber-400" />
        </div>
        <div className="flex items-center gap-1.5 pl-1">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-[10px] font-bold text-black">
            S
          </div>
          <div className="hidden text-left leading-tight sm:block">
            <div className="text-[11px] font-semibold text-slate-200">Saad Shahrukh</div>
            <div className="text-[9px] text-slate-400">Ceo</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------ Sidebar matching actual Hireytics ------------------------------ */

interface SidebarItem {
  key: string;
  label: string;
  badge?: string;
  icon: React.ReactNode;
  matches: Scene[];
}

interface SidebarSection {
  title: string;
  items: SidebarItem[];
}

function Sidebar({ activeScene }: { activeScene: Scene }) {
  const sections: SidebarSection[] = [
    {
      title: "ASSISTANT",
      items: [
        {
          key: "recall",
          label: "Recall",
          badge: "BRAIN",
          icon: (
            <img src="/recall.png" alt="Recall" className="h-3.5 w-3.5 object-contain" />
          ),
          matches: ["recall"],
        },
      ],
    },
    {
      title: "GENERAL",
      items: [
        {
          key: "dashboard",
          label: "Dashboard",
          icon: <LayoutGrid className="h-3.5 w-3.5" />,
          matches: ["dashboard"],
        },
        {
          key: "operations",
          label: "Operations",
          icon: <SlidersHorizontal className="h-3.5 w-3.5" />,
          matches: [],
        },
      ],
    },
    {
      title: "AUTOMATION",
      items: [
        {
          key: "pipeline",
          label: "Hiring Pipeline",
          icon: <GitBranch className="h-3.5 w-3.5" />,
          matches: ["pipeline"],
        },
      ],
    },
    {
      title: "PLANNING",
      items: [
        {
          key: "candidates",
          label: "Candidates",
          icon: <Users className="h-3.5 w-3.5" />,
          matches: ["screening"],
        },
        {
          key: "interviews",
          label: "Interviews",
          icon: <Mic className="h-3.5 w-3.5" />,
          matches: ["interview", "report"],
        },
        {
          key: "questions",
          label: "Question Bank",
          icon: <FileQuestion className="h-3.5 w-3.5" />,
          matches: [],
        },
      ],
    },
    {
      title: "PEOPLE",
      items: [
        {
          key: "employees",
          label: "Employees",
          icon: <UserCheck className="h-3.5 w-3.5" />,
          matches: [],
        },
      ],
    },
    {
      title: "PERFORMANCE",
      items: [
        {
          key: "performance",
          label: "Team Performance",
          icon: <BarChart2 className="h-3.5 w-3.5" />,
          matches: [],
        },
        {
          key: "cost",
          label: "Cost Per Hire",
          icon: <DollarSign className="h-3.5 w-3.5" />,
          matches: [],
        },
      ],
    },
  ];

  return (
    <aside className="flex h-[540px] flex-col justify-between border-r border-white/10 bg-[#0A0E18]/80 p-3">
      <div className="space-y-3">
        {/* Brand Header */}
        <div className="flex items-center justify-between px-1.5 py-1">
          <div className="flex items-center gap-2">
            <div className="relative h-5 w-5 overflow-hidden rounded-md bg-white/10 p-0.5">
              <img src="/logo-icon.png" alt="Hireytics" className="h-full w-full object-contain" />
            </div>
            <span className="font-heading text-xs font-bold tracking-tight text-white">
              Hire<span className="gradient-text">ytics</span>
            </span>
          </div>
          <div className="rounded border border-white/10 p-0.5 text-slate-400 hover:text-white">
            <SlidersHorizontal className="h-3 w-3" />
          </div>
        </div>

        {/* Navigation Sections */}
        <div className="space-y-2.5 overflow-y-auto pr-1 text-[11px]">
          {sections.map((sec) => (
            <div key={sec.title}>
              <div className="px-1.5 pb-1 text-[9px] font-bold uppercase tracking-wider text-slate-500">
                {sec.title}
              </div>
              <ul className="space-y-0.5">
                {sec.items.map((item) => {
                  const active = item.matches.includes(activeScene);
                  return (
                    <li key={item.key}>
                      <div
                        className={
                          "flex items-center justify-between rounded-lg px-2 py-1.5 transition-colors " +
                          (active
                            ? "bg-sky-500/15 text-sky-300 font-semibold border border-sky-500/30"
                            : "text-slate-400 hover:bg-white/5 hover:text-slate-200")
                        }
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <span className={active ? "text-sky-400" : "text-slate-400"}>{item.icon}</span>
                          <span className="truncate">{item.label}</span>
                        </div>
                        {item.badge && (
                          <span className="rounded bg-sky-400/20 px-1 py-0.2 text-[8.5px] font-bold text-sky-300">
                            {item.badge}
                          </span>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Help & Settings */}
      <div className="border-t border-white/10 pt-2 space-y-1 text-[11px] text-slate-400">
        <div className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5 hover:text-slate-200 cursor-pointer">
          <HelpCircle className="h-3.5 w-3.5" />
          <span>Help & Support</span>
        </div>
        <div className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5 hover:text-slate-200 cursor-pointer">
          <Settings className="h-3.5 w-3.5" />
          <span>Settings</span>
        </div>
      </div>
    </aside>
  );
}

/* ------------------------------ Scene: Recall Agent in Action (Dark Theme matching Screenshot 4) ------------------------------ */

function RecallAgentScene({ active }: { active?: boolean }) {
  return (
    <div className="flex h-full flex-col justify-between p-4 text-xs">
      <div className="space-y-3 overflow-y-auto pr-1">
        {/* Recall Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
          <div className="flex items-center gap-2">
            <span className="font-heading text-xs font-bold text-white">Recall</span>
            <span className="rounded bg-sky-400/20 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-sky-300">
              BRAIN
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10.5px] text-slate-300">
              <span>Claude 3.5 Sonnet</span>
              <ChevronDown className="h-3 w-3 text-slate-400" />
            </div>
          </div>
        </div>

        {/* User Prompt 1 */}
        <div className="flex justify-end">
          <div className="max-w-[85%] rounded-2xl rounded-tr-xs bg-[#00829B] px-3.5 py-2 text-white shadow-xs">
            <p className="font-medium text-[11.5px]">
              Find me an candidate for Full stack developer role
            </p>
          </div>
        </div>

        {/* Recall Assistant Response */}
        <div className="flex items-start gap-2.5">
          <div className="relative mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-pink-500/30 bg-pink-500/10 p-1">
            <img src="/recall.png" alt="Recall" className="h-full w-full object-contain" />
          </div>

          <div className="min-w-0 flex-1 space-y-2 text-[11.5px]">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-200">Recall Assistant</span>
              <span className="flex items-center gap-1 text-[10px] text-slate-400">
                <span className="dot-live !bg-pink-400" /> Thought for a few seconds
              </span>
            </div>

            <p className="leading-relaxed text-slate-300">
              Marcus Vance is the best matched candidate for the Full Stack Developer role, showcasing extensive experience and a high match score of 92%.
            </p>

            {/* Candidate list */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between rounded-lg border border-sky-500/30 bg-sky-500/10 p-2 text-slate-200">
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold">1. Marcus Vance</span>
                  <ExternalLink className="h-3 w-3 text-slate-400" />
                  <span className="text-[10px] font-bold text-sky-400">(92% match)</span>
                </div>
                <span className="text-[10px] text-slate-400">5 yrs exp • React, Node, SQL</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-white/5 bg-white/5 p-2 text-slate-300">
                <div className="flex items-center gap-1.5">
                  <span className="font-medium">2. Saad</span>
                  <ExternalLink className="h-3 w-3 text-slate-400" />
                  <span className="text-[10px] text-slate-400">(65% match)</span>
                </div>
                <span className="text-[10px] text-slate-400">2 yrs exp • Frontend</span>
              </div>
            </div>
          </div>
        </div>

        {/* User Prompt 2 */}
        <div className="flex justify-end pt-1">
          <div className="max-w-[85%] rounded-2xl rounded-tr-xs bg-[#00829B] px-3.5 py-2 text-white shadow-xs">
            <p className="font-medium text-[11.5px]">
              Compare between Saad & David for this Role should i move forward with and why ?
            </p>
          </div>
        </div>

        {/* Comparison Matrix in Dark Theme */}
        <div className="rounded-xl border border-white/10 bg-[#0C121E]/90 p-2.5">
          <table className="w-full text-left text-[10.5px]">
            <thead>
              <tr className="border-b border-white/10 text-[9.5px] uppercase tracking-wider text-slate-400">
                <th className="pb-1.5">DIMENSION</th>
                <th className="pb-1.5 text-sky-300">DAVID MILLER</th>
                <th className="pb-1.5 text-slate-300">SAAD</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300">
              <tr>
                <td className="py-1.5 text-slate-400">JD Match</td>
                <td className="py-1.5 font-bold text-sky-400">88% (High)</td>
                <td className="py-1.5 text-slate-400">63% (Partial)</td>
              </tr>
              <tr>
                <td className="py-1.5 text-slate-400">Core Skills</td>
                <td className="py-1.5 text-slate-200">Python, PostgreSQL, Docker</td>
                <td className="py-1.5 text-slate-400">React, Node.js, CSS</td>
              </tr>
              <tr>
                <td className="py-1.5 text-slate-400">Next Steps</td>
                <td className="py-1.5 font-semibold text-emerald-400">Advance to Technical Round</td>
                <td className="py-1.5 text-slate-400">Keep in Talent Pool</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Chat Input Bar */}
      <div className="mt-2 rounded-xl border border-white/10 bg-white/5 p-2">
        <div className="flex items-center gap-2 rounded-lg bg-[#080C14] px-3 py-1.5">
          <Plus className="h-3.5 w-3.5 text-slate-400" />
          <span className="flex-1 text-[11px] text-slate-400">
            Ask Recall anything about hiring...
          </span>
          <button className="flex h-6 w-6 items-center justify-center rounded-md bg-[#00829B] text-white">
            <Send className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------ Scene: Dashboard ------------------------------ */

function DashboardScene() {
  return (
    <div className="flex h-full flex-col gap-3 p-4">
      <div
        className="relative overflow-hidden rounded-xl border border-white/10 p-3.5"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.24 0.08 285) 0%, oklch(0.18 0.02 265) 55%, oklch(0.18 0.02 265) 100%)",
        }}
      >
        <div className="flex items-start justify-between">
          <div>
            <span className="chip !py-[2px] !text-[10px]">
              <span className="dot-live" /> AI Engine v5.0 Active
            </span>
            <h3 className="mt-1.5 text-[15px] font-semibold tracking-tight text-white">
              Intelligent Workforce Command Center
            </h3>
            <p className="mt-0.5 max-w-[380px] text-[10.5px] text-slate-300">
              Manage employees, pipeline, voice interviews, and talent memory with AI automation.
            </p>
          </div>
          <div className="flex gap-1.5">
            <button className="rounded-md border border-white/15 bg-white/10 px-2 py-1 text-[10px] text-slate-200">
              Directory
            </button>
            <button className="rounded-md bg-white px-2 py-1 text-[10px] font-semibold text-black">
              + Onboarding
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 text-xs">
        <MetricTile label="Total Employees" value={842} delta="+12" tone="cyan" icon={<Users className="h-3.5 w-3.5" />} />
        <MetricTile label="Active Jobs" value={24} delta="+3" tone="violet" icon={<GitBranch className="h-3.5 w-3.5" />} />
        <MetricTile label="Hired (This Month)" value={64} delta="+18%" tone="success" icon={<CheckCircle2 className="h-3.5 w-3.5" />} />
        <MetricTile label="Avg. Hiring Time" value={12} suffix=" d" delta="-3d" tone="cyan" icon={<TrendingUp className="h-3.5 w-3.5" />} />
        <MetricTile label="AI Productivity" value={92} suffix="%" delta="+4%" tone="pink" icon={<Brain className="h-3.5 w-3.5" />} />
        <MetricTile label="Saved / Week" value={42} suffix="h" delta="+8h" tone="warn" icon={<Crown className="h-3.5 w-3.5" />} />
      </div>

      <div className="grid grid-cols-[1.3fr_1fr] gap-2">
        <Panel title="Hiring Velocity" rightSlot={<span className="text-[9.5px] text-slate-400">Last 6 Months</span>}>
          <VelocityChart />
        </Panel>
        <Panel title={<span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full gradient-pink" /> Sourcing Funnel</span>}>
          <FunnelBars />
        </Panel>
      </div>
    </div>
  );
}

function MetricTile({
  label,
  value,
  suffix = "",
  delta,
  tone,
  icon,
}: {
  label: string;
  value: number;
  suffix?: string;
  delta: string;
  tone: "cyan" | "violet" | "pink" | "success" | "warn";
  icon: React.ReactElement;
}) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    const obj = { v: 0 };
    const anim = gsap.to(obj, {
      v: value,
      duration: 1.2,
      ease: "power2.out",
      onUpdate: () => setDisplay(Math.round(obj.v)),
    });
    return () => {
      anim.kill();
    };
  }, [value]);

  const toneMap = {
    cyan: "text-cyan-300",
    violet: "text-violet-300",
    pink: "text-pink-300",
    success: "text-emerald-300",
    warn: "text-amber-300",
  } as const;

  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-2.5">
      <div className="flex items-center justify-between">
        <div className={"grid h-6 w-6 place-items-center rounded-md bg-white/10 " + toneMap[tone]}>
          {icon}
        </div>
        <span className={"rounded bg-white/5 px-1 py-0.5 text-[9.5px] " + toneMap[tone]}>
          ↗ {delta}
        </span>
      </div>
      <div className="mt-2 text-[9.5px] uppercase tracking-wider text-slate-400">
        {label}
      </div>
      <div className="mt-0.5 text-[18px] font-bold tracking-tight text-white">
        {display}
        {suffix}
      </div>
    </div>
  );
}

function Panel({
  title,
  children,
  rightSlot,
}: {
  title: React.ReactNode;
  children: React.ReactNode;
  rightSlot?: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-2.5">
      <div className="flex items-center justify-between">
        <div className="text-[11px] font-semibold text-slate-200">{title}</div>
        {rightSlot}
      </div>
      <div className="mt-1.5">{children}</div>
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
    <svg viewBox="0 0 300 70" className="h-16 w-full">
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
        d="M0 50 L40 40 L70 45 L110 25 L150 30 L185 15 L220 22 L260 8 L300 12 L300 70 L0 70 Z"
        fill="url(#vgFill)"
      />
      <path
        ref={pathRef}
        d="M0 50 L40 40 L70 45 L110 25 L150 30 L185 15 L220 22 L260 8 L300 12"
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
    <div className="space-y-1.5">
      {rows.map((r, i) => (
        <div key={r.label}>
          <div className="flex items-center justify-between text-[9.5px] text-slate-400">
            <span>{r.label}</span>
            <span>{r.pct}%</span>
          </div>
          <div className="mt-0.5 h-1 overflow-hidden rounded-full bg-white/10">
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

/* ------------------------------ Scene: CV Screening ------------------------------ */

function ScreeningScene() {
  const candidates = [
    { name: "Michael Chen", email: "michael.chen@example.com", target: 42, status: "rejected" },
    { name: "Robert Grant", email: "robert.grant@example.com", target: 58, status: "rejected" },
    { name: "Marcus Vance", email: "marcus.vance@example.com", target: 92, status: "passed" },
    { name: "David Miller", email: "david.miller@example.com", target: 88, status: "passed" },
  ] as const;

  return (
    <div className="relative flex h-full flex-col gap-3 p-4">
      <PipelineTabs active={0} />
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-lg border border-white/10 bg-white/5 p-2.5">
          <div className="text-[11.5px] font-semibold text-slate-200">Upload Resumes</div>
          <p className="text-[10px] text-slate-400">Match profiles against the JD using AI parsing.</p>
          <div className="mt-2 flex gap-1.5">
            <button className="rounded bg-sky-500/20 px-2 py-0.5 text-[10px] font-semibold text-sky-300">
              Bulk AI OCR
            </button>
            <button className="rounded border border-white/10 px-2 py-0.5 text-[10px] text-slate-300">
              Import ATS
            </button>
          </div>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/5 p-2.5">
          <div className="flex items-center justify-between">
            <div className="text-[11.5px] font-semibold text-slate-200">Automated Mail Fetch</div>
            <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[9px] text-emerald-300">Connected</span>
          </div>
          <p className="mt-1 text-[10px] text-slate-400">Inbox listener auto-processes attachments in real time.</p>
        </div>
      </div>

      <div className="relative flex-1 overflow-hidden rounded-lg border border-white/10 bg-white/5">
        <div className="scanline pointer-events-none absolute inset-0 z-10" />
        <div className="grid grid-cols-[1.4fr_1fr_110px] items-center border-b border-white/10 px-3 py-1.5 text-[9.5px] uppercase tracking-wider text-slate-400">
          <span>Candidate</span>
          <span>JD Match Score</span>
          <span className="text-right">Status</span>
        </div>
        <div>
          {candidates.map((c, i) => (
            <ScoreRow key={c.name} c={c} delay={i * 0.15} />
          ))}
        </div>
        <div className="absolute bottom-2 right-2">
          <button className="inline-flex items-center gap-1 rounded bg-gradient-to-r from-pink-500 to-purple-500 px-2.5 py-1 text-[10.5px] font-semibold text-white">
            Send AI Invites (2)
          </button>
        </div>
      </div>
    </div>
  );
}

function ScoreRow({
  c,
  delay,
}: {
  c: { name: string; email: string; target: number; status: string };
  delay: number;
}) {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const obj = { v: 0 };
    const anim = gsap.to(obj, {
      v: c.target,
      duration: 1.1,
      delay,
      ease: "power2.out",
      onUpdate: () => setPct(Math.round(obj.v)),
    });
    return () => {
      anim.kill();
    };
  }, [c.target, delay]);

  const passed = c.status === "passed";
  return (
    <div className="grid grid-cols-[1.4fr_1fr_110px] items-center border-b border-white/5 px-3 py-2 text-xs">
      <div className="flex items-center gap-2">
        <div className="grid h-6 w-6 place-items-center rounded-full bg-white/10 text-[9.5px] font-semibold text-slate-200">
          {c.name.split(" ").map((s) => s[0]).slice(0, 2).join("")}
        </div>
        <div className="min-w-0">
          <div className="truncate text-[11px] font-medium text-slate-200">{c.name}</div>
          <div className="truncate text-[9.5px] text-slate-400">{c.email}</div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="h-1.5 w-32 overflow-hidden rounded-full bg-white/10">
          <div
            className={"h-full " + (passed ? "gradient-cyan" : "gradient-pink")}
            style={{ width: pct + "%", transition: "width 0.05s linear" }}
          />
        </div>
        <span className={"text-[10px] font-semibold " + (passed ? "text-cyan-300" : "text-pink-300")}>
          {pct}%
        </span>
      </div>
      <div className="text-right">
        <span
          className={
            "rounded px-1.5 py-0.5 text-[9.5px] font-medium " +
            (passed
              ? "bg-emerald-500/15 text-emerald-300 border border-emerald-400/30"
              : "bg-red-500/15 text-rose-300 border border-rose-400/30")
          }
        >
          {passed ? "✓ Passed" : "✕ Rejected"}
        </span>
      </div>
    </div>
  );
}

function PipelineTabs({ active }: { active: 0 | 1 | 2 }) {
  const tabs = ["1. CV Screening (4)", "2. AI Interviews (2)", "3. HR & Offers (2)"];
  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="text-[14px] font-semibold tracking-tight text-white">
          Full Stack Developer Pipeline{" "}
          <span className="ml-1 rounded bg-sky-500/20 px-1.5 py-0.5 text-[9px] font-bold text-sky-300">
            ACTIVE REQ
          </span>
        </h3>
      </div>
      <div className="mt-1.5 flex gap-1 rounded-md border border-white/10 bg-white/5 p-0.5 text-[10.5px]">
        {tabs.map((t, i) => (
          <div
            key={t}
            className={
              "flex-1 rounded px-2 py-1 text-center transition-colors " +
              (i === active ? "bg-white/15 text-white font-medium" : "text-slate-400")
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
  return (
    <div className="grid h-full grid-cols-[1fr_1.2fr] gap-3 p-4 text-xs">
      <div className="flex flex-col gap-2.5">
        <div className="rounded-lg border border-white/10 bg-white/5 p-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[12px] font-semibold text-slate-200">Live Voice Interview</div>
              <div className="text-[10px] text-slate-400">Full Stack Engineer</div>
            </div>
            <span className="chip !py-[2px] !text-[9.5px]">
              <span className="dot-live !bg-red-400" /> 00:51
            </span>
          </div>
          <div className="mt-2.5 flex items-center gap-2 rounded bg-white/5 p-2">
            <div className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-[10px] font-bold text-black">
              MV
            </div>
            <div>
              <div className="text-[11px] font-medium text-slate-200">Marcus Vance</div>
              <div className="text-[9.5px] text-slate-400">Candidate</div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/5 p-3">
          <div className="text-[11px] font-semibold text-slate-200">AI Analysis Telemetry</div>
          <div className="mt-2 space-y-2 text-[10px]">
            {[
              { label: "Technical Depth", pct: 92 },
              { label: "Communication", pct: 86 },
              { label: "Confidence", pct: 88 },
            ].map((m) => (
              <div key={m.label}>
                <div className="flex justify-between text-slate-400">
                  <span>{m.label}</span>
                  <span className="text-slate-200 font-semibold">{m.pct}%</span>
                </div>
                <div className="mt-1 h-1 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full gradient-cyan" style={{ width: m.pct + "%" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        <div className="relative flex-1 overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-[#0c1220] to-[#141d33] p-3 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[10.5px]">
            <span className="flex items-center gap-1 text-slate-200 font-medium">
              <span className="dot-live" /> AI Voice Interviewer
            </span>
            <span className="rounded bg-sky-500/20 px-1.5 py-0.5 text-[9.5px] text-sky-300">
              Confidence: 94%
            </span>
          </div>

          <div className="my-auto text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-[0_0_30px_rgba(168,85,247,0.5)]">
              <Mic className="h-6 w-6 text-white" />
            </div>
            <p className="mt-2 text-[10.5px] text-slate-300">Listening to candidate response...</p>
          </div>

          <div className="rounded border border-white/10 bg-black/40 p-2 text-[11px] leading-relaxed text-slate-300">
            <span className="font-semibold text-slate-200">Question 3:</span> &ldquo;Describe how you optimized PostgreSQL indexing in your previous distributed app.&rdquo;
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------ Scene: Candidate Report ------------------------------ */

function ReportScene({ active }: { active?: boolean }) {
  const fullSummary =
    "Candidate demonstrated exceptional backend proficiency in PostgreSQL & Node.js, communicated architectural tradeoffs clearly. Recommend advancing to final round with high priority.";

  return (
    <div className="grid h-full grid-cols-[1.2fr_1fr] gap-3 p-4 text-xs">
      <div className="flex flex-col gap-2.5">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <div className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-[10px] font-bold text-black">
              MV
            </div>
            <div>
              <div className="text-[13px] font-semibold text-white">Marcus Vance</div>
              <div className="text-[10px] text-slate-400">Full Stack Developer</div>
            </div>
            <span className="ml-1 rounded border border-emerald-400/40 bg-emerald-500/15 px-1.5 py-0.5 text-[9.5px] font-bold text-emerald-300">
              ★ Strong Hire (92%)
            </span>
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/5 p-3 report-zoom">
          <div className="text-[9.5px] font-bold uppercase tracking-wider text-slate-400">
            ✦ AI Executive Summary
          </div>
          <p className="mt-1.5 text-[11.5px] leading-relaxed text-slate-200">
            <TypingText text={fullSummary} speed={24} play={!!active} />
          </p>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/5 p-3">
          <div className="text-[11px] font-semibold text-slate-200">Skill Breakdown</div>
          <div className="mt-2 space-y-1.5 text-[10.5px]">
            {[
              { l: "System Architecture", v: 9 },
              { l: "PostgreSQL & Database Design", v: 9.5 },
              { l: "React & TypeScript", v: 8.5 },
            ].map((s) => (
              <div key={s.l} className="flex items-center gap-2">
                <span className="w-36 shrink-0 text-slate-400">{s.l}</span>
                <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full gradient-cyan" style={{ width: s.v * 10 + "%" }} />
                </div>
                <span className="w-8 text-right font-semibold text-slate-200">{s.v}/10</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        <div className="rounded-lg border border-white/10 bg-white/5 p-3">
          <div className="text-[11px] font-semibold text-slate-200">Skills Radar</div>
          <RadarChart />
        </div>
      </div>
    </div>
  );
}

function RadarChart() {
  return (
    <svg viewBox="0 0 160 160" className="mx-auto h-32 w-32">
      {[1, 2, 3, 4].map((r) => (
        <polygon
          key={r}
          points="80,20 140,55 120,130 40,130 20,55"
          fill="none"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="1"
          transform={`translate(${80 - 80 * (r / 4)} ${80 - 80 * (r / 4)}) scale(${r / 4})`}
        />
      ))}
      <polygon
        points="80,24 135,58 118,125 45,125 25,58"
        fill="rgba(0,212,255,0.3)"
        stroke="#7ee8ff"
        strokeWidth="1.5"
      />
    </svg>
  );
}

/* ------------------------------ Scene: Pipeline complete ------------------------------ */

function PipelineScene() {
  const stages = [
    { l: "CV Screening", v: "4 passed" },
    { l: "AI Voice Interviews", v: "Marcus 92%" },
    { l: "HR & Offers", v: "Offer Accepted" },
    { l: "Onboarding", v: "Day 1 Prepared" },
  ];
  return (
    <div className="flex h-full flex-col gap-3 p-4 text-xs">
      <div className="flex items-center justify-between">
        <h3 className="text-[14px] font-semibold text-white">Full Stack Developer · Pipeline Complete</h3>
        <span className="chip !py-[2px] !text-[9.5px]">Autonomous Flow</span>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {stages.map((s, i) => (
          <div key={s.l} className="rounded-lg border border-white/10 bg-white/5 p-2.5">
            <div className="flex items-center justify-between text-[9.5px] text-slate-400">
              <span>STEP {i + 1}</span>
              <span className="text-emerald-400">✓</span>
            </div>
            <div className="mt-1 font-semibold text-slate-200">{s.l}</div>
            <div className="text-[10px] text-slate-400">{s.v}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-lg border border-white/10 bg-white/5 p-3">
          <div className="text-[11px] font-semibold text-slate-200">Offer & Negotiation</div>
          <div className="mt-2 rounded bg-white/5 p-2 text-[11px]">
            <div className="font-semibold text-slate-200">Marcus Vance</div>
            <div className="text-[10px] text-emerald-400">Offer Accepted • $92,000</div>
          </div>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/5 p-3">
          <div className="text-[11px] font-semibold text-slate-200">Continuous Talent Memory</div>
          <p className="mt-1 text-[10.5px] text-slate-400 leading-relaxed">
            Recall transferred interview metrics and verified skill milestones directly into the employee development graph.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------ Floating side card ------------------------------ */

function FloatingCard() {
  return (
    <div
      className="absolute -right-4 top-24 hidden w-[240px] rounded-xl border border-white/10 bg-[#0c121e]/90 p-3 backdrop-blur lg:block shadow-2xl"
      style={{ animation: "float 7s ease-in-out infinite" }}
    >
      <div className="flex items-center gap-2">
        <div className="grid h-7 w-7 place-items-center rounded-md gradient-pink text-[10px] font-bold text-black">
          SJ
        </div>
        <div className="min-w-0">
          <div className="truncate text-[11.5px] font-semibold text-slate-200">Sarah Jenkins</div>
          <div className="truncate text-[9.5px] text-slate-400">Head of Talent</div>
        </div>
      </div>
      <p className="mt-2 text-[10.5px] leading-relaxed text-slate-300">
        “Recall and the automated screening saved our hiring team{" "}
        <span className="text-white font-semibold">over 40 hours every week.</span>”
      </p>
    </div>
  );
}
