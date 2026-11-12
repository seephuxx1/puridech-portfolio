import { SITE } from "@/shared/lib/constants";
import { ArrowUpRightIcon, Button } from "@/shared/ui";
import { CONTACT } from "../data/contact.data";

/** The panel is always dark with white text, in both themes. */
export default function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-16 border-t border-line px-6 py-24 sm:py-28 lg:scroll-mt-0 lg:px-10"
    >
      <div className="glow-border reveal relative mx-auto w-full max-w-6xl overflow-hidden rounded-3xl bg-void px-8 py-16 text-white [--grid:rgb(255_255_255/0.06)] sm:px-16 sm:py-20">
        <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-60" />
        <div
          aria-hidden="true"
          className="aurora -top-40 -right-24 size-[28rem] animate-drift bg-[rgb(59_107_255/0.35)]"
        />
        <div
          aria-hidden="true"
          className="aurora -bottom-48 -left-24 size-[24rem] animate-drift bg-[rgb(34_211_238/0.18)] [animation-delay:-8s]"
        />

        <div className="relative max-w-2xl">
          <p className="mb-4 flex items-center gap-3 text-xs font-medium text-[#9dbcff]">
            <span className="font-mono tracking-widest">{"// 05"}</span>
            <span className="h-px w-8 bg-[#9dbcff]/50" />
            <span className="tracking-wide">{CONTACT.eyebrow}</span>
          </p>
          <h2 className="text-4xl leading-snug font-semibold tracking-tight text-balance sm:text-5xl sm:leading-snug">
            {CONTACT.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/75">{CONTACT.description}</p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={`mailto:${SITE.email}`} variant="inverse" className="w-full sm:w-auto">
              {SITE.email}
              <ArrowUpRightIcon />
            </Button>
            {SITE.socials.map((social) => (
              <Button
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                className="w-full sm:w-auto"
              >
                {social.label}
                <ArrowUpRightIcon />
              </Button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
