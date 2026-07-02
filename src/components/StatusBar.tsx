import { useEffect, useState } from "react";
import { profile } from "@/data/content";

const timeFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/Stockholm",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

function stockholmTime() {
  try {
    return timeFormatter.format(new Date());
  } catch {
    return "";
  }
}

/** Top utility bar with a live Stockholm clock. */
export default function StatusBar() {
  const [time, setTime] = useState(stockholmTime);

  useEffect(() => {
    const id = window.setInterval(() => setTime(stockholmTime()), 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="flex items-center justify-between border-b border-cream/[0.09] bg-surface-2 px-6 py-2 font-mono text-[11.5px] font-medium tracking-[0.02em] text-cream/50">
      <div className="flex items-center gap-5">
        <span className="inline-flex items-center gap-[7px]">
          <span className="h-[7px] w-[7px] rounded-full bg-accent shadow-[0_0_7px_rgb(var(--accent-rgb))]" />
          available
        </span>
        <span className="hidden text-cream/[0.32] sm:inline">{profile.branch}</span>
      </div>
      <div className="flex items-center gap-5">
        <span className="hidden sm:inline">{profile.coordinates}</span>
        <span className="tabular-nums text-accent" aria-label={`Stockholm time ${time}`}>
          {time}
        </span>
      </div>
    </div>
  );
}
