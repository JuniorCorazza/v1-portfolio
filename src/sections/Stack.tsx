import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import { stack } from "@/data/content";

export default function Stack() {
  return (
    <section className="border-t border-cream/10 bg-panel px-5 py-[70px] sm:px-10">
      <div className="mx-auto max-w-content">
        <SectionLabel label="04 / STACK" className="mb-[38px]" />

        <Reveal className="overflow-hidden rounded-xl border border-cream/[0.12] bg-surface">
          {stack.map((row, i) => (
            <div
              key={row.label}
              className={`grid gap-2 px-[26px] py-[19px] sm:grid-cols-[210px_1fr] sm:gap-6 sm:[align-items:baseline] ${
                i < stack.length - 1 ? "border-b border-cream/[0.08]" : ""
              }`}
            >
              <span className="font-mono text-[13px] font-medium text-accent">
                {row.label}
              </span>
              <span className="font-mono text-[14px] font-medium leading-[1.7] text-cream/[0.82]">
                {row.items}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
