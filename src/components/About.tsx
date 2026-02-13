import { skills, tools, education } from "@/data/about";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
          About
        </h2>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-6 text-3xl font-bold tracking-tight">
              I find the hardest problem in the room and work backward from it.
            </h3>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                For 10+ years I&apos;ve embedded in startups where the problems
                are ambiguous, the stakes are real, and the path forward
                isn&apos;t obvious. I&apos;ve built products across logistics,
                ecommerce, and CPG, each time starting from the same place:
                sitting with the people who feel the pain, digging into the
                data, and finding the lever that actually moves the needle.
              </p>
              <p>
                I lean heavily on AI, not as a buzzword, but as a force
                multiplier. I&apos;ve used it to automate workflows, accelerate
                prototyping, and unlock capabilities that small teams
                shouldn&apos;t be able to ship. I pair that with strong
                relationships across engineering, design, data, operations, and
                customers to drive alignment without bureaucracy.
              </p>
              <p>
                Outside of work, I&apos;m exploring art, building AI side
                projects, and staying curious about what&apos;s next.
              </p>
            </div>

            <h4 className="mb-3 mt-8 text-lg font-semibold">Education</h4>
            <div className="space-y-2">
              {education.map((edu) => (
                <div key={edu.school}>
                  <p className="text-sm font-medium">{edu.school}</p>
                  <p className="text-sm text-muted">{edu.degree}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold">Core Skills</h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border px-4 py-1.5 text-sm text-muted"
                >
                  {skill}
                </span>
              ))}
            </div>

            <h4 className="mb-4 mt-8 text-lg font-semibold">Tools</h4>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full bg-accent/10 px-4 py-1.5 text-sm text-accent"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
