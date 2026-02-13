import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Gallery />
        <Contact />
      </main>
      <footer className="border-t border-border py-8 text-center text-sm text-muted">
        <div className="mx-auto max-w-5xl px-6">
          &copy; {new Date().getFullYear()} Abby Wyant. All rights reserved.
        </div>
      </footer>
    </>
  );
}
