type SectionHeaderProps = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeader({
  index,
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="reveal mb-14 max-w-2xl">
      <p className="mb-4 flex items-center gap-3 text-xs font-medium text-accent">
        <span className="font-mono tracking-widest">{`// ${index}`}</span>
        <span className="h-px w-8 bg-accent/50" />
        <span className="tracking-wide">{eyebrow}</span>
      </p>
      <h2 className="text-3xl leading-snug font-semibold tracking-tight text-balance sm:text-4xl sm:leading-snug">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-8 text-muted">{description}</p>
      )}
    </div>
  );
}
