const galleryItems = [
  {
    title: "Art Piece One",
    category: "Art",
    placeholder: "Your artwork or photo here",
  },
  {
    title: "Creative Project",
    category: "Hobby",
    placeholder: "Your creative project here",
  },
  {
    title: "Art Piece Two",
    category: "Art",
    placeholder: "Your artwork or photo here",
  },
  {
    title: "Side Project",
    category: "Hobby",
    placeholder: "Your side project here",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-20 bg-card py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
          Gallery
        </h2>
        <h3 className="mb-12 text-3xl font-bold tracking-tight">
          Art &amp; Hobbies
        </h3>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-xl border border-border"
            >
              {/* Replace this div with an <Image> tag when you add real images */}
              <div className="flex h-full w-full items-center justify-center bg-border/20 text-sm text-muted">
                {item.placeholder}
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                <p className="text-sm font-medium text-white">{item.title}</p>
                <p className="text-xs text-white/70">{item.category}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          More art and projects coming soon.
        </p>
      </div>
    </section>
  );
}
