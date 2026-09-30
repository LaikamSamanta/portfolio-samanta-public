import { HeroCtas } from "./HeroCtas";
import { FadeIn, ScaleUnblur } from "../ui/motion-primitives";
import { PortraitMorph } from "./PortraitMorph";
import portraitSrc from "../../assets/samanta.png";
import portraitWaveSrc from "../../assets/samanta-wave.png";

const PORTRAIT_SRC = portraitSrc;
const PORTRAIT_HOVER_SRC = portraitWaveSrc;

export function Hero() {
  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 pt-44 pb-24 sm:px-10 sm:pt-56 sm:pb-32">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-8">
          <FadeIn className="flex flex-col gap-4">
            <p className="text-[20px] leading-tight tracking-tight font-medium text-foreground">
              Čau<span aria-hidden="true" className="mx-0.5">👋</span>, es esmu Samanta
            </p>

            <h1 className="text-[2.75rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[2.5rem] lg:text-[3.65rem]">
              Junior web izstrādātāja
            </h1>

            <p className="max-w-[38ch] text-[20px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[22px]">
              Veidoju modernas un funkcionālas WordPress mājaslapas un e-komercijas risinājumus, pielāgojot tos konkrētām biznesa vajadzībām ar PHP, JavaScript un WooCommerce.
            </p>

            <HeroCtas />
          </FadeIn>

          <ScaleUnblur className="flex justify-stretch md:justify-end">
            <div className="relative aspect-square w-full md:max-w-105 overflow-hidden rounded-4xl border border-foreground/8 bg-background p-1.5 shadow-sm">
              <div className="relative h-full w-full overflow-hidden rounded-[1.6rem]">
                <PortraitMorph srcA={PORTRAIT_SRC} srcB={PORTRAIT_HOVER_SRC} alt="Samantas portrets" />
              </div>
            </div>
          </ScaleUnblur>
        </div>
      </div>
    </section>
  );
}
