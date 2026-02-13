interface SectionHeaderProps {
  label: string;
  title: string;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  className = "mb-12",
}: SectionHeaderProps) {
  return (
    <>
      <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
        {label}
      </h2>
      <h3 className={`text-3xl font-bold tracking-tight ${className}`}>
        {title}
      </h3>
    </>
  );
}
