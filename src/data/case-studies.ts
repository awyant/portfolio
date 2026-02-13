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
