import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import { about } from "@/data/content";
import mePhoto from "@/assets/me.jpg";

export default function About() {
  return (
    <section className="border-t border-cream/10 px-5 py-[74px] sm:px-10">
      <Reveal className="mx-auto grid max-w-content items-center gap-10 md:grid-cols-[320px_1fr] md:gap-14">
        <div className="aspect-[4/5] overflow-hidden rounded-[14px] border border-cream/10 bg-[linear-gradient(150deg,#1c1d22,#0f1013)]">
          <img
            src={mePhoto}
            alt="Junior Corazza"
            loading="lazy"
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div>
          <div className="mb-5 font-mono text-[12px] font-medium tracking-[0.05em] text-accent">
            04 / ABOUT
          </div>
          <h2 className="mb-[22px] font-serif text-[32px] font-light leading-[1.2] sm:text-[36px]">
            {about.heading}
          </h2>
          {about.paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className={`font-sans text-[17px] leading-[1.7] text-cream/[0.66] ${
                i < about.paragraphs.length - 1 ? "mb-[18px]" : ""
              }`}
            >
              {paragraph}
            </p>
          ))}
          <Link
            to="/experience"
            className="mt-6 inline-block font-mono text-[13px] font-medium text-accent transition-opacity hover:opacity-80"
          >
            → read the full history (git log)
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
