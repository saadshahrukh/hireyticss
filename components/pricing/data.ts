export type PlanId = "free" | "basic" | "pro" | "enterprise" | "custom";

export interface PlanFeature {
  text: string;
  tooltip?: string;
  accordion?: {
    title: string;
    items: string[];
  };
}

export interface Plan {
  id: PlanId;
  name: string;
  price: number | null;
  priceLabel?: string;
  description?: string;
  cta: string;
  ctaVariant: "primary" | "secondary" | "dark";
  ctaHref: string;
  popular?: boolean;
  includesLabel?: string;
  features: PlanFeature[];
  plusLabel?: string;
}

export const plans: Plan[] = [
  {
    id: "free",
    name: "Free",
    price: 0,
    cta: "Get Started",
    ctaVariant: "secondary",
    ctaHref: "/#inquiry",
    features: [
      { text: "5 AI interview minutes" },
      { text: "1 active hiring role" },
      { text: "Unlimited manual CV uploads" },
      { text: "Interview analytics dashboard" },
      { text: "Full HRM module access" },
      { text: "10-day free trial" },
    ],
  },
  {
    id: "basic",
    name: "Basic",
    price: 80,
    cta: "Start Basic",
    ctaVariant: "secondary",
    ctaHref: "/#inquiry",
    features: [
      { text: "60 AI interview minutes" },
      { text: "Up to 5 active hiring roles" },
      { text: "Unlimited manual CV uploads" },
      {
        text: "Bulk CV uploads",
        tooltip:
          "OCR processing is not included in this plan. CV parsing accuracy depends on document formatting.",
      },
      { text: "Standard interview analytics" },
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: 250,
    popular: true,
    cta: "Upgrade to Pro",
    ctaVariant: "primary",
    ctaHref: "/#inquiry",
    plusLabel: "Everything in Basic, plus:",
    features: [
      { text: "200 AI interview minutes" },
      { text: "Up to 25 active hiring roles" },
      {
        text: "Advanced hiring analytics",
        accordion: {
          title: "Advanced Analytics",
          items: [
            "Cost per hire",
            "Hiring efficiency",
            "Interview conversion rates",
            "Recruiter productivity",
            "Pipeline performance",
            "Time-to-fill metrics",
          ],
        },
      },
      { text: "Recruitment performance dashboard" },
      { text: "Cost-per-hire insights" },
      { text: "Time-to-hire tracking" },
      { text: "Productivity reports" },
      {
        text: "Bulk CV uploads",
        tooltip:
          "Bulk uploads are supported without OCR enhancement. OCR-enabled parsing is available in Enterprise.",
      },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 2500,
    cta: "Contact Sales",
    ctaVariant: "dark",
    ctaHref: "/#inquiry",
    plusLabel: "Everything in Pro, plus:",
    features: [
      { text: "2,000+ AI interview minutes" },
      { text: "Up to 100 active hiring roles" },
      {
        text: "Custom AI interviewer configuration",
        tooltip: "Tailor AI interview behavior, scoring weights, and evaluation criteria to your hiring standards.",
      },
      {
        text: "White-label deployment",
        tooltip:
          "Deploy the platform using your company's branding and dedicated subdomain.",
      },
      {
        text: "OCR-powered CV processing",
        tooltip:
          "AI-powered document parsing for higher extraction accuracy.",
      },
      {
        text: "Automated mailbox CV fetching",
        tooltip:
          "Automatically fetch candidate resumes directly from your recruitment mailbox.",
      },
      { text: "Recruitment automation pipelines" },
      { text: "HRMS integrations" },
      {
        text: "API access",
        tooltip:
          "Integrate seamlessly with your existing HR systems and workflows.",
      },
      { text: "Priority support" },
    ],
  },
  {
    id: "custom",
    name: "Custom",
    price: null,
    priceLabel: "Tailored",
    description:
      "For organizations with unique hiring workflows, enterprise compliance requirements, or custom AI implementations.",
    cta: "Talk to Sales",
    ctaVariant: "dark",
    ctaHref: "/#inquiry",
    features: [
      { text: "Custom interview minutes" },
      { text: "Unlimited hiring roles" },
      { text: "Dedicated infrastructure" },
      { text: "Custom integrations" },
      { text: "SLA agreements" },
      { text: "Dedicated onboarding" },
      { text: "Priority engineering support" },
    ],
  },
];

export type ComparisonValue = boolean | string;

export interface ComparisonRow {
  feature: string;
  free: ComparisonValue;
  basic: ComparisonValue;
  pro: ComparisonValue;
  enterprise: ComparisonValue;
  custom: ComparisonValue;
}

export const comparisonRows: ComparisonRow[] = [
  {
    feature: "AI Interview Minutes",
    free: "5",
    basic: "60",
    pro: "200",
    enterprise: "2,000+",
    custom: "Custom",
  },
  {
    feature: "Hiring Roles",
    free: "1",
    basic: "5",
    pro: "25",
    enterprise: "100",
    custom: "Unlimited",
  },
  {
    feature: "Manual CV Upload",
    free: true,
    basic: true,
    pro: true,
    enterprise: true,
    custom: true,
  },
  {
    feature: "Bulk CV Upload",
    free: false,
    basic: true,
    pro: true,
    enterprise: true,
    custom: true,
  },
  {
    feature: "OCR Processing",
    free: false,
    basic: false,
    pro: false,
    enterprise: true,
    custom: true,
  },
  {
    feature: "AI Analytics",
    free: true,
    basic: true,
    pro: true,
    enterprise: true,
    custom: true,
  },
  {
    feature: "Advanced Analytics",
    free: false,
    basic: false,
    pro: true,
    enterprise: true,
    custom: true,
  },
  {
    feature: "White-label",
    free: false,
    basic: false,
    pro: false,
    enterprise: true,
    custom: true,
  },
  {
    feature: "API Access",
    free: false,
    basic: false,
    pro: false,
    enterprise: true,
    custom: true,
  },
  {
    feature: "HRMS Integrations",
    free: false,
    basic: false,
    pro: false,
    enterprise: true,
    custom: true,
  },
  {
    feature: "Mailbox Automation",
    free: false,
    basic: false,
    pro: false,
    enterprise: true,
    custom: true,
  },
  {
    feature: "Custom AI Settings",
    free: false,
    basic: false,
    pro: false,
    enterprise: true,
    custom: true,
  },
  {
    feature: "Priority Support",
    free: false,
    basic: false,
    pro: false,
    enterprise: true,
    custom: true,
  },
];

export const faqItems = [
  {
    title: "Can I upgrade anytime?",
    content:
      "Yes. You can upgrade your plan at any time from your account settings. When you upgrade, you immediately gain access to the new plan's features and your billing is prorated for the remainder of the billing cycle.",
  },
  {
    title: "What happens after the free trial?",
    content:
      "After your 10-day free trial on the Free plan, you can continue with Free tier limits, upgrade to a paid plan for more capacity, or contact our team if you need a tailored solution. We never charge without your explicit confirmation.",
  },
  {
    title: "Are unused interview minutes carried forward?",
    content:
      "Interview minutes reset at the start of each billing cycle and do not roll over to the next month. If you consistently need more minutes, upgrading to the next tier or contacting us for a Custom plan is the best option.",
  },
  {
    title: "Can I switch between plans?",
    content:
      "Absolutely. You can upgrade or downgrade at any time. Downgrades take effect at the next billing cycle, while upgrades are applied immediately with prorated billing.",
  },
  {
    title: "Do you offer enterprise onboarding?",
    content:
      "Yes. Enterprise and Custom plans include dedicated onboarding with implementation support, team training, workflow configuration, and a dedicated success manager to ensure a smooth rollout.",
  },
  {
    title: "How does AI interview credit work?",
    content:
      "Each AI interview consumes minutes from your plan's monthly allocation based on interview duration. Partial minutes are rounded up to the nearest minute. You can monitor usage in real time from your analytics dashboard.",
  },
];
