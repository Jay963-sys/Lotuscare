import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/Sections";
import { ApplicationForm } from "@/components/ApplicationForm";
import { LinkArrow } from "@/components/LinkArrow";
import { careerTracks, careerLinks } from "@/content/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join LotusCare. Browse openings on Indeed or LinkedIn, or apply directly — every application is read by a real person.",
};

export default function CareersPage() {
  const hasIndeed = Boolean(careerLinks.indeed);
  const hasLinkedIn = Boolean(careerLinks.linkedin);

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Care work worth staying for."
        lede="We're building a team of dependable, compassionate people to care for families across Chicago. There's more than one way to join us."
      />

      <section className="py-16 lg:py-20">
        <Container className="max-w-3xl">
          <Reveal>
            <p className="mission-quote text-[clamp(1.4rem,2.6vw,2rem)]">
              We hire for kindness first.{" "}
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

      {/* Ways to apply */}
      <section className="bg-cream py-16 lg:py-20">
        <Container className="max-w-3xl">
          <Reveal>
            <p className="eyebrow">Ways to apply</p>
            <h2 className="display-md mt-4">Two ways in.</h2>
          </Reveal>

          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {hasIndeed && (
              <Reveal>
                <div className="flex h-full flex-col border-t-2 border-pine-900/15 pt-5">
                  <h3 className="font-display text-[1.25rem]">
                    Browse openings
                  </h3>
                  <p className="mt-2 flex-1 text-[0.95rem] text-ink-600">
                    See our current roles and apply on Indeed.
                  </p>
                  <a
                    href={careerLinks.indeed}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="editorial-link mt-4"
                  >
                    <span>View on Indeed</span>
                    <LinkArrow />
                  </a>
                </div>
              </Reveal>
            )}

            {hasLinkedIn && (
              <Reveal delay={80}>
                <div className="flex h-full flex-col border-t-2 border-pine-900/15 pt-5">
                  <h3 className="font-display text-[1.25rem]">
                    Connect on LinkedIn
                  </h3>
                  <p className="mt-2 flex-1 text-[0.95rem] text-ink-600">
                    Find our openings and follow LotusCare on LinkedIn.
                  </p>
                  <a
                    href={careerLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="editorial-link mt-4"
                  >
                    <span>View on LinkedIn</span>
                    <LinkArrow />
                  </a>
                </div>
              </Reveal>
            )}

            <Reveal delay={160}>
              <div className="flex h-full flex-col border-t-2 border-blush-500 pt-5">
                <h3 className="font-display text-[1.25rem]">Apply directly</h3>
                <p className="mt-2 flex-1 text-[0.95rem] text-ink-600">
                  Don&apos;t see the right role? Apply anyway — we keep every
                  application on file for when one opens.
                </p>
                <a href="#apply" className="editorial-link mt-4">
                  <span>Apply below</span>
                  <LinkArrow />
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Direct application form */}
      <section id="apply" className="scroll-mt-24 py-20">
        <Container className="max-w-2xl">
          <Reveal>
            <p className="eyebrow">Apply directly</p>
            <h2 className="display-md mt-4">Tell us about yourself.</h2>
            <p className="mt-4 text-ink-700">
              Complete the form below and our team will be in touch if
              there&apos;s a fit — even when we&apos;re not actively hiring for
              your role. Every application is read by a real person.
            </p>
          </Reveal>
          <Reveal delay={120} className="mt-10">
            <ApplicationForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
