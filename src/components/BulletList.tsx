interface BulletListProps {
  items: string[];
  className?: string;
  itemClassName?: string;
}

export default function BulletList({
  items,
  className = "space-y-1",
  itemClassName = "flex items-start gap-2 text-sm text-muted",
}: BulletListProps) {
  return (
    <ul className={className}>
      {items.map((item, i) => (
        <li key={i} className={itemClassName}>
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          {item}
        </li>
      ))}
    </ul>
  );
}
