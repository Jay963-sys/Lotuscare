import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/Sections";
import { LinkArrow } from "@/components/LinkArrow";
import { ApplicationForm } from "@/components/ApplicationForm";
import { careerTracks, careerLinks } from "@/content/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "We're always hiring nurses and caregivers at LotusCare Services. Apply online, or browse current openings on Indeed.",
};

export default function CareersPage() {
  const hasIndeed = Boolean(careerLinks.indeed);
  const hasLinkedIn = Boolean(careerLinks.linkedin);

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="We're always hiring nurses and caregivers."
        lede="Compassionate people make LotusCare. If that's you, we'd love to hear from you — apply anytime, even when a specific role isn't posted."
      />

      {/* Primary apply CTA → in-page application form, emailed to the team */}
      <section className="py-16 lg:py-20">
        <Container className="max-w-3xl">
          <Reveal>
            <ApplicationForm siteName="LotusCare Services" />
          </Reveal>

          {/* Secondary: browse listed roles */}
          {(hasIndeed || hasLinkedIn) && (
            <Reveal delay={80}>
              <div className="mt-8 flex flex-col items-center justify-center gap-x-8 gap-y-3 text-center sm:flex-row">
                <span className="text-ink-500">
                  Prefer to browse current openings?
                </span>
                {hasIndeed && (
                  <a
                    href={careerLinks.indeed}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="editorial-link"
                  >
                    <span>View on Indeed</span>
                    <LinkArrow />
                  </a>
                )}
                {hasLinkedIn && (
                  <a
                    href={careerLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="editorial-link"
                  >
                    <span>View on LinkedIn</span>
                    <LinkArrow />
                  </a>
                )}
              </div>
            </Reveal>
          )}
        </Container>
      </section>

      {/* Roles context */}
      <section className="bg-cream py-16 lg:py-20">
        <Container className="max-w-3xl">
          <Reveal>
            <p className="mission-quote text-[clamp(1.4rem,2.6vw,2rem)]">
              We hire for kindness first —{" "}
              <em>the skills, we&apos;ll grow together.</em>
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {careerTracks.map((t) => (
                <div key={t.id} className="border-t-2 border-pine-900/16 pt-4">
                  <h3 className="font-display text-[1.3rem]">{t.title}</h3>
                  <p className="mt-2 text-[0.98rem] text-ink-600">{t.blurb}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
