import { SITE } from "@/shared/lib/constants";
import { ArrowUpRightIcon, Button } from "@/shared/ui";
import { HERO } from "../data/home.data";
import TechMarquee from "./TechMarquee";

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative scroll-mt-16 overflow-hidden lg:scroll-mt-0"
    >
      <div aria-hidden="true" className="bg-grid absolute inset-0" />
      <div
        aria-hidden="true"
        className="aurora -top-48 left-[10%] size-[34rem] animate-drift bg-[var(--glow-1)]"
      />
      <div
        aria-hidden="true"
        className="aurora top-10 right-[-10%] size-[28rem] animate-drift bg-[var(--glow-2)] [animation-delay:-8s]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 px-6 pt-12 pb-16 sm:pt-16 sm:pb-20 lg:px-10 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="animate-fade-up">
          <p className="mb-5 font-mono text-xs tracking-widest text-accent uppercase">
            {SITE.name} — {SITE.role}
          </p>

          {/* Thai stacks vowels and tone marks, so it needs looser leading than Latin. */}
          <h1 className="text-gradient pb-2 text-5xl leading-[1.25] font-semibold tracking-tight text-balance sm:text-6xl sm:leading-[1.25] 2xl:text-7xl 2xl:leading-[1.25]">
            {HERO.headline.map((phrase) => (
              <span key={phrase} className="inline-block">
                {phrase}{" "}
              </span>
            ))}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
            {HERO.intro}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="#projects">
              {HERO.primaryAction}
              <ArrowUpRightIcon />
            </Button>
            <Button href="#contact" variant="outline">
              {HERO.secondaryAction}
            </Button>
          </div>
        </div>

        <CodeCard />
      </div>

      <TechMarquee />
    </section>
  );
}

/** Decorative only — always dark, in both themes. */
function CodeCard() {
  return (
    <div
      aria-hidden="true"
      className="glow-border hidden animate-fade-up rounded-2xl bg-void shadow-[0_30px_80px_-20px_var(--glow-1)] [animation-delay:150ms] xl:block"
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
        {/* macOS-style window buttons */}
        <span className="size-3 rounded-full bg-[radial-gradient(circle_at_35%_30%,#ff9c96,#ff5f57_55%,#d63a33)]" />
        <span className="size-3 rounded-full bg-[radial-gradient(circle_at_35%_30%,#ffd978,#febc2e_55%,#d99a0b)]" />
        <span className="size-3 rounded-full bg-[radial-gradient(circle_at_35%_30%,#7ee88a,#28c840_55%,#169a2c)]" />
        <span className="ml-3 font-mono text-xs text-white/50">
          developer.ts
        </span>
      </div>
      <pre className="overflow-x-auto p-6 font-mono text-[13px] leading-7 text-white/90">
        <code>
          <span className="text-[#7aa5ff]">const</span> developer = {"{"}
          {"\n  "}name:{" "}
          <span className="text-[#8be9fd]">&quot;{SITE.name}&quot;</span>,
          {"\n  "}
          role: <span className="text-[#8be9fd]">&quot;{SITE.role}&quot;</span>,
          {"\n  "}stack: [
          {HERO.snippet.stack.map((item) => (
            <span key={item}>
              {"\n    "}
              <span className="text-[#8be9fd]">&quot;{item}&quot;</span>,
            </span>
          ))}
          {"\n  "}],{"\n  "}focus:{" "}
          <span className="text-[#8be9fd]">
            &quot;{HERO.snippet.focus}&quot;
          </span>
          ,{"\n"}
          {"}"};
          <span className="ml-1 inline-block h-4 w-2 animate-blink bg-[#7aa5ff] align-middle" />
        </code>
      </pre>
    </div>
  );
}
