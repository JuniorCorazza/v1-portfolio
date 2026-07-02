import { contact } from "@/data/content";

const links = [
  { label: "github", href: contact.github },
  { label: "linkedin", href: contact.linkedin },
  { label: "juniorcorazza.com", href: contact.website },
];

export default function Footer() {
  return (
    <footer className="flex flex-col items-start justify-between gap-4 border-t border-cream/10 px-5 py-7 font-mono text-[13px] font-medium text-cream/45 sm:flex-row sm:items-center sm:px-10">
      <span>© 2026 {"Junior Corazza"} · Stockholm</span>
      <div className="flex gap-[22px]">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer noopener"
            className="transition-colors hover:text-cream"
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
