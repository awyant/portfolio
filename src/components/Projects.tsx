import Link from "next/link";
import { caseStudies } from "@/data/case-studies";
import SectionHeader from "./SectionHeader";
import TagList from "./TagList";

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
        <SectionHeader label="Projects" title="Things I've built" />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/projects/${study.slug}`}
              className="group flex flex-col rounded-xl border border-border p-6 transition-colors hover:border-accent/30"
            >
              <TagList tags={study.tags} />
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
              <TagList tags={project.tags} />
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
