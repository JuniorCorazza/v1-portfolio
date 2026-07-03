import Reveal from "@/components/Reveal";
import Contact from "@/sections/Contact";
import { languages, outsideTheTerminal, timeline } from "@/data/content";

export default function Experience() {
  return (
    <>
      {/* Header */}
      <header className="bg-grid-glow px-5 pb-10 pt-16 sm:px-10 sm:pt-[64px]">
        <div className="mx-auto max-w-narrow">
          <div className="mb-[18px] font-mono text-[12px] font-medium tracking-[0.05em] text-accent">
            ~/experience
          </div>
          <h1 className="mb-[22px] font-serif text-[40px] font-light leading-[1.08] tracking-[-0.02em] sm:text-[52px]">
            The full commit history.
          </h1>
          <div className="inline-block rounded-[9px] border border-cream/[0.12] bg-surface px-[18px] py-[14px] font-mono text-[13px] font-medium text-cream/50">
            <span className="text-accent">$</span> git log --author=
            <span className="text-accent">"Junior Corazza"</span> --all
          </div>
        </div>
      </header>

      {/* Git log */}
      <div className="px-5 pb-10 pt-5 sm:px-10">
        <div className="mx-auto max-w-narrow">
          <h2 className="sr-only">Work and education history</h2>
          {timeline.map((commit, i) => {
            const isLast = i === timeline.length - 1;
            const border = commit.head
              ? "border-accent/35"
              : isLast
                ? "border-transparent"
                : "border-cream/[0.14]";
            const dot = commit.head
              ? "h-3 w-3 -left-[7px] bg-accent"
              : commit.muted
                ? "h-[10px] w-[10px] -left-[6px] bg-cream/[0.22]"
                : "h-[10px] w-[10px] -left-[6px] bg-cream/30";
            const hashColor = commit.head
              ? "text-accent"
              : commit.muted
                ? "text-cream/55"
                : "text-cream/70";

            return (
              <Reveal
                key={commit.hash}
                delay={i * 0.04}
                className={`relative border-l-2 pl-[34px] ${border} ${isLast ? "pb-2" : "pb-10"} pt-[6px]`}
              >
                <span
                  className={`absolute top-[6px] rounded-full shadow-[0_0_0_4px_#0b0c0f] ${dot}`}
                />
                <div className={`mb-[5px] font-mono text-[13px] font-medium ${hashColor}`}>
                  commit {commit.hash}
                  {commit.ref && (
                    <span className="text-cream/40"> ({commit.ref})</span>
                  )}
                </div>
                <div
                  className={`mb-4 font-mono text-[12.5px] font-medium ${commit.muted ? "text-cream/45" : "text-cream/50"}`}
                >
                  Date:  {commit.date}
                </div>
                <h3
                  className={`mb-2 font-serif text-[25px] ${commit.muted ? "text-cream/[0.82]" : ""}`}
                >
                  {commit.title}
                  {commit.titleNote && (
                    <span className="italic text-cream/55"> {commit.titleNote}</span>
                  )}
                </h3>
                <p
                  className={`max-w-[640px] font-sans text-[15.5px] leading-[1.65] ${commit.muted ? "text-cream/55" : "text-cream/[0.62]"}`}
                >
                  {commit.body}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Languages / outside the terminal */}
      <section className="border-t border-cream/10 bg-panel px-5 py-14 sm:px-10">
        <h2 className="sr-only">Languages and interests</h2>
        <div className="mx-auto grid max-w-narrow gap-10 sm:grid-cols-2">
          <div>
            <h3 className="mb-[18px] font-mono text-[12px] font-medium tracking-[0.06em] text-accent">
              LANGUAGES
            </h3>
            <div className="font-sans text-[16px] leading-[1.9] text-cream/[0.72]">
              {languages.map((language) => (
                <div key={language}>{language}</div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-[18px] font-mono text-[12px] font-medium tracking-[0.06em] text-accent">
              OUTSIDE THE TERMINAL
            </h3>
            <div className="whitespace-pre-line font-sans text-[16px] leading-[1.9] text-cream/[0.72]">
              {outsideTheTerminal}
            </div>
          </div>
        </div>
      </section>

      <Contact line1="Let's write the next commit" line2="together." />
    </>
  );
}
