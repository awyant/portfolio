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
  {
    slug: "automation-transformation",
    title: "From 3% to 40% Task Automation",
    subtitle: "Transforming customer success operations at Transfix",
    tags: ["Workflow Automation", "Operations", "B2B SaaS"],
    summary:
      "How I identified a massive efficiency gap in customer success operations and built a product strategy that automated 40% of manual tasks, freeing the team to focus on high-value work.",
    problem:
      "The customer success team was drowning in manual, repetitive tasks. Only 3% of their workflows were automated, which meant highly skilled team members were spending most of their time on work that didn't require their expertise. This was hurting both team morale and our ability to scale.",
    approach: [
      "Embedded with the CS team for two weeks to map every workflow end-to-end, identifying which tasks were truly manual vs. automatable",
      "Partnered with data engineering to quantify the time cost of each manual process and prioritize by impact",
      "Designed a phased automation roadmap, starting with the highest-volume, lowest-complexity tasks to build momentum and trust",
      "Worked closely with engineering to build workflow automation tools, iterating weekly based on team feedback",
      "Created dashboards so the CS team could see their own efficiency gains in real time",
    ],
    outcome: [
      "Task automation increased from 3% to 40%",
      "Customer success team productivity improved significantly, allowing them to take on higher-value strategic work",
      "The automation framework became a template used across other operations teams",
    ],
    reflection:
      "The biggest lesson here was that automation isn't just a technical challenge. The CS team needed to trust that automation would help them, not replace them. Starting with quick wins and making the impact visible early was critical to getting buy-in for the larger roadmap.",
  },
  {
    slug: "ai-operations-exploration",
    title: "Bringing AI to Internal Operations",
    subtitle: "Leading Transfix's first AI tooling initiative",
    tags: ["AI/ML", "Operations", "Innovation"],
    summary:
      "How I led the first exploration of AI tooling for internal operations teams, identifying high-impact use cases and building a foundation for AI-driven automation.",
    problem:
      "Operations teams were handling complex, judgment-heavy tasks that traditional rule-based automation couldn't touch. Meanwhile, AI capabilities were advancing rapidly, but nobody had mapped those capabilities to our specific operational pain points.",
    approach: [
      "Audited internal operations workflows to identify tasks that required pattern recognition, natural language processing, or decision-making under ambiguity",
      "Researched and evaluated AI tooling options, focusing on practical applicability rather than hype",
      "Built proof-of-concept implementations to validate feasibility before committing engineering resources",
      "Partnered with operations leadership to define success metrics and adoption plans",
    ],
    outcome: [
      "Identified and validated multiple high-impact use cases for AI in operations",
      "Enhanced operational efficiency by introducing AI-assisted workflows",
      "Established a framework for evaluating future AI tooling opportunities",
    ],
    reflection:
      "This project reinforced that the hardest part of bringing AI into an organization isn't the technology. It's finding the right problems to apply it to and building enough trust that teams will actually adopt it.",
  },
];
