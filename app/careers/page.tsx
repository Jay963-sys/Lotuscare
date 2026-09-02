import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/Sections";
import { LinkArrow } from "@/components/LinkArrow";
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

      {/* Primary apply CTA → client's Google application form */}
      <section className="py-16 lg:py-20">
        <Container className="max-w-3xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-pine-800 px-8 py-12 text-center text-white sm:px-12">
              <p className="eyebrow text-blush-200">
                Careers with LotusCare Services
              </p>
              <h2 className="display-md mt-4 text-white">Apply now.</h2>
              <p className="lede mx-auto mt-4 max-w-xl text-sage-200">
                We're always hiring nurses and caregivers. Fill out our quick
                application and we'll be in touch.
              </p>
              <a
                href={careerLinks.applyForm}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-pine-900 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.5)] transition-all hover:-translate-y-0.5 hover:bg-cream"
              >
                Apply here
                <LinkArrow />
              </a>
            </div>
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
              <em>the skills, we'll grow together.</em>
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
