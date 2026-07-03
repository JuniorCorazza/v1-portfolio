import { contact, profile } from "@/data/content";

type ContactProps = {
  line1: string;
  /** Italic accent line beneath the headline. */
  line2: string;
  blurb?: string;
};

export default function Contact({ line1, line2, blurb }: ContactProps) {
  return (
    <section
      id="contact"
      className="scroll-mt-16 border-t border-cream/10 bg-accent-rise px-5 pb-[84px] pt-24 text-center sm:px-10"
    >
      <div className="mb-[22px] font-mono text-[12px] font-medium tracking-[0.05em] text-accent">
        $ ./get-in-touch
      </div>
      <h2 className="mb-5 font-serif text-[40px] font-light leading-[1.05] sm:text-[56px]">
        {line1}
        <br />
        <span className="italic text-accent">{line2}</span>
      </h2>
      {blurb && (
        <p className="mx-auto mb-[38px] max-w-[480px] font-sans text-[18px] leading-[1.6] text-cream/[0.66]">
          {blurb}
        </p>
      )}
      <div className="flex flex-wrap items-center justify-center gap-[14px]">
        <a
          href={`mailto:${contact.email}`}
          className="rounded-full bg-accent px-8 py-4 font-mono text-[16px] font-semibold text-ink transition-opacity hover:opacity-90"
        >
          {contact.email} →
        </a>
      </div>
      <div className="mt-6 font-mono text-[13px] font-medium text-cream/45">
        {contact.phone} · {profile.location}
      </div>
    </section>
  );
}
