import Link from "next/link";
import Image from "next/image";

import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { AssessmentBand } from "@/components/Sections";
import { ServiceRow } from "@/components/Cards";
import { site, services, careerTracks } from "@/content/site";

function LinkArrow() {
  return (
    <svg
      className="editorial-link-arrow"
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M7 17 17 7M9 7h8v8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LotusMark({ light = false }: { light?: boolean }) {
  return (
    <span
      className={`lotus-mark ${light ? "lotus-mark-light" : ""}`}
      aria-hidden
    >
      <svg viewBox="0 0 44 30" fill="none">
        <path
          d="M22 27C14.2 27 8.3 22.4 6 15.2C12.2 15.4 17.1 17.7 22 23.2C26.9 17.7 31.8 15.4 38 15.2C35.7 22.4 29.8 27 22 27Z"
          fill="currentColor"
        />
        <path
          d="M22 23C18.7 17.1 18.5 10.2 22 3C25.5 10.2 25.3 17.1 22 23Z"
          fill="currentColor"
          opacity=".78"
        />
        <path
          d="M20.2 22.2C14.8 18.5 12 13.1 12.2 7.3C17.5 10.2 20.4 14.9 20.2 22.2Z"
          fill="currentColor"
          opacity=".58"
        />
        <path
          d="M23.8 22.2C29.2 18.5 32 13.1 31.8 7.3C26.5 10.2 23.6 14.9 23.8 22.2Z"
          fill="currentColor"
          opacity=".58"
        />
      </svg>
    </span>
  );
}

export default function HomePage() {
  const nursing = services.filter((s) => s.group === "Home Nursing");
  const homecare = services.filter((s) => s.group === "Home Care");

  return (
    <>
      {/* HERO */}
      <section className="lotus-hero relative overflow-hidden">
        <div className="lotus-hero-wash" aria-hidden />
        <Container className="relative z-10">
          <div className="lotus-hero-grid">
            <div className="lotus-hero-copy">
              <Reveal>
                <div className="lotus-kicker">
                  <LotusMark />
                  <span>Care beyond measure</span>
                </div>
              </Reveal>

              <Reveal delay={80}>
                <h1>
                  Care that feels like <em>home.</em>
                </h1>
              </Reveal>

              <Reveal delay={150}>
                <p className="lotus-hero-lede">
                  Skilled nursing and everyday home care for Chicago families so
                  a parent or partner can stay in the home they know, with the
                  right support close by.
                </p>
              </Reveal>

              <Reveal delay={220}>
                <div className="lotus-hero-actions">
                  <Button href={site.primaryCta.href} size="lg">
                    {site.primaryCta.label}
                  </Button>
                  <a href={site.phoneHref} className="lotus-text-cta">
                    <span>Speak with us</span>
                    <strong>{site.phone}</strong>
                  </a>
                </div>
              </Reveal>

              <Reveal delay={290}>
                <div className="lotus-proof-row">
                  <div className="lotus-proof-number">
                    <strong>10+</strong>
                    <span>YEARS</span>
                  </div>
                  <div>
                    <strong>Trusted by more than 220 Chicago families.</strong>
                    <span>The same team, from the first visit onward.</span>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={120} className="relative">
              <div
                className="relative aspect-[4/5] w-full overflow-hidden"
                style={{ borderRadius: "210px 210px 26px 26px" }} // your arch shape
              >
                <Image
                  src="/21.jpg"
                  alt="A caregiver embracing a client at home"
                  fill
                  priority
                  quality={90}
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover object-center"
                />
                <div className="lotus-hero-media-copy">
                  <span>LOTUSCARE</span>
                  <strong>
                    In their own home.
                    <br />
                    On their own terms.
                  </strong>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
        <div className="lotus-hero-strip">
          <Container>
            <div>
              <span>Skilled nursing</span>
              <i /> <span>Personal care</span>
              <i /> <span>Companionship</span>
              <i /> <span>Family support</span>
            </div>
          </Container>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="lotus-story section-space overflow-hidden">
        <Container>
          <div className="lotus-story-intro">
            <Reveal>
              <p className="eyebrow">Who we are</p>
            </Reveal>
            <Reveal delay={80}>
              <h2>
                Built around the person,
                <br />
                <em>not the paperwork.</em>
              </h2>
            </Reveal>
          </div>

          <div className="lotus-story-grid">
            <Reveal>
              <div className="lotus-story-photo">
                <Image
                  src="/2.jpg"
                  alt="LotusCare care taking place in a client's home"
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover"
                />
                <span className="lotus-photo-tag">THE LOTUSCARE APPROACH</span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="lotus-story-copy">
                <p className="lotus-large-quote">
                  Good care should make a home feel more like itself not less.
                </p>
                <p>
                  LotusCare provides skilled nursing in the home by licensed
                  personnel, alongside non-medical care for everyday living.
                  Every plan is shaped around one person&apos;s needs and
                  delivered by people who are sensitive to them.
                </p>
                <Link href="/about" className="editorial-link">
                  <span>More about our mission</span>
                  <LinkArrow />
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* SERVICES */}
      <section className="lotus-services relative overflow-hidden">
        <div className="lotus-services-word" aria-hidden>
          care
        </div>
        <Container className="relative z-10">
          <Reveal className="lotus-services-heading">
            <div>
              <p className="eyebrow">What we offer</p>
              <span className="section-index">01 / Services</span>
            </div>
            <h2>
              Two kinds of care.
              <br />
              <em>One team behind both.</em>
            </h2>
            <p>
              From a nurse after a hospital stay to a hand with the everyday,
              the care is matched to the person not just the task.
            </p>
          </Reveal>

          <div className="lotus-service-block">
            <Reveal>
              <div className="lotus-service-head">
                <span>01</span>
                <div>
                  <h3>Home Nursing</h3>
                  <p>Skilled · Licensed</p>
                </div>
                <Link href="/services" aria-label="Explore home nursing">
                  Explore <LinkArrow />
                </Link>
              </div>
            </Reveal>
            <div className="lotus-service-layout">
              <div className="lotus-service-list">
                {nursing.map((service, index) => (
                  <Reveal key={service.slug} delay={index * 45}>
                    <ServiceRow service={service} />
                  </Reveal>
                ))}
              </div>
              <Reveal delay={80}>
                <div className="lotus-service-photo lotus-service-photo-dark">
                  <Image
                    src="/15.jpg"
                    alt="LotusCare nurse supporting a client"
                    fill
                    sizes="(min-width: 1024px) 38vw, 100vw"
                    className="object-cover"
                  />
                  <div>
                    <span>Skilled support</span>
                    <strong>
                      The clinical parts,
                      <br />
                      done properly.
                    </strong>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="lotus-service-block lotus-service-block-home">
            <Reveal>
              <div className="lotus-service-head">
                <span>02</span>
                <div>
                  <h3>Home Care</h3>
                  <p>Everyday · Non-medical</p>
                </div>
                <Link href="/services" aria-label="Explore home care">
                  Explore <LinkArrow />
                </Link>
              </div>
            </Reveal>
            <div className="lotus-service-layout lotus-service-layout-reverse">
              <Reveal>
                <div className="lotus-service-photo">
                  <Image
                    src="/23.jpg"
                    alt="LotusCare caregiver providing everyday support"
                    fill
                    sizes="(min-width: 1024px) 38vw, 100vw"
                    className="object-cover"
                  />
                  <div>
                    <span>Everyday care</span>
                    <strong>
                      Independence lives
                      <br />
                      in the everyday.
                    </strong>
                  </div>
                </div>
              </Reveal>
              <div className="lotus-service-list">
                {homecare.map((service, index) => (
                  <Reveal key={service.slug} delay={index * 45}>
                    <ServiceRow service={service} />
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          <Reveal>
            <div className="lotus-services-footer">
              <p>Not sure what kind of support your family needs?</p>
              <Link href="/contact" className="editorial-link">
                <span>Let&apos;s figure it out together</span>
                <LinkArrow />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* BRAND PHILOSOPHY */}
      <section className="lotus-philosophy">
        <Container>
          <div className="lotus-philosophy-grid">
            <Reveal>
              <div className="lotus-philosophy-mark">
                <LotusMark />
                <span>
                  THE LOTUSCARE
                  <br />
                  STANDARD
                </span>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div>
                <p className="eyebrow">What care means to us</p>
                <h2>
                  Professional enough to trust.
                  <br />
                  <em>Human enough to feel.</em>
                </h2>
                <p>
                  We believe the best care is both capable and personal. It is
                  knowing the clinical details, while also noticing the small
                  things that make someone feel comfortable, respected, and at
                  home.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* PROCESS */}
      <section className="lotus-process section-space overflow-hidden">
        <Container>
          <Reveal className="max-w-3xl">
            <div className="section-intro-row">
              <p className="eyebrow">What to expect</p>
              <span className="section-index">03 / Getting started</span>
            </div>
            <h2 className="display-lg mt-5">
              Getting started <em>without the runaround.</em>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-700">
              We take the time to understand your family, build the right plan,
              and remain close as things change.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="lotus-process-feature">
              <div>
                <Image
                  src="/6.jpg"
                  alt="LotusCare caregiver spending time with a client"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="eyebrow">Our promise</span>
                <h3>
                  No rushing.
                  <br />
                  No guesswork.
                </h3>
                <p>
                  We believe families deserve time to ask questions, understand
                  their choices, and feel confident about the people coming into
                  their home.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="lotus-process-steps">
            {[
              {
                number: "01",
                label: "The first visit",
                title: "We listen.",
                text: "We come to you, at no cost, to understand what your loved one needs and what matters most to your family.",
              },
              {
                number: "02",
                label: "A plan that fits",
                title: "We design it together.",
                text: "A thoughtful care plan built around those needs, your schedule, your home, and your budget.",
              },
              {
                number: "03",
                label: "Your caregiver",
                title: "We make the match.",
                text: "A qualified caregiver or nurse who suits your family — not simply someone who can fill a shift.",
              },
              {
                number: "04",
                label: "From then on",
                title: "We stay close.",
                text: "We keep in touch, listen carefully, and adjust the plan as needs evolve over time.",
              },
            ].map((step, index) => (
              <Reveal key={step.number} delay={index * 60}>
                <div className="lotus-process-step">
                  <span>{step.number}</span>
                  <p>{step.label}</p>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* TESTIMONIALS */}
      <section className="lotus-testimonials overflow-hidden">
        <Container>
          <div className="lotus-testimonial-top">
            <Reveal>
              <div className="lotus-testimonial-intro">
                <span>04</span>
                <p>Voices from our families</p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <p className="lotus-testimonial-kicker">
                Care is remembered
                <br />
                <em>because people are.</em>
              </p>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div className="lotus-testimonial-feature">
              <div>
                <Image
                  src="/16.jpg"
                  alt="LotusCare client and caregiver"
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div>
                <div className="lotus-quote-mark">“</div>
                <blockquote>
                  I fell in love with LotusCare right from the free assessment.
                  They were so detailed about my mother&apos;s care and so kind
                  about it.
                </blockquote>
                <div className="lotus-author">
                  <span />
                  <div>
                    <strong>Kate W.</strong>
                    <small>Daughter of a LotusCare client</small>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={180}>
            <div className="lotus-testimonial-row">
              <div>
                <Image
                  src="/8.jpg"
                  alt="LotusCare care experience"
                  fill
                  sizes="(min-width: 768px) 30vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div>
                <p>
                  “My caregiver was so passionate about me, and always ready to
                  help in a professional way.”
                </p>
                <span>Tami W. · Client</span>
              </div>
              <div>
                <p>
                  “I&apos;ll keep telling anyone who cares to listen about the
                  care they gave our family.”
                </p>
                <span>James C. · Family member</span>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* CAREERS */}
      <section className="lotus-careers section-space">
        <Container>
          <div className="lotus-careers-grid">
            <Reveal>
              <div className="lotus-careers-photo">
                <Image
                  src="/9.jpg"
                  alt="LotusCare team member"
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />
                <span>The people behind the care.</span>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <div>
                <div className="section-intro-row">
                  <p className="eyebrow">Join our team</p>
                  <span className="section-index">05 / Careers</span>
                </div>
                <h2 className="display-lg mt-5">
                  The people are
                  <br />
                  <em>the whole service.</em>
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-8 text-ink-700">
                  Build a career that actually matters, on a schedule that fits
                  your life. If you&apos;re dependable and kind, we&apos;d like
                  to talk.
                </p>
                <div className="mt-8 flex flex-wrap gap-2.5">
                  {careerTracks.map((track) => (
                    <span key={track.id} className="career-pill">
                      {track.title}
                    </span>
                  ))}
                </div>
                <div className="mt-9">
                  <Button href="/careers" size="lg">
                    See open roles &amp; apply
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <AssessmentBand />
    </>
  );
}
