import LocationToggle from "./LocationToggle";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
          Product Leader &amp; Problem Solver
        </p>
        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
          Abby Wyant
        </h1>
        <LocationToggle />
        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-muted">
          I solve big, messy problems that nobody else wants to touch. Product
          is my craft. AI, data, and deep relationships with the people closest
          to the problem are my tools.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-card"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
