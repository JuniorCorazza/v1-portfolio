type SectionLabelProps = {
  /** e.g. "01 / SERVICES" */
  label: string;
  /** Optional right-aligned supporting sentence. */
  subtitle?: string;
  className?: string;
};

export default function SectionLabel({ label, subtitle, className }: SectionLabelProps) {
  if (!subtitle) {
    return (
      <h2
        className={`font-mono text-[12px] font-medium tracking-[0.06em] text-accent ${className ?? ""}`}
      >
        {label}
      </h2>
    );
  }

  return (
    <div className={`flex items-baseline justify-between gap-6 ${className ?? ""}`}>
      <h2 className="font-mono text-[12px] font-medium tracking-[0.06em] text-accent">
        {label}
      </h2>
      <span className="max-w-[380px] text-right font-sans text-[15px] text-cream/50">
        {subtitle}
      </span>
    </div>
  );
}
