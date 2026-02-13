import { notFound } from "next/navigation";
import Link from "next/link";
import { caseStudies } from "@/data/case-studies";
import TagList from "@/components/TagList";
import BulletList from "@/components/BulletList";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return {};
  return {
    title: `${study.title} | Abby Wyant`,
    description: study.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center px-6 py-4">
          <Link
            href="/#projects"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            &larr; Back to portfolio
          </Link>
        </div>
      </nav>

      <article className="mx-auto max-w-3xl px-6 pb-24 pt-28">
        <TagList tags={study.tags} />

        <h1 className="mb-2 text-4xl font-bold tracking-tight">
          {study.title}
        </h1>
        <p className="mb-8 text-lg text-muted">{study.subtitle}</p>

        <div className="mb-12 rounded-xl border border-border bg-card p-6">
          <p className="text-muted leading-relaxed">{study.summary}</p>
        </div>

        <section className="mb-12">
          <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
            The Problem
          </h2>
          <p className="text-muted leading-relaxed">{study.problem}</p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
            The Approach
          </h2>
          <BulletList
            items={study.approach}
            className="space-y-3"
            itemClassName="flex items-start gap-3 text-muted leading-relaxed"
          />
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
            The Outcome
          </h2>
          <BulletList
            items={study.outcome}
            className="space-y-3"
            itemClassName="flex items-start gap-3 text-muted leading-relaxed"
          />
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
            Reflection
          </h2>
          <p className="text-muted leading-relaxed">{study.reflection}</p>
        </section>

        <div className="border-t border-border pt-8">
          <Link
            href="/#projects"
            className="text-sm font-medium text-accent transition-colors hover:text-accent-hover"
          >
            &larr; Back to all projects
          </Link>
        </div>
      </article>
    </div>
  );
}
