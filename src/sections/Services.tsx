import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import { services } from "@/data/content";

export default function Services() {
  return (
    <section className="border-t border-cream/10 bg-panel px-5 py-[72px] sm:px-10">
      <div className="mx-auto max-w-content">
        <SectionLabel
          label="01 / SERVICES"
          subtitle="What I bring into a team as a consultant — hands-on across the full stack."
          className="mb-11"
        />

        <Reveal className="grid gap-px overflow-hidden rounded-xl border border-cream/10 bg-cream/10 sm:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.no}
              className={`bg-ink p-8 ${service.wide ? "sm:col-span-2" : ""}`}
            >
              <div className="mb-[14px] font-mono text-[12px] font-medium text-cream/[0.35]">
                {service.no}
              </div>
              <h3 className="mb-[10px] font-serif text-[23px]">{service.title}</h3>
              <p className="max-w-[720px] font-sans text-[15px] leading-[1.6] text-cream/[0.66]">
                {service.body}
              </p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
