import { NavLink, Link } from "react-router-dom";
import { profile } from "@/data/content";

const linkBase = "cursor-pointer transition-colors hover:text-cream";
const linkClass = ({ isActive }: { isActive: boolean }) =>
  `${linkBase} ${isActive ? "text-accent" : "text-cream/55"}`;

function scrollToContact() {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

export default function Nav() {
  return (
    <nav className="flex items-center justify-between border-b border-cream/10 px-4 py-4 sm:px-10 sm:py-5">
      <Link
        to="/"
        className="whitespace-nowrap font-serif text-[15px] font-medium tracking-[0.01em] text-cream sm:text-[17px]"
      >
        {profile.name}
      </Link>
      <div className="flex items-center gap-3 font-mono text-[12px] font-medium tracking-[0.02em] sm:gap-[26px] sm:text-[12.5px]">
        <NavLink to="/" end className={linkClass}>
          ~/home
        </NavLink>
        <NavLink to="/experience" className={linkClass}>
          ~/experience
        </NavLink>
        <button
          type="button"
          onClick={scrollToContact}
          className="hidden rounded-full border border-accent/50 px-[17px] py-[9px] text-accent transition-colors hover:bg-accent/10 sm:inline-block"
        >
          Get in touch
        </button>
      </div>
    </nav>
  );
}
