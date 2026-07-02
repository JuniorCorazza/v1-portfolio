import { Link } from "react-router-dom";
import Terminal from "@/components/Terminal";
import { contact, heroTerminal, profile, stats } from "@/data/content";

export default function Hero() {
  return (
    <section className="animate-fade-up bg-grid-glow px-5 pb-16 pt-14 sm:px-10 sm:pb-[66px] sm:pt-[70px]">
      <div className="mx-auto grid max-w-content items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-[54px]">
        <div>
          <div className="mb-8 inline-flex items-center gap-[10px] rounded-full border border-cream/[0.16] px-[15px] py-[7px]">
            <span className="h-[7px] w-[7px] rounded-full bg-accent shadow-[0_0_8px_rgb(var(--accent-rgb)/0.7)]" />
            <span className="font-mono text-[12px] font-medium tracking-[0.04em] text-cream/[0.72]">
              {profile.availability}
            </span>
          </div>

          <div className="mb-[22px] font-mono text-[12px] font-medium uppercase tracking-[0.05em] text-accent">
            {profile.role}
          </div>

          <h1 className="font-serif text-[42px] font-light leading-[1.06] tracking-[-0.02em] sm:text-[58px]">
            I build full-stack software{" "}
            <span className="italic text-accent">
              committed to enhancing human lives.
            </span>
          </h1>

          <p className="mt-7 max-w-[520px] font-sans text-[18px] leading-[1.65] text-cream/[0.62]">
            From data models and cloud infrastructure to the interface people
            actually touch — I own the whole stack, and integrate quickly into
            the teams I help.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={contact.bookingUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-full bg-accent px-7 py-[15px] font-sans text-[15px] font-semibold text-ink transition-opacity hover:opacity-90"
            >
              Book a call →
            </a>
            <Link
              to="/experience"
              className="rounded-full border border-cream/[0.24] px-7 py-[15px] font-sans text-[15px] font-semibold text-cream transition-colors hover:border-cream/50"
            >
              View experience
            </Link>
          </div>
        </div>

        <Terminal title="~/junior — zsh" lines={heroTerminal} />
      </div>

      <div className="mx-auto mt-14 flex max-w-content flex-wrap gap-10 border-t border-cream/[0.12] pt-[34px] sm:gap-16">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div
              className={`font-serif text-[42px] font-light ${stat.accent ? "text-accent" : ""}`}
            >
              {stat.value}
            </div>
            <div className="mt-[6px] font-mono text-[12px] font-medium tracking-[0.03em] text-cream/50">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
