import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { PageHero, AssessmentBand } from "@/components/Sections";
import { LinkArrow } from "@/components/LinkArrow";

export const metadata: Metadata = {
  title: "About",
  description:
    "LotusCare pairs licensed nurses and dependable caregivers with Chicago families and keeps the same people in place, so care grows more personal over time.",
};

const differences = [
  {
    label: "Continuity",
    text: "The same faces, week after week not a rotation of strangers moving through your parent's home.",
  },
  {
    label: "Clinical skill",
    text: "Skilled nursing delivered by licensed nurses, not only aides but also the clinical parts handled properly.",
  },
  {
    label: "Communication",
    text: "You hear from us. Updates when something changes, and a real person when you call.",
  },
  {
    label: "A calm start",
    text: "Every relationship begins with a free home visit. We listen first, then build the plan.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Home care that stays with your family."
        lede="LotusCare pairs licensed nurses and dependable caregivers with Chicago families and keeps the same people in place, so care grows more personal over time, not less."
      />

      {/* Who we are */}
      <section className="py-20 lg:py-24">
        {/* Replaced lg:grid-cols-2 with a custom split */}
        <Container className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <Reveal>
            {/* Replaced aspect-[4/5] with aspect-[4/3] */}
            <div className="arc-cap relative aspect-[4/3] w-full overflow-hidden ring-1 ring-pine-900/6">
              <Image
                src="/13.jpg"
                alt="A LotusCare nurse with a client at home"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="mission-quote text-[clamp(1.5rem,2.8vw,2.2rem)]">
              We plan around the person first <em>the schedule comes after.</em>
            </p>
            <p className="mt-6 text-ink-700">
              LotusCare provides skilled nursing in the home by licensed
              personnel: rehabilitative and curative procedures, coordination of
              the care plan, and clear instruction for patients and their
              families.
            </p>
            <p className="mt-4 text-ink-700">
              Alongside that, our caregivers handle the everyday bathing, meals,
              mobility, companionship so daily life at home stays manageable and
              dignified. Every plan is built for one person, not a template.
            </p>
            <Link href="/services" className="editorial-link mt-8">
              <span>See what we do</span>
              <LinkArrow />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* What families notice */}
      <section className="bg-cream py-20 lg:py-24">
        <Container>
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Why LotusCare</p>
            <h2 className="display-lg mt-4">What families notice.</h2>
          </Reveal>
          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {differences.map((d, i) => (
              <Reveal key={d.label} delay={i * 70}>
                <div className="border-t-2 border-pine-900/15 pt-5">
                  <p className="eyebrow">{d.label}</p>
                  <p className="mt-3 max-w-md text-lg leading-8 text-ink-700">
                    {d.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Promise */}
      <section className="py-20 lg:py-24">
        <Container className="max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow">Our promise</p>
            <p className="mission-quote mt-5 text-[clamp(1.4rem,2.6vw,2rem)]">
              No rushing, no rotating strangers, and no being left in the dark{" "}
              <em>from the first visit onward.</em>
            </p>
            <Link
              href="/contact"
              className="editorial-link mt-8 justify-center"
            >
              <span>Request a free home assessment</span>
              <LinkArrow />
            </Link>
          </Reveal>
        </Container>
      </section>

      <AssessmentBand />
    </>
  );
}
