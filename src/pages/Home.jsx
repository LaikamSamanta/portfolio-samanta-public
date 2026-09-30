import { Hero } from "../components/hero/Hero";
import { Projects } from "../components/projects/Projects";
import { ContactCard } from "../components/contact/ContactCard";

export default function Home() {
  return (
    <main id="main-content" className="flex flex-1 flex-col gap-20 sm:gap-28">
      <Hero />
      <Projects withHeadline viewMoreVisible />
      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
