"use client";

import { ArrowRight, Ban, Check, ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/ui/Motion";
import { ButtonLink } from "@/components/ui/Button";
import RecallSidebar from "./RecallSidebar";
import {
  contextSources,
  dataSources,
  exampleQuestions,
  futureStages,
  hireyticsIntegrations,
  howItWorksLayers,
  isolatedContextPoints,
  lifecycleSteps,
  limitations,
  pipelineChain,
  roadmapItems,
  v1Capabilities,
  workflowSteps,
} from "./recall-data";
import RecallHeroShowcase from "./RecallHeroShowcase";
import RecallChatExperienceShowcase from "./RecallChatExperienceShowcase";
import RecallEngineArchitecture from "./RecallEngineArchitecture";
import RecallLifecycleShowcase from "./RecallLifecycleShowcase";
import RecallCompanyMemoryShowcase from "./RecallCompanyMemoryShowcase";

function RecallImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} className={className} loading="lazy" decoding="async" />
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-utility text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
      {children}
    </p>
  );
}

function HoverCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`group rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] ${className}`}
    >
      {children}
    </div>
  );
}

function SectionBlock({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-28 ${className}`}>
      {children}
    </section>
  );
}

export default function RecallPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-slate-200 bg-white">
        <div className="section-container max-w-7xl pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <SectionLabel>Introducing Recall v1.0</SectionLabel>
              <h1 className="mt-4 font-heading text-4xl font-bold leading-[1.08] tracking-tight text-black sm:text-5xl lg:text-[3.25rem]">
                Hiring software should remember what happened.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Recall is the intelligence layer inside Hireytics that connects
                information collected throughout the hiring process — so teams
                can ask questions in plain language instead of reconstructing
                context manually.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/#inquiry" variant="primary">
                  Try Hireytics
                </ButtonLink>
                <ButtonLink href="#what-is-recall" variant="secondary">
                  Explore Recall
                </ButtonLink>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <RecallHeroShowcase />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Main content with sidebar */}
      <div className="section-container max-w-7xl py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[220px_1fr] xl:grid-cols-[240px_1fr] xl:gap-16">
          <RecallSidebar />

          <div className="min-w-0 space-y-20 md:space-y-28">
            {/* Introduction */}
            <SectionBlock id="intro">
              <FadeIn>
                <div className="grid gap-8 lg:grid-cols-2">
                  <div>
                    <SectionLabel>The information exists</SectionLabel>
                    <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-black md:text-3xl">
                      Records are not the same as understanding.
                    </h2>
                  </div>
                  <div className="space-y-4 text-base leading-relaxed text-slate-600">
                    <p>
                      Today, most hiring software is good at keeping records. A
                      job has candidates. Candidates have resumes. Interviews
                      have transcripts. Interviewers leave feedback. Assessments
                      produce scores. Recruiters move candidates through stages.
                    </p>
                    <p>
                      The problem is that the person making the hiring decision
                      still has to put it all together.{" "}
                      <strong className="font-semibold text-black">
                        Recall is built to change that.
                      </strong>
                    </p>
                  </div>
                </div>

                <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    "A job has candidates",
                    "Candidates have resumes",
                    "Interviews have transcripts",
                    "Interviewers leave feedback",
                    "Assessments produce scores",
                    "Recruiters move candidates through stages",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <p className="mt-8 text-base leading-relaxed text-slate-600">
                  Instead of searching through individual records and
                  reconstructing context manually, you can ask.
                </p>
              </FadeIn>
            </SectionBlock>

            {/* What is Recall */}
            <SectionBlock id="what-is-recall">
              <FadeIn>
                <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
                  <div>
                    <SectionLabel>What is Recall?</SectionLabel>
                    <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-black md:text-3xl">
                      An assistant built directly into Hireytics.
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-slate-600">
                      Recall can reason across the hiring information available
                      within your organization. The goal is simple: your hiring
                      system should not just remember where information is — it
                      should understand the context around it.
                    </p>
                    <blockquote className="mt-8 border-l-2 border-black pl-5 text-lg font-medium leading-snug text-black">
                      Your hiring system should not just remember where
                      information is. It should understand the context around
                      it.
                    </blockquote>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {dataSources.map(({ icon, label }) => {
                      const Icon = icon;
                      return (
                      <HoverCard key={label} className="!p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-700 transition-colors group-hover:border-black group-hover:bg-black group-hover:text-white">
                            <Icon className="h-4 w-4" />
                          </div>
                          <span className="text-sm font-medium text-slate-800">
                            {label}
                          </span>
                        </div>
                      </HoverCard>
                    );
                    })}
                  </div>
                </div>
              </FadeIn>
            </SectionBlock>

            {/* The Problem */}
            <SectionBlock id="the-problem">
              <FadeIn>
                <div className="mb-10 max-w-2xl">
                  <SectionLabel>The problem</SectionLabel>
                  <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-black md:text-3xl">
                    The information is there. The thinking is still manual.
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-slate-600">
                    A hiring manager might have everything they need to make a
                    decision — but that information is usually spread across
                    multiple places.
                  </p>
                </div>

                <div className="space-y-0">
                  {workflowSteps.map((step, i) => {
                    const StepIcon = step.icon;
                    return (
                    <div key={step.title}>
                      <HoverCard className="flex items-start gap-5 !rounded-none !border-x-0 !border-t-0 first:!rounded-t-xl first:!border-t last:!rounded-b-xl">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-700 transition-colors group-hover:border-black group-hover:bg-black group-hover:text-white">
                          <StepIcon className="h-4 w-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold text-black">
                            {step.title}
                          </p>
                          <p className="mt-1 text-sm text-slate-500">
                            {step.question}
                          </p>
                        </div>
                      </HoverCard>
                      {i < workflowSteps.length - 1 && (
                        <div className="flex justify-center border-x border-slate-200 bg-white py-1">
                          <ChevronDown className="h-4 w-4 text-slate-300" />
                        </div>
                      )}
                    </div>
                  );
                  })}
                </div>

                <p className="mt-8 text-center text-base font-medium text-black">
                  That is the gap Recall is designed to address.
                </p>
              </FadeIn>
            </SectionBlock>

            {/* Ask directly */}
            <SectionBlock id="ask-directly">
              <FadeIn>
                <div className="mb-10 grid gap-6 lg:grid-cols-2 lg:items-end">
                  <div>
                    <SectionLabel>Ask the hiring system directly</SectionLabel>
                    <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-black md:text-3xl">
                      Questions the way you would ask a colleague.
                    </h2>
                  </div>
                  <p className="text-base leading-relaxed text-slate-600">
                    With Recall, a hiring manager can ask questions in the same
                    way they would ask another person who understands the
                    hiring process.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {exampleQuestions.map((item) => (
                    <HoverCard key={item.question}>
                      <p className="text-base font-semibold leading-snug text-black">
                        &ldquo;{item.question}&rdquo;
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">
                        {item.detail}
                      </p>
                    </HoverCard>
                  ))}
                </div>

                <div className="mt-8">
                  <RecallChatExperienceShowcase />
                </div>
              </FadeIn>
            </SectionBlock>

            {/* Not just chatbot */}
            <SectionBlock id="not-chatbot">
              <FadeIn>
                <div className="grid gap-10 lg:grid-cols-2">
                  <div>
                    <SectionLabel>Not just a chatbot</SectionLabel>
                    <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-black md:text-3xl">
                      Built around hiring data — not a window beside your ATS.
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-slate-600">
                      You could put a chatbot next to an ATS and call it an AI
                      assistant. That doesn&apos;t solve the underlying problem.
                      Recall understands the relationship between every stage of
                      the hiring process — that relationship is what gives
                      answers context.
                    </p>
                    <p className="mt-4 text-base font-medium text-black">
                      The objective is to make the hiring system itself easier
                      to reason about.
                    </p>
                  </div>

                  <HoverCard className="flex flex-col justify-center !p-8">
                    <p className="font-utility text-[11px] uppercase tracking-[0.18em] text-slate-500">
                      Connected context
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-2">
                      {pipelineChain.map((node, i) => (
                        <span key={node} className="flex items-center gap-2">
                          <span className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-800 transition-colors group-hover:border-slate-400">
                            {node}
                          </span>
                          {i < pipelineChain.length - 1 && (
                            <ArrowRight className="h-3 w-3 shrink-0 text-slate-300" />
                          )}
                        </span>
                      ))}
                    </div>
                  </HoverCard>
                </div>

              </FadeIn>
            </SectionBlock>

            {/* Connected context */}
            <SectionBlock id="connected-context">
              <FadeIn>
                <div className="grid gap-10 lg:grid-cols-2">
                  <div>
                    <SectionLabel>One candidate is not the whole story</SectionLabel>
                    <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-black md:text-3xl">
                      Hiring decisions rarely exist in isolation.
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">
                      Recall uses accumulated hiring context rather than treating
                      every candidate as a completely separate record. This
                      information becomes useful when the system can connect it.
                    </p>
                  </div>

                  <div className="grid gap-3">
                    {isolatedContextPoints.map((point) => (
                      <HoverCard key={point} className="!p-4">
                        <p className="text-sm text-slate-700">{point}</p>
                      </HoverCard>
                    ))}
                  </div>
                </div>

                <div className="mt-10 grid gap-4 md:grid-cols-3">
                  <HoverCard>
                    <p className="text-sm font-semibold text-slate-500">
                      Traditional software asks
                    </p>
                    <p className="mt-2 text-lg font-semibold text-black">
                      &ldquo;Where is this candidate?&rdquo;
                    </p>
                  </HoverCard>
                  <HoverCard>
                    <p className="text-sm font-semibold text-slate-500">
                      Recall aims to ask
                    </p>
                    <p className="mt-2 text-lg font-semibold text-black">
                      &ldquo;What do we know about this candidate?&rdquo;
                    </p>
                  </HoverCard>
                  <HoverCard className="border-black/20">
                    <p className="text-sm font-semibold text-slate-500">
                      Then it helps answer
                    </p>
                    <p className="mt-2 text-lg font-semibold text-black">
                      &ldquo;What does that mean for this hiring decision?&rdquo;
                    </p>
                  </HoverCard>
                </div>
              </FadeIn>
            </SectionBlock>

            {/* How it works */}
            <SectionBlock id="how-it-works">
              <FadeIn>
                <div className="mb-10 max-w-2xl">
                  <SectionLabel>How Recall works</SectionLabel>
                  <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-black md:text-3xl">
                    Structured data, semantic search, and contextual reasoning.
                  </h2>
                </div>

                <div className="grid gap-5 lg:grid-cols-3">
                  {howItWorksLayers.map((layer, i) => {
                    const LayerIcon = layer.icon;
                    return (
                    <HoverCard key={layer.title}>
                      <div className="flex items-center gap-3">
                        <span className="font-utility text-xs font-semibold text-slate-400">
                          0{i + 1}
                        </span>
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-700 transition-colors group-hover:border-black group-hover:bg-black group-hover:text-white">
                          <LayerIcon className="h-4 w-4" />
                        </div>
                      </div>
                      <h3 className="mt-5 text-lg font-semibold text-black">
                        {layer.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">
                        {layer.description}
                      </p>
                      <p className="mt-4 rounded-lg bg-slate-50 px-3 py-2 text-xs leading-relaxed text-slate-600">
                        {layer.example}
                      </p>
                    </HoverCard>
                  );
                  })}
                </div>

                <div className="mt-10">
                  <RecallEngineArchitecture />
                </div>
              </FadeIn>
            </SectionBlock>

            {/* Evidence & judgment */}
            <SectionBlock id="evidence">
              <FadeIn>
                <div className="grid gap-5 lg:grid-cols-2">
                  <HoverCard>
                    <SectionLabel>Evidence matters</SectionLabel>
                    <h3 className="mt-3 text-xl font-bold text-black">
                      An answer should explain why — not just who.
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600">
                      Hiring decisions are consequential. A useful system helps
                      explain what requirements a candidate meets, what evidence
                      supports that, what concerns exist, and where that
                      information came from.
                    </p>
                    <blockquote className="mt-6 border-l-2 border-slate-300 pl-4 text-sm font-medium text-slate-800">
                      An AI answer is more useful when you can understand the
                      context behind it.
                    </blockquote>
                  </HoverCard>

                  <HoverCard>
                    <SectionLabel>Human judgment stays in the loop</SectionLabel>
                    <h3 className="mt-3 text-xl font-bold text-black">
                      Recall is an assistant — not the hiring manager.
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600">
                      It does not replace human judgment, and its recommendations
                      should not be treated as automatic employment decisions. A
                      hiring manager can review underlying information,
                      challenge the recommendation, and make the final call.
                    </p>
                    <p className="mt-4 text-sm font-medium text-black">
                      Help people reason faster with better context — not remove
                      them from the decision.
                    </p>
                  </HoverCard>
                </div>
              </FadeIn>
            </SectionBlock>

            {/* v1 capabilities */}
            <SectionBlock id="v1-capabilities">
              <FadeIn>
                <div className="mb-10 grid gap-6 lg:grid-cols-2">
                  <div>
                    <SectionLabel>Recall v1.0</SectionLabel>
                    <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-black md:text-3xl">
                      Understanding and reasoning across the hiring process.
                    </h2>
                  </div>
                  <p className="text-base leading-relaxed text-slate-600 lg:self-end">
                    Version 1.0 is intentionally focused on one core capability:
                    helping teams understand what their hiring system already
                    knows.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {v1Capabilities.map((cap) => {
                    const CapIcon = cap.icon;
                    return (
                    <HoverCard key={cap.title}>
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-700 transition-colors group-hover:border-black group-hover:bg-black group-hover:text-white">
                        <CapIcon className="h-4 w-4" />
                      </div>
                      <h3 className="mt-4 text-base font-semibold text-black">
                        {cap.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {cap.description}
                      </p>
                    </HoverCard>
                  );
                  })}
                </div>
              </FadeIn>
            </SectionBlock>

            {/* Limitations */}
            <SectionBlock id="limitations">
              <FadeIn>
                <div className="grid gap-8 lg:grid-cols-2">
                  <div>
                    <SectionLabel>What Recall v1.0 does not do</SectionLabel>
                    <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-black md:text-3xl">
                      Clear boundaries, not magic promises.
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">
                      Recall v1.0 is not designed to autonomously run your
                      entire recruiting operation. Answer quality depends on the
                      completeness of information in your hiring system — and
                      we would rather be clear about that than present a chatbot
                      as magic.
                    </p>
                  </div>

                  <HoverCard className="!p-0 overflow-hidden">
                    <ul className="divide-y divide-slate-100">
                      {limitations.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 px-6 py-4 text-sm text-slate-700 transition-colors hover:bg-slate-50"
                        >
                          <Ban className="h-4 w-4 shrink-0 text-slate-400" />
                          Does not replace {item}
                        </li>
                      ))}
                    </ul>
                  </HoverCard>
                </div>
              </FadeIn>
            </SectionBlock>

            {/* Lifecycle */}
            <SectionBlock id="lifecycle">
              <FadeIn>
                <div className="grid gap-10 lg:grid-cols-2">
                  <div>
                    <SectionLabel>Built around the hiring lifecycle</SectionLabel>
                    <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-black md:text-3xl">
                      Each step adds context. Recall connects it.
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">
                      Recall becomes more useful as the hiring record becomes
                      richer. Instead of treating every step as separate
                      information, it connects context across the full lifecycle.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {lifecycleSteps.map((step, i) => (
                      <div key={step} className="flex items-center gap-2">
                        <span className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-800 shadow-sm transition hover:border-slate-400">
                          {step}
                        </span>
                        {i < lifecycleSteps.length - 1 && (
                          <ArrowRight className="hidden h-3.5 w-3.5 text-slate-300 sm:block" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10">
                  <RecallLifecycleShowcase />
                </div>
              </FadeIn>
            </SectionBlock>

            {/* Future */}
            <SectionBlock id="future">
              <FadeIn>
                <div className="mb-10 max-w-2xl">
                  <SectionLabel>The beginning of an agentic hiring system</SectionLabel>
                  <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-black md:text-3xl">
                    From understanding to recommendation to action.
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-slate-600">
                    Recall v1.0 is primarily about understanding. Actions should
                    come after the system can reliably understand the context
                    behind them — with humans remaining in control.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  {futureStages.map((item) => (
                    <HoverCard
                      key={item.stage}
                      className={item.active ? "border-black/30 bg-slate-50" : ""}
                    >
                      <p className="font-utility text-[11px] uppercase tracking-[0.18em] text-slate-500">
                        {item.active ? "Now — v1.0" : "Future"}
                      </p>
                      <h3 className="mt-3 text-xl font-bold text-black">
                        {item.stage}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {item.description}
                      </p>
                    </HoverCard>
                  ))}
                </div>

                <HoverCard className="mt-6 !p-6">
                  <p className="text-sm text-slate-600">
                    Future examples: &ldquo;Move the strongest candidate to the
                    next stage.&rdquo; &ldquo;Schedule interviews with the three
                    candidates I selected.&rdquo; The system would propose or
                    prepare the action — the user remains in control.
                  </p>
                </HoverCard>
              </FadeIn>
            </SectionBlock>

            {/* Company memory */}
            <SectionBlock id="company-memory">
              <FadeIn>
                <div className="mt-10">
                  <RecallCompanyMemoryShowcase />
                </div>
              </FadeIn>
            </SectionBlock>

            {/* Why built */}
            <SectionBlock id="why-built">
              <FadeIn>
                <div className="grid gap-10 lg:grid-cols-2">
                  <div>
                    <SectionLabel>Why we built Recall</SectionLabel>
                    <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-black md:text-3xl">
                      Storing information and understanding it are different
                      problems.
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-slate-600">
                      We kept seeing the same pattern: systems getting better at
                      storing information, while recruiters still had to remember
                      where something was stored and hiring managers opened six
                      records to answer one question.
                    </p>
                    <p className="mt-4 text-base font-semibold text-black">
                      Recall is our answer to that problem.
                    </p>
                  </div>

                  <HoverCard>
                    <SectionLabel>Built into Hireytics</SectionLabel>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Recall is not a separate product beside Hireytics. The
                      same system that manages your hiring workflow provides the
                      context Recall uses.
                    </p>
                    <ul className="mt-5 grid grid-cols-2 gap-2">
                      {hireyticsIntegrations.map((item) => (
                        <li
                          key={item}
                          className="rounded-md border border-slate-100 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </HoverCard>
                </div>
              </FadeIn>
            </SectionBlock>

            {/* Roadmap */}
            <SectionBlock id="roadmap">
              <FadeIn>
                <div className="mb-10">
                  <SectionLabel>What comes next</SectionLabel>
                  <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-black md:text-3xl">
                    Remember more. Understand more. Do more.
                  </h2>
                </div>

                <div className="grid gap-5 md:grid-cols-3">
                  {roadmapItems.map((item) => (
                    <HoverCard key={item.num}>
                      <span className="font-utility text-2xl font-bold text-slate-200 transition-colors group-hover:text-slate-400">
                        {item.num}
                      </span>
                      <h3 className="mt-4 text-lg font-semibold text-black">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {item.description}
                      </p>
                    </HoverCard>
                  ))}
                </div>
              </FadeIn>
            </SectionBlock>

            {/* CTA */}
            <SectionBlock id="cta">
              <FadeIn>
                <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center md:p-14">
                  <SectionLabel>Recall v1.0</SectionLabel>
                  <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-black md:text-4xl">
                    Your hiring system already has the information.
                  </h2>
                  <p className="mx-auto mt-4 max-w-lg text-lg font-medium text-slate-700">
                    Recall helps you use it.
                  </p>
                  <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                    <ButtonLink href="/#inquiry" variant="primary">
                      Try Hireytics
                    </ButtonLink>
                    <ButtonLink href="#what-is-recall" variant="secondary">
                      Explore Recall
                    </ButtonLink>
                  </div>
                </div>
              </FadeIn>
            </SectionBlock>
          </div>
        </div>
      </div>
    </>
  );
}
