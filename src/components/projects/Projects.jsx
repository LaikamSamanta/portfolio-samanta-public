import { ArrowRight, FolderKanban, Sparkles, Compass } from "lucide-react";
import { Link } from "react-router-dom";
import { FadeIn } from "../ui/motion-primitives";

// Placeholder projects — replace with real work, descriptions, and screenshots.
const PROJECTS = [
  {
    id: "projekts-1",
    icon: Sparkles,
    iconLabel: "Projekts Nr. 1",
    title: "Projekta nosaukums parādīsies šeit",
    description: "Īss apraksts par šo projektu — ko tas dara un kā tas tapa.",
    meta: "React, Tailwind CSS",
    imageRatio: 4 / 3,
  },
  {
    id: "projekts-2",
    icon: Compass,
    iconLabel: "Projekts Nr. 2",
    title: "Projekta nosaukums parādīsies šeit",
    description: "Īss apraksts par šo projektu — ko tas dara un kā tas tapa.",
    meta: "WordPress, PHP",
    imageRatio: 4 / 3,
  },
  {
    id: "projekts-3",
    icon: FolderKanban,
    iconLabel: "Projekts Nr. 3",
    title: "Projekta nosaukums parādīsies šeit",
    description: "Īss apraksts par šo projektu — ko tas dara un kā tas tapa.",
    meta: "React, JavaScript",
    imageRatio: 4 / 3,
  },
];

export function Projects({ withHeadline = false, viewMoreVisible = false }) {
  const items = viewMoreVisible ? PROJECTS.slice(0, 4) : PROJECTS;

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        {withHeadline ? (
          <FadeIn className="flex flex-col items-center gap-5 pt-12 pb-10 text-center sm:pt-20 sm:pb-14">
            <h2 className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3rem] lg:text-[3.5rem]">
              Mani projekti
            </h2>
            <p className="max-w-[33ch] text-[18px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[20px]">
              Šī sadaļa vēl tiek papildināta — pavisam drīz šeit būs pirmie darbi.
            </p>
          </FadeIn>
        ) : null}

        <div className="columns-1 gap-6 md:columns-2 md:gap-7">
          {items.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {viewMoreVisible ? (
          <div className="mt-12 flex justify-center sm:mt-16">
            <Link
              to="/projekti"
              className="border border-foreground/8 focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
            >
              Visi projekti
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const Icon = project.icon;
  return (
    <FadeIn delay={Math.min(index * 0.06, 0.3)} className="mb-6 break-inside-avoid md:mb-7">
      <article className="project-card flex cursor-pointer flex-col gap-4 rounded-3xl border border-foreground/8 bg-background p-3 sm:p-3.5">
        <header className="flex items-center gap-2.5 px-1 pt-2">
          <span className="border-foreground/10 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-background">
            <Icon className="h-3.5 w-3.5 text-foreground" aria-hidden="true" />
          </span>
          <span className="text-sm font-medium tracking-tight text-foreground">{project.iconLabel}</span>
        </header>

        <div
          className="project-card__image ring-foreground/5 relative w-full overflow-hidden rounded-2xl bg-foreground/5 ring-1"
          style={{ aspectRatio: project.imageRatio }}
        >
          <div className="project-card__image-inner flex items-center justify-center gap-2 text-foreground/30">
            <Icon className="h-6 w-6" aria-hidden="true" />
            <span className="text-xs font-medium uppercase tracking-widest">Drīzumā</span>
          </div>
        </div>

        <div className="flex flex-col gap-2.5 px-1 pb-1">
          <h3 className="text-[20px] font-medium leading-[1.2] tracking-tight text-foreground sm:text-[22px]">{project.title}</h3>
          <p className="text-[14px] leading-normal tracking-tight text-foreground/65 sm:text-[15px]">{project.description}</p>
        </div>

        <p className="px-1 pb-2 text-[12px] tracking-tight text-foreground/50">{project.meta}</p>
      </article>
    </FadeIn>
  );
}
