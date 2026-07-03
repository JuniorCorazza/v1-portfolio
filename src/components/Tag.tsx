type TagProps = {
  children: React.ReactNode;
  /** Larger tags sit on work cards; small tags sit on product cards. */
  size?: "sm" | "md";
};

export default function Tag({ children, size = "md" }: TagProps) {
  const styles =
    size === "md"
      ? "text-[12px] px-[11px] py-[6px] rounded-md border-cream/[0.16] text-cream/[0.72]"
      : "text-[11px] px-[9px] py-[5px] rounded-[5px] border-cream/[0.14] text-cream/[0.65]";

  return (
    <span className={`font-mono font-medium border ${styles}`}>{children}</span>
  );
}
