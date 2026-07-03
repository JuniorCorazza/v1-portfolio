import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import Tag from "@/components/Tag";
import { products } from "@/data/content";

export default function Products() {
  return (
    <section className="border-t border-cream/10 px-5 py-[76px] sm:px-10">
      <div className="mx-auto max-w-content">
        <SectionLabel
          label="03 / PRODUCTS"
          subtitle="Things I build and ship on my own — production starters, tools and templates."
          className="mb-[42px]"
        />

        <Reveal className="grid gap-px overflow-hidden rounded-xl border border-cream/10 bg-cream/10 sm:grid-cols-2">
          {products.map((product) => {
            const isLive = product.href !== "#";
            const cardClass = "flex flex-col bg-ink p-7 transition-colors hover:bg-panel";
            const content = (
              <>
                <div className="mb-3 flex items-baseline justify-between">
                  <span className="font-mono text-[11px] font-medium tracking-[0.03em] text-cream/[0.42]">
                    {product.kicker}
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-mono text-[12px] font-medium text-accent"
                  >
                    ↗
                  </span>
                </div>
                <h3 className="mb-2 font-serif text-[21px]">{product.title}</h3>
                <p className="mb-4 font-sans text-[14px] leading-[1.55] text-cream/55">
                  {product.body}
                </p>
                <div className="mt-auto flex flex-wrap gap-[6px]">
                  {product.tags.map((tag) => (
                    <Tag key={tag} size="sm">
                      {tag}
                    </Tag>
                  ))}
                </div>
              </>
            );

            // Live products link out; placeholders render as plain cards so
            // they can't trigger a "#" hash navigation under HashRouter.
            return isLive ? (
              <a
                key={product.title}
                href={product.href}
                target="_blank"
                rel="noreferrer noopener"
                className={cardClass}
              >
                {content}
              </a>
            ) : (
              <div key={product.title} className={cardClass}>
                {content}
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
