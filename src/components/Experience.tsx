import { experiences } from "@/data/experiences";

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
