type Line = { command: string; output: string; accent?: boolean };

type TerminalProps = {
  title: string;
  lines: Line[];
};

/** A macOS-style terminal window with `$ command` / output pairs. */
export default function Terminal({ title, lines }: TerminalProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-cream/[0.12] bg-surface shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
      <div className="flex items-center gap-[7px] border-b border-cream/10 px-4 py-[13px]">
        <span className="h-[11px] w-[11px] rounded-full bg-dot-red" />
        <span className="h-[11px] w-[11px] rounded-full bg-dot-amber" />
        <span className="h-[11px] w-[11px] rounded-full bg-dot-green" />
        <span className="ml-2 font-mono text-[11px] font-medium text-cream/40">
          {title}
        </span>
      </div>
      <div className="px-5 py-[22px] font-mono text-[13px] font-medium leading-[1.9]">
        {lines.map((line, i) => {
          const isLast = i === lines.length - 1;
          return (
            <div key={`${line.command}-${i}`}>
              <div className={`text-cream/50 ${i > 0 ? "mt-[10px]" : ""}`}>
                <span className="text-accent">$</span> {line.command}
              </div>
              <div className={line.accent ? "text-accent" : "text-cream"}>
                {line.output}
                {isLast && (
                  <span className="ml-1 inline-block h-[15px] w-2 translate-y-[2px] animate-blink bg-accent align-baseline" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
