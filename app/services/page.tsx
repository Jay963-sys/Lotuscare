import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { PageHero, AssessmentBand } from "@/components/Sections";
import { services } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Home Nursing and Home Care services from LotusCare — rehabilitative care, infusion therapy, personal care, homemaking and more.",
};

export default function ServicesPage() {
  const groups = [
    { name: "Home Nursing", note: "Skilled · licensed" },
    { name: "Home Care", note: "Everyday · non-medical" },
  ] as const;

  return (
    <>
      <PageHero
        eyebrow="What we offer"
        title="Skilled nursing and everyday care, under one caring roof."
        lede="From clinical home nursing to help with daily living, every service is delivered with the same standard of compassion."
      />

      <section className="py-16 lg:py-20">
        <Container>
          {groups.map((group) => (
            <div key={group.name} className="mt-14 first:mt-0">
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
              {services
                .filter((s) => s.group === group.name)
                .map((s, i) => (
                  <Reveal key={s.slug} delay={i * 60}>
                    <article
                      id={s.slug}
                      className="srow scroll-mt-28"
                    >
                      <span className="st">{s.title}</span>
                      <span className="sd">{s.blurb}</span>
                    </article>
                  </Reveal>
                ))}
            </div>
          ))}
        </Container>
      </section>

      <AssessmentBand />
    </>
  );
}
