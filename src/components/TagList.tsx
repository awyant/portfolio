interface TagListProps {
  tags: string[];
  className?: string;
}

export default function TagList({ tags, className = "mb-3" }: TagListProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full bg-accent/10 px-3 py-0.5 text-xs font-medium text-accent"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
