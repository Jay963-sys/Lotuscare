import Image from "next/image";

import { Container } from "./Container";
import { Button } from "./Button";
import { Reveal } from "./Reveal";
import { site } from "@/content/site";

export function AssessmentBand() {
  return (
    <section className="assessment-section">
      <div className="assessment-inner">
        <div className="assessment-image">
          <Image
            src="/17.jpg"
            alt="LotusCare caregiver spending time with a client"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="assessment-overlay" />

        <div className="assessment-decoration assessment-decoration-one" />
        <div className="assessment-decoration assessment-decoration-two" />

        <Container className="relative z-10 py-24 sm:py-28 lg:py-32">
          <Reveal>
            <div className="assessment-content">
              <p className="eyebrow text-blush-200">
                Start with a conversation
              </p>

              <h2>
                A free home assessment.
                <br />
                <span>No obligation.</span>
              </h2>

              <p>
                Tell us about your loved one and we'll design a thoughtful care
                plan around their needs usually within one business day.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href={site.primaryCta.href} size="lg" variant="onDark">
                  {site.primaryCta.label}
                </Button>

                <a href={site.phoneHref} className="assessment-phone">
                  or call {site.phone}
                </a>
              </div>

              <div className="assessment-bottom">
                <span />
                <p>Chicago · Compassionate · Personal</p>
                <span />
              </div>
            </div>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-pine-900/8 bg-cream/60 py-16 sm:py-20 lg:py-24">
      <div
        aria-hidden
        className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blush-100/70"
      />

      <div
        aria-hidden
        className="absolute -bottom-20 left-0 h-52 w-52 rounded-full bg-sage-100/80 blur-2xl"
      />

      <Container className="relative">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>

          <h1 className="display-lg mt-5 max-w-4xl">{title}</h1>

          {lede && (
            <p className="lede mt-6 max-w-2xl text-[1.1rem] leading-8">
              {lede}
            </p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
