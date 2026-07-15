import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import Tag from "@/components/Tag";
import { selectedWork } from "@/data/content";

/** Renders body copy, brightening the first occurrence of an optional highlight. */
function renderBody(body: string, highlight?: string) {
  const idx = highlight ? body.indexOf(highlight) : -1;
  if (!highlight || idx === -1) return body;
  return (
    <>
      {body.slice(0, idx)}
      <span className="text-cream/90">{highlight}</span>
      {body.slice(idx + highlight.length)}
    </>
  );
}

export default function SelectedWork() {
  return (
    <section className="border-t border-cream/10 px-5 py-[76px] sm:px-10">
      <div className="mx-auto max-w-content">
        <SectionLabel label="02 / SELECTED WORK" className="mb-[42px]" />

        <div className="flex flex-col gap-4">
          {selectedWork.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.06}
              className={`grid gap-6 rounded-[14px] border border-cream/[0.12] p-[34px] md:grid-cols-[1fr_250px] md:gap-11 md:[align-items:start] ${
                i === 0
                  ? "bg-[linear-gradient(100deg,rgb(var(--accent-rgb)/0.05),transparent_52%)]"
                  : ""
              }`}
            >
              <div>
                <div className="mb-[14px] font-mono text-[12px] font-medium tracking-[0.03em] text-cream/45">
                  {item.meta}
                </div>
                <h3 className="mb-3 font-serif text-[26px] leading-[1.2]">
                  {item.href && item.href !== "#" ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="transition-colors hover:text-accent"
                    >
                      {item.title}
                      <span aria-hidden="true" className="text-accent"> ↗</span>
                    </a>
                  ) : (
                    <>
                      {item.title}
                      {item.external && (
                        <span aria-hidden="true" className="text-accent"> ↗</span>
                      )}
                    </>
                  )}
                </h3>
                <p className="font-sans text-[15px] leading-[1.6] text-cream/[0.66]">
                  {renderBody(item.body, item.highlight)}
                </p>
                {item.serviceBy && (
                  <div className="mt-4 font-mono text-[12px] font-medium tracking-[0.03em] text-cream/45">
                    a service by{" "}
                    <a
                      href={item.serviceBy.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-accent transition-opacity hover:opacity-80"
                    >
                      {item.serviceBy.label}
                    </a>
                  </div>
                )}
              </div>
              <div className="flex flex-wrap gap-[7px] md:justify-end">
                {item.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
