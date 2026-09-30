import { Experience } from "../components/about/Experience";
import { Education } from "../components/about/Education";
import { Certificates } from "../components/about/Certificates";
import { Skills } from "../components/about/Skills";
import { Stack } from "../components/about/Stack";
import { PolaroidStrip } from "../components/about/PolaroidStrip";
import { ContactCard } from "../components/contact/ContactCard";
import { FadeIn } from "../components/ui/motion-primitives";

export default function AboutPage() {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-312 pt-40 sm:pt-56">
        <PolaroidStrip />
      </section>

      <section className="mx-auto w-full max-w-3xl px-6 pt-20 pb-16 sm:px-10 sm:pt-28 sm:pb-24">
        <FadeIn delay={0.5}>
          <div className="rounded-4xl border border-foreground/5 bg-foreground/1.5 p-8 sm:p-12 dark:bg-foreground/3">
            <h1 className="font-serif text-[1.75rem] font-medium tracking-tight text-foreground sm:text-[2rem]">
              Sveiki! Es esmu <span className="border-b border-foreground/30 pb-0.5">Samanta Biezēka</span>.
            </h1>
            <div className="mt-8 space-y-6 text-[17px] leading-[1.7] tracking-tight text-foreground/75 sm:text-[18px]">
              <p>
                Esmu jauna un mērķtiecīga{" "}
                <strong className="font-semibold text-foreground">web izstrādātāja</strong> ar prasmēm{" "}
                <strong className="font-semibold text-foreground">HTML</strong>,{" "}
                <strong className="font-semibold text-foreground">CSS</strong>,{" "}
                <strong className="font-semibold text-foreground">PHP</strong>,{" "}
                <strong className="font-semibold text-foreground">JavaScript</strong> un{" "}
                <strong className="font-semibold text-foreground">React</strong> ietvaros. Esmu ļoti atvērta jaunām idejām un mācīšanās iespējām.
              </p>
              <p>
                Dzīvoju Mālpilī, Latvijā. Mani var sasniegt pa e-pastu - kontakti apakšā.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 pb-20 sm:px-10 sm:pb-28">
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <Experience />
            <Education />
            <Certificates />
            <Skills />
            <div className="lg:col-span-2">
              <Stack />
            </div>
          </div>
        </FadeIn>
      </section>

      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
