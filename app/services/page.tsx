import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { PageHero, AssessmentBand } from "@/components/Sections";
import { LinkArrow } from "@/components/LinkArrow";
import { services } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Skilled home nursing and everyday home care from LotusCare in Chicago rehabilitative care, infusion therapy, personal care, homemaking and more.",
};

const groups = [
  {
    name: "Home Nursing",
    note: "Skilled · Licensed",
    intro:
      "For after a hospital stay, a new diagnosis, or an ongoing clinical need delivered at home by licensed nurses.",
  },
  {
    name: "Home Care",
    note: "Everyday · Non-medical",
    intro:
      "For when daily life gets harder a hand with meals, bathing, mobility and company, so home stays comfortable.",
  },
] as const;

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we offer"
        title="Two kinds of care. One team behind both."
        lede="Skilled home nursing for the clinical days and home care for the everyday ones matched to the person, and delivered by people who stay."
      />

      {/* Which one? prompt */}
      <section className="py-14">
        <Container>
          <Reveal>
            <div className="flex flex-col gap-4 border-y border-pine-900/12 py-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xl text-lg text-ink-700">
                Not sure which one your family needs? That&apos;s exactly what
                the free assessment is for.
              </p>
              <Link href="/contact" className="editorial-link">
                <span>Start with an assessment</span>
                <LinkArrow />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Chapters */}
      <section className="pb-16 lg:pb-20">
        <Container>
          {groups.map((group) => (
            <div key={group.name} className="mt-16 first:mt-0">
              <Reveal>
                <div className="chapter-head">
                  <h2 className="font-display text-[clamp(1.6rem,2.8vw,2.2rem)] text-pine-700">
                    {group.name}
                  </h2>
                  <span className="text-[0.8rem] uppercase tracking-[0.14em] text-ink-500">
                    {group.note}
                  </span>
                </div>
              </Reveal>

              <Reveal>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-ink-700">
                  {group.intro}
                </p>
              </Reveal>

              <div className="mt-4">
                {services
                  .filter((s) => s.group === group.name)
                  .map((s, i) => (
                    <Reveal key={s.slug} delay={i * 60}>
                      <article id={s.slug} className="srow scroll-mt-28">
                        <span className="st">{s.title}</span>
                        <span className="sd">{s.blurb}</span>
                      </article>
                    </Reveal>
                  ))}
              </div>
            </div>
          ))}
        </Container>
      </section>

      <AssessmentBand />
    </>
  );
}
