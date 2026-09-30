import { Award, ExternalLink } from "lucide-react";

const ENTRIES = [
  {
    title: "UX/UI & Figma",
    issuer: "Iepazīsti tehnoloģijas — tiešsaistes darbnīca",
    issued: "2026-09-25",
    file: "/certificates/ux-ui-figma-2026.pdf",
  },
];

const ROW_HEIGHT = 64;

export function Certificates() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-foreground text-[15px] font-semibold tracking-tight">Sertifikāti</h3>
      <div className="border-foreground/5 bg-foreground/2 dark:bg-foreground/5 relative rounded-4xl border p-2 sm:p-4">
        <ul className="flex flex-col gap-2">
          {ENTRIES.map((entry) => (
            <li
              key={entry.file}
              className="bg-background border-foreground/5 flex flex-wrap items-center gap-4 rounded-3xl border p-2 sm:flex-nowrap"
              style={{ minHeight: ROW_HEIGHT }}
            >
              <span
                className="border-foreground/15 inline-flex h-12 w-12 shrink-0 items-center justify-center border"
                aria-hidden="true"
                style={{ borderRadius: 14 }}
              >
                <Award className="text-foreground/60 h-6 w-6" />
              </span>
              <div className="flex min-w-0 flex-1 flex-col">
                <span className="text-foreground text-[17px] font-semibold tracking-tight sm:text-[18px]">{entry.title}</span>
                <span className="text-foreground/65 mt-0.5 text-[14px] tracking-tight sm:text-[15px]">
                  {entry.issuer}
                  <span className="text-foreground/30 mx-2">•</span>
                  <span className="text-foreground/55">{entry.issued}</span>
                </span>
              </div>
              <a
                href={entry.file}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Skatīt sertifikātu: ${entry.title}`}
                style={{ borderRadius: 12 }}
                className="focus-ring bg-foreground text-background inline-flex h-10 shrink-0 items-center justify-center gap-2 px-4 text-sm font-medium"
              >
                Skatīt
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
