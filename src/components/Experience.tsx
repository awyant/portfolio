const experiences = [
  {
    company: "Vividly",
    location: "Remote",
    roles: [
      {
        title: "Principal Product Manager",
        period: "December 2024 - Present",
        highlights: [
          "Led the platform team, shipping a public REST API suite from zero to 20+ endpoints and 10+ customers in under 6 months",
          "Defined the strategy, roadmap, and workstream for a new foodservice vertical, managing the first client engagement end-to-end",
          "Led quarterly product planning across all product teams, partnering directly with the VP of Engineering, VP of Product, and VP of Implementations",
          "Revamped the promotion planning interface (50k+ users), the platform's highest-traffic experience",
          "Built out data pipelines, client-facing dashboards, and ROI reporting, along with critical workflows including hierarchy management and insights",
          "Improved team delivery rate from 30% to 80% per quarter",
          "Unblocked stalled initiatives with 1+ year of prior work, delivering within 3 months of taking ownership",
          "Mentored and managed two PMs across mid and senior levels",
          "Partnered with Sales as a product advisor, joining client onsites and the annual sales offsite to shape go-to-market strategy",
        ],
      },
    ],
  },
  {
    company: "Transfix",
    location: "New York, NY",
    description:
      "Owned product strategy and roadmap for customer-focused marketplace tools, driving customer KPI achievement, efficiency and automation gains, and cost reductions. Managed and mentored product managers, provided thought leadership, and developed innovative product solutions.",
    roles: [
      {
        title: "Principal Product Manager",
        period: "March 2024 - November 2024",
        highlights: [
          "Led development of a new foundational SaaS platform, driving product strategy while partnering with product, data, and engineering leadership",
          "Led the first exploration of AI tooling for internal operations teams, enhancing efficiency and identifying areas for automation",
          "Developed workflow management platform tools with a cross-cutting rules engine, increasing automation by 30%",
          "Crafted an EDI platform strategy, collaborating with engineering and data leadership to align short-term objectives with long-term vision",
          "Unified PMs across departments to promote holistic, customer-centric product development through customer research and usability testing",
        ],
      },
      {
        title: "Senior Product Manager",
        period: "August 2020 - March 2024",
        highlights: [
          "Partnered with Engineering and Design to manage the Shipper Operations marketplace team, driving margin growth beyond company goals",
          "Increased carrier success team efficiency by 160%",
          "Improved customer success team productivity by increasing task automation from 3% to 40%",
          "Managed major platform transitions and financial integrations, reducing costs and improving data use",
          "Supervised junior PMs, guiding their growth and alignment with best practices",
        ],
      },
      {
        title: "Product Manager",
        period: "August 2018 - August 2020",
        highlights: [
          "Led the Shipment Success product squad to define and deliver product roadmaps for efficiency and service",
          "Developed and executed the product strategy for shipment tracking and operations",
          "Led the launch of a revamped React carrier mobile app",
          "Increased shipment tracking consistency by 40%",
        ],
      },
    ],
  },
  {
    company: "Chloe + Isabel",
    location: "New York, NY",
    roles: [
      {
        title: "Product Manager, Merchandiser Experience",
        period: "September 2016 - June 2017",
        highlights: [
          "Owned the consultant experience and product roadmap for a hybrid ecommerce-direct sales business",
          "Led product definition and development of merchandiser tools: internal and external products",
          "Saved over $130k/year by creating a native blogging platform and CMS tool",
          "Increased activation and engagement of 10,000+ consultants by improving online office tools",
        ],
      },
    ],
  },
  {
    company: "Farmigo",
    location: "Brooklyn, NY",
    roles: [
      {
        title: "Product Manager",
        period: "January 2015 - July 2016",
        highlights: [
          "Served as primary product stakeholder for Growth (sales, account management, marketing)",
          "Led product definition and development of internal tools and customer-facing dashboards",
          "Defined features for analytics, communications tools, and logistics management",
        ],
      },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 bg-card py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
          Product Experience
        </h2>
        <h3 className="mb-12 text-3xl font-bold tracking-tight">
          10+ years of shipping products at startups
        </h3>

        <div className="space-y-12">
          {experiences.map((exp, expIndex) => (
            <div key={expIndex} className="relative border-l-2 border-border pl-8">
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-accent bg-background" />
              <div className="mb-1">
                <h4 className="text-xl font-semibold">{exp.company}</h4>
                <p className="text-sm text-muted">{exp.location}</p>
              </div>
              {exp.description && (
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {exp.description}
                </p>
              )}

              <div className="mt-4 space-y-6">
                {exp.roles.map((role, roleIndex) => (
                  <div key={roleIndex}>
                    <div className="flex flex-wrap items-baseline gap-x-3">
                      <h5 className="font-medium text-accent">{role.title}</h5>
                      <span className="text-sm text-muted">{role.period}</span>
                    </div>
                    {role.highlights.length > 0 && (
                      <ul className="mt-2 space-y-1">
                        {role.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-muted"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
