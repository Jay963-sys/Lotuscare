import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { PageHero, AssessmentBand } from "@/components/Sections";

export const metadata: Metadata = {
  title: "About",
  description:
    "LotusCare partners with families to deliver skilled home nursing and compassionate home care across Chicago.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Our mission is to make quality care feel like family."
        lede="We partner with our clients to deliver the highest level of care achievable — for maintaining and enhancing well-being, at home."
      />

      <section className="py-20 lg:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="arc-cap photo-warm aspect-square w-full overflow-hidden ring-1 ring-pine-900/6" />
          </Reveal>
          <Reveal delay={100}>
            <p className="mission-quote text-[clamp(1.5rem,2.8vw,2.2rem)]">
              Care delivered <em>where people heal best</em> — in the comfort and
              dignity of their own home.
            </p>
            <p className="mt-6 text-ink-700">
              LotusCare offers skilled nursing services provided in the client&apos;s
              home by licensed nursing personnel — the initiation and implementation
              of curative or rehabilitative procedures, coordination of the plan of
              care, and patient and family instruction.
            </p>
            <p className="mt-4 text-ink-700">
              We also provide non-medical home care to individuals who need
              assistance in their own homes and communities — helping them maintain
              their independence and well-being, delivered by qualified,
              compassionate home care workers.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-cream py-16 lg:py-20">
        <Container className="max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow">Our promise</p>
            <p className="mission-quote mt-5 text-[clamp(1.4rem,2.6vw,2rem)]">
              Every family we serve is treated as our own — with skill, warmth and
              respect, from the first visit onward.
            </p>
            <Link
              href="/contact"
              className="link-underline mt-8 inline-block font-semibold text-blush-700"
            >
              Request a free home assessment &rarr;
            </Link>
          </Reveal>
        </Container>
      </section>

      <AssessmentBand />
    </>
  );
}
