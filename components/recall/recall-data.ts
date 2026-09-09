"use client";

import {
  FileText,
  User,
  ClipboardCheck,
  Mic,
  MessageSquare,
  GitBranch,
  Briefcase,
  Database,
  Search,
  Layers,
  Users,
  History,
  ListChecks,
  type LucideIcon,
} from "lucide-react";

export const tocSections = [
  { id: "intro", label: "Introduction" },
  { id: "what-is-recall", label: "What is Recall?" },
  { id: "the-problem", label: "The problem" },
  { id: "ask-directly", label: "Ask directly" },
  { id: "not-chatbot", label: "Not just a chatbot" },
  { id: "connected-context", label: "Connected context" },
  { id: "how-it-works", label: "How it works" },
  { id: "evidence", label: "Evidence & judgment" },
  { id: "v1-capabilities", label: "Recall v1.0" },
  { id: "limitations", label: "What v1 does not do" },
  { id: "lifecycle", label: "Hiring lifecycle" },
  { id: "future", label: "Future direction" },
  { id: "company-memory", label: "Company memory" },
  { id: "why-built", label: "Why we built it" },
  { id: "roadmap", label: "What comes next" },
];

export const dataSources: { icon: LucideIcon; label: string }[] = [
  { icon: Briefcase, label: "Job requirements" },
  { icon: User, label: "Candidate profiles" },
  { icon: FileText, label: "Resumes" },
  { icon: ClipboardCheck, label: "Assessments" },
  { icon: Mic, label: "Interview results" },
  { icon: MessageSquare, label: "Voice transcripts" },
  { icon: MessageSquare, label: "Interview feedback" },
  { icon: GitBranch, label: "Pipeline stages" },
];

export const workflowSteps: { icon: LucideIcon; title: string; question: string }[] = [
  { icon: Briefcase, title: "Job Description", question: "What are we actually looking for?" },
  { icon: FileText, title: "Resume", question: "Does this candidate have the required experience?" },
  { icon: ClipboardCheck, title: "Assessment", question: "How did they perform?" },
  { icon: Mic, title: "Interview", question: "What did they actually say?" },
  { icon: MessageSquare, title: "Transcript", question: "What evidence came up during the conversation?" },
  { icon: MessageSquare, title: "Feedback", question: "What did the interviewer think?" },
  { icon: GitBranch, title: "Pipeline", question: "Where does this candidate currently stand?" },
];

export const exampleQuestions = [
  {
    question: "Who should I move forward for this role, and why?",
    detail:
      "Recall considers the requirements of the role alongside available candidate information and explains its reasoning using that context.",
  },
  {
    question: "What are the biggest weaknesses of this candidate?",
    detail:
      "Instead of a generic resume summary, Recall considers information collected across the entire hiring process.",
  },
  {
    question: "What happened during this candidate's interview?",
    detail:
      "Recall uses available interview information and transcripts to surface relevant context.",
  },
  {
    question: "Have we interviewed someone like this before?",
    detail:
      "Recall looks beyond a single candidate and uses hiring history available within the system.",
  },
  {
    question: "Why did we reject this candidate?",
    detail:
      "When the relevant information exists in the hiring record, Recall helps reconstruct the reasoning behind the decision.",
  },
];

export const pipelineChain = [
  "Job",
  "Candidate",
  "Application",
  "Assessment",
  "Interview",
  "Transcript",
  "Feedback",
  "Decision",
];

export const howItWorksLayers: {
  icon: LucideIcon;
  title: string;
  description: string;
  example: string;
}[] = [
  {
    icon: Database,
    title: "Structured hiring data",
    description:
      "Some questions have clear answers in the database — candidate counts, pipeline stages, interview completion dates. Recall works with structured application data rather than asking a model to guess.",
    example: "How many candidates are in a stage? Which candidates applied to a job?",
  },
  {
    icon: Search,
    title: "Semantic understanding",
    description:
      "Other questions require understanding meaning rather than matching exact words. Recall uses semantic retrieval to find relevant information across your hiring records.",
    example: "Find candidates with experience similar to this person.",
  },
  {
    icon: Layers,
    title: "Contextual reasoning",
    description:
      "Once relevant information is retrieved, Recall uses an AI model to reason over that context. The model receives information from your Hireytics environment — not generic knowledge.",
    example: "Who should I move forward? — grounded in your actual hiring data.",
  },
];

export const v1Capabilities: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: User,
    title: "Understand candidates",
    description:
      "Ask about qualifications, assessments, interviews, transcripts, feedback, and other available information.",
  },
  {
    icon: Users,
    title: "Compare candidates",
    description:
      "Use information across candidates to understand relative strengths, weaknesses, and fit.",
  },
  {
    icon: History,
    title: "Understand hiring history",
    description: "Search and reason over relevant information from previous hiring activity.",
  },
  {
    icon: ListChecks,
    title: "Summarize context",
    description: "Turn large amounts of hiring information into a concise explanation.",
  },
  {
    icon: MessageSquare,
    title: "Natural-language questions",
    description: "Interact with the hiring system without knowing exactly where information is stored.",
  },
];

export const limitations = [
  "Recruiters",
  "Hiring managers",
  "Interviewers",
  "Employment decisions",
  "HR policies",
  "Legal review",
];

export const isolatedContextPoints = [
  "A candidate interviewed weeks ago",
  "Another candidate who went through the same role",
  "Feedback left in a different part of the workflow",
  "A previous candidate with a similar background",
  "Understanding why someone was rejected",
];

export const lifecycleSteps = [
  "Application",
  "Resume",
  "Assessment",
  "Interview",
  "Transcript",
  "Feedback",
  "Decision",
];

export const futureStages = [
  { stage: "Understand", active: true, description: "Connect and reason across hiring context" },
  { stage: "Recommend", active: false, description: "Surface informed suggestions with evidence" },
  { stage: "Act", active: false, description: "Prepare actions while keeping humans in control" },
];

export const roadmapItems = [
  {
    num: "01",
    title: "Better memory",
    description: "Connect more hiring history and make that information easier to retrieve.",
  },
  {
    num: "02",
    title: "Better reasoning",
    description: "Improve quality, transparency, and reliability across complex hiring questions.",
  },
  {
    num: "03",
    title: "Controlled actions",
    description: "Allow Recall to take useful actions inside the hiring workflow while keeping humans in control.",
  },
];

export const contextSources = [
  "Job requirements",
  "Candidate qualifications",
  "Assessment results",
  "Interview information",
  "Interview feedback",
  "Candidate history",
  "Other relevant hiring records",
];

export const hireyticsIntegrations = [
  "Jobs",
  "Candidates",
  "Assessments",
  "Interviews",
  "Feedback",
  "Hiring stages",
  "Candidate records",
];
