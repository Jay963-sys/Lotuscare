import Link from "next/link";
import Image from "next/image";

import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { AssessmentBand } from "@/components/Sections";
import { ServiceRow } from "@/components/Cards";
import { site, services, careerTracks } from "@/content/site";

/* Small drawn arrow used by editorial links — replaces the ↗ glyph. */
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

export default function HomePage() {
  const nursing = services.filter((s) => s.group === "Home Nursing");
  const homecare = services.filter((s) => s.group === "Home Care");

  return (
    <>
      {/* ============================================================
          HERO
      ============================================================ */}
      <section className="hero-section relative overflow-hidden">
        <div className="hero-glow hero-glow-one" aria-hidden />
        <div className="hero-glow hero-glow-two" aria-hidden />

        <Container className="relative grid items-center gap-12 py-12 sm:py-16 lg:min-h-[calc(100vh-4.75rem)] lg:grid-cols-[0.94fr_1.06fr] lg:gap-16 lg:py-20">
          <div className="relative z-10">
            <Reveal delay={70}>
              <h1 className="hero-title mt-7">
                Staying home shouldn&apos;t
                <br />
                <span className="hero-title-accent">mean managing alone.</span>
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="hero-copy mt-7 max-w-xl">
                Skilled nursing and everyday home care for Chicago families so a
                parent or partner can stay in the home they know, with the right
                support close by.
              </p>
            </Reveal>

            <Reveal delay={210}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button href={site.primaryCta.href} size="lg">
                  {site.primaryCta.label}
                </Button>

                <a href={site.phoneHref} className="hero-phone">
                  <span>Speak with us</span>
                  <strong>{site.phone}</strong>
                </a>
              </div>
            </Reveal>

            <Reveal delay={290}>
              <div className="hero-trust mt-10">
                <div className="hero-trust-mark">
                  <span>10+</span>
                  <small>YEARS</small>
                </div>

                <div>
                  <p>
                    Trusted by more than <strong>220 Chicago families</strong>.
                  </p>

                  <span>The same team, from the first visit onward.</span>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={160} className="relative">
            <div className="hero-visual">
              <div className="hero-photo">
                <Image
                  src="/1.jpg"
                  alt="LotusCare caregiver providing care at home"
                  fill
                  priority
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="hero-photo-overlay" />

              <div className="hero-photo-caption">
                <span className="hero-caption-line" />
                <span>
                  In their own home,
                  <br />
                  on their own terms.
                </span>
              </div>

              <div className="hero-floating-card">
                <span className="hero-floating-icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M12 3c2.7 3.1 4 6.2 4 9a4 4 0 1 1-8 0c0-2.8 1.3-5.9 4-9Z" />
                  </svg>
                </span>

                <div>
                  <strong>It starts with a home visit.</strong>
                  <span>Free, no-obligation assessment</span>
                </div>
              </div>

              <div className="hero-orbit hero-orbit-one" aria-hidden />
              <div className="hero-orbit hero-orbit-two" aria-hidden />
            </div>
          </Reveal>
        </Container>

        <div className="hero-bottom-note">
          <Container className="flex items-center justify-between gap-4">
            <span>Skilled nursing</span>
            <span className="hero-note-divider" />
            <span>Personal care</span>
            <span className="hero-note-divider" />
            <span>Companionship</span>
            <span className="hero-note-divider" />
            <span>Family support</span>
          </Container>
        </div>
      </section>

      {/* ============================================================
          WHO WE ARE
      ============================================================ */}
      <section className="section-space overflow-hidden">
        <Container className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow mb-6">Who we are</p>

            <h2 className="mission-title">
              Built around the person,
              <em> not the paperwork.</em>
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-ink-700">
              LotusCare provides skilled nursing in the home by licensed
              personnel, alongside non-medical care for everyday living. Every
              plan is shaped around one person&apos;s needs and delivered by
              people who are sensitive to them.
            </p>

            <Link href="/about" className="editorial-link mt-8">
              <span>More about our mission</span>
              <LinkArrow />
            </Link>
          </Reveal>

          <Reveal delay={100}>
            <div className="mission-photo-wrap">
              <div className="mission-photo">
                <Image
                  src="/2.jpg"
                  alt="LotusCare care taking place in a client's home"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="mission-photo-frame" />

              <div className="mission-note">
                <span>01</span>
                <p>
                  Care built around
                  <br />
                  one person&apos;s day.
                </p>
              </div>

              <div className="mission-photo-label">
                <span>THE LOTUSCARE APPROACH</span>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ============================================================
          SERVICES
      ============================================================ */}
      <section className="services-section relative overflow-hidden">
        <div className="services-watermark" aria-hidden>
          Care
        </div>

        <Container className="relative z-10 py-24 sm:py-28 lg:py-32">
          <Reveal className="max-w-3xl">
            <div className="section-intro-row">
              <p className="eyebrow">What we offer</p>
              <span className="section-index">02 / Services</span>
            </div>

            <h2 className="display-lg mt-5">
              Two kinds of care.
              <br />
              <span className="text-blush-600">One team behind both.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-700">
              From a nurse after a hospital stay to a hand with the everyday,
              the care is matched to the person not just the task.
            </p>
          </Reveal>

          {/* Nursing */}
          <div className="mt-16">
            <Reveal>
              <div className="service-chapter-heading">
                <div>
                  <span className="service-number">01</span>
                  <h3>Home Nursing</h3>
                </div>

                <span>Skilled · Licensed</span>
              </div>
            </Reveal>

            <div className="service-list">
              {nursing.map((service, index) => (
                <Reveal key={service.slug} delay={index * 55}>
                  <ServiceRow service={service} />
                </Reveal>
              ))}
            </div>
          </div>

          {/* Services image feature */}
          <Reveal delay={100}>
            <div className="service-image-feature">
              <div className="service-image-feature-photo">
                <Image
                  src="/3.jpg"
                  alt="LotusCare nurse supporting a client"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>

              <div className="service-image-feature-content">
                <span className="eyebrow text-blush-200">Skilled support</span>

                <h3>
                  The clinical parts,
                  <br />
                  done properly.
                </h3>

                <p>
                  Wound care, medications, recovery after surgery handled by
                  licensed nurses who explain what they&apos;re doing, and why.
                </p>
              </div>

              <div className="service-feature-number">01</div>
            </div>
          </Reveal>

          {/* Home care */}
          <div className="mt-20">
            <Reveal>
              <div className="service-chapter-heading">
                <div>
                  <span className="service-number">02</span>
                  <h3>Home Care</h3>
                </div>

                <span>Everyday · Non-medical</span>
              </div>
            </Reveal>

            <div className="service-list">
              {homecare.map((service, index) => (
                <Reveal key={service.slug} delay={index * 55}>
                  <ServiceRow service={service} />
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={100}>
            <div className="homecare-image-feature">
              <div className="homecare-image">
                <Image
                  src="/4.jpg"
                  alt="LotusCare caregiver providing everyday support"
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="homecare-copy">
                <span className="eyebrow">Everyday care</span>

                <h3>
                  Independence lives
                  <br />
                  in the everyday.
                </h3>

                <p>
                  Meals, bathing, a walk to the mailbox, a bit of company the
                  ordinary things that keep someone in their own home.
                </p>

                <Link href="/services" className="editorial-link mt-6">
                  <span>Explore our services</span>
                  <LinkArrow />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Supporting gallery */}
          <Reveal delay={140}>
            <div className="mini-photo-strip">
              <div className="mini-photo mini-photo-large">
                <Image
                  src="/14.jpg"
                  alt="LotusCare caregiver and client"
                  fill
                  sizes="(min-width: 1024px) 75vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="mini-photo-caption">
                <span>Familiar faces</span>
                <strong>Week after week.</strong>
              </div>
            </div>
          </Reveal>

          <Reveal delay={170}>
            <div className="services-bottom-cta">
              <p>Not sure what kind of support your family needs?</p>

              <Link href="/contact" className="editorial-link">
                <span>Let&apos;s figure it out together</span>
                <LinkArrow />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ============================================================
          PROCESS
      ============================================================ */}
      <section className="section-space process-section overflow-hidden">
        <Container>
          <Reveal className="max-w-3xl">
            <div className="section-intro-row">
              <p className="eyebrow">What to expect</p>
              <span className="section-index">03 / Getting started</span>
            </div>

            <h2 className="display-lg mt-5">
              Getting started
              <span className="font-display italic text-blush-600">
                {" "}
                without the runaround.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-700">
              We take the time to understand your family, build the right plan,
              and remain close as things change.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="process-feature">
              <div className="process-feature-image">
                <Image
                  src="/6.jpg"
                  alt="LotusCare caregiver spending time with a client"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="process-feature-copy">
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

          <div className="process-timeline mt-16">
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
              <Reveal key={step.number} delay={index * 70}>
                <div className="process-item">
                  <div className="process-top">
                    <span className="process-number">{step.number}</span>

                    {index < 3 && <span className="process-connector" />}
                  </div>

                  <p className="elabel">{step.label}</p>

                  <h3>{step.title}</h3>

                  <p>{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================================
          TESTIMONIALS
      ============================================================ */}
      <section className="testimonial-section relative overflow-hidden">
        <div className="testimonial-glow" aria-hidden />

        <Container className="relative z-10 py-24 sm:py-28 lg:py-32">
          <div className="testimonial-layout">
            <Reveal>
              <div className="testimonial-label">
                <span>04</span>
                <p>Voices from our families</p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div>
                <div className="testimonial-feature">
                  <div className="testimonial-image">
                    <Image
                      src="/7.jpg"
                      alt="LotusCare client and caregiver"
                      fill
                      sizes="(min-width: 768px) 28vw, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="testimonial-copy">
                    <div className="testimonial-mark">&ldquo;</div>

                    <blockquote className="testimonial-quote">
                      I fell in love with LotusCare right from the free
                      assessment. They were so detailed about my mother&apos;s
                      care and so kind about it.
                    </blockquote>

                    <div className="testimonial-author">
                      <span className="testimonial-author-line" />
                      <div>
                        <strong>Kate W.</strong>
                        <span>Daughter of a LotusCare client</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <div className="testimonial-secondary">
              <div className="testimonial-secondary-image">
                <Image
                  src="/8.jpg"
                  alt="LotusCare care experience"
                  fill
                  sizes="(min-width: 768px) 25vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div>
                <p>
                  &ldquo;My caregiver was so passionate about me, and always
                  ready to help in a professional way.&rdquo;
                </p>

                <span>Tami W. · Client</span>
              </div>

              <div>
                <p>
                  &ldquo;I&apos;ll keep telling anyone who cares to listen about
                  the care they gave our family.&rdquo;
                </p>

                <span>James C. · Family member</span>
              </div>

              <div className="testimonial-secondary-note">
                <span>Good care is personal.</span>
                <span>You remember the people who show up.</span>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ============================================================
          CAREERS
      ============================================================ */}
      <section className="section-space careers-section">
        <Container className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <div className="careers-photo-wrap">
              <div className="careers-photo">
                <Image
                  src="/9.jpg"
                  alt="LotusCare team member"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="careers-photo-label">
                <span>LOTUSCARE</span>
                <strong>The people behind the care.</strong>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div>
              <div className="section-intro-row">
                <p className="eyebrow">Join our team</p>
                <span className="section-index">05 / Careers</span>
              </div>

              <h2 className="display-lg mt-5">
                The people are
                <br />
                <span className="text-blush-600">the whole service.</span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-ink-700">
                Build a career that actually matters, on a schedule that fits
                your life. If you&apos;re dependable and kind, we&apos;d like to
                talk.
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
        </Container>
      </section>

      <AssessmentBand />
    </>
  );
}
