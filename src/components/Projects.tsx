import Link from "next/link";
import { caseStudies } from "@/data/case-studies";

const upcomingProjects = [
  {
    title: "Coming Soon",
    description:
      "More projects in the works. Check back soon for updates on what I'm building next.",
    tags: ["In Progress"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
          Projects
        </h2>
        <h3 className="mb-12 text-3xl font-bold tracking-tight">
          Things I&apos;ve built
        </h3>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/projects/${study.slug}`}
              className="group flex flex-col rounded-xl border border-border p-6 transition-colors hover:border-accent/30"
            >
              <div className="mb-3 flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent/10 px-3 py-0.5 text-xs font-medium text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h4 className="mb-2 text-lg font-semibold">{study.title}</h4>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
                {study.summary}
              </p>
              <span className="text-sm font-medium text-accent transition-colors group-hover:text-accent-hover">
                Read case study &rarr;
              </span>
            </Link>
          ))}

          {upcomingProjects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col rounded-xl border border-border p-6"
            >
              <div className="mb-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent/10 px-3 py-0.5 text-xs font-medium text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h4 className="mb-2 text-lg font-semibold">{project.title}</h4>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
