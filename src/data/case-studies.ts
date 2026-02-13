export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  summary: string;
  problem: string;
  approach: string[];
  outcome: string[];
  reflection: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "workflow-manager",
    title: "Building a Workflow Engine from Scratch",
    subtitle: "Centralizing operations automation at a digital freight marketplace",
    tags: ["Platform", "Automation", "Rules Engine", "B2B SaaS"],
    summary:
      "How I led the design and delivery of a centralized workflow management platform with a configurable rules engine, cutting operational touchpoints by 30%, automating 60% of issue handling, and eliminating ongoing engineering maintenance costs.",
    problem:
      "Transfix is a digital freight marketplace connecting shippers with carriers. Every shipment moves through a lifecycle from acquisition to invoicing, and freight operators manage a mix of predictable tasks and unpredictable issues at each stage. The problem: task and issue logic was scattered, poorly defined, and increasingly conflated. Adding or modifying workflows required engineering resources every time, creating a bottleneck. Operations leaders had no centralized way to manage, configure, or automate their own workflows, and the lack of visibility was driving up processing costs and support tickets.",
    approach: [
      "Mapped the full shipment lifecycle with operations stakeholders to understand every task and issue type, separating predictable recurring tasks from ad-hoc escalations",
      "Partnered with the VP of Operations, Director of Account Management, and the Data & Analytics team to define clear objectives: reduce processing costs, increase ops visibility, and eliminate the engineering bottleneck",
      "Designed a centralized Workflow Manager with two core concepts: configurable task types (with automation rules, due time rules, and triggers) and a standardized issue tracking system",
      "Architected a general-purpose rules engine that could evaluate events against configurable triggers and take automated actions, making the system flexible enough for both tasks and issues",
      "Planned and executed a seamless migration so individual operators experienced no disruption as the underlying system changed",
      "Maintained monthly stakeholder syncs with operations leadership and weekly updates with engineering and data teams to keep alignment tight throughout delivery",
    ],
    outcome: [
      "Decreased touchpoints per load by 30%, directly reducing processing costs",
      "Increased issue automation from 0% to 60%",
      "Improved on-time task completion from 79% to 86%",
      "Reduced product support tickets by nearly 70% through increased clarity and self-serve configurability",
      "Eliminated recurring engineering maintenance costs by putting workflow control in the hands of operations",
    ],
    reflection:
      "The biggest challenge was designing a system general enough to handle both tasks and issues while being simple enough for non-technical operations leaders to configure on their own. Constant communication was critical. Monthly syncs with ops stakeholders and weekly engineering check-ins kept the project on track and ensured we were solving the right problems. The upfront investment in planning and architecture paid off: what we shipped was scalable and required zero engineering intervention to extend.",
  },
];
