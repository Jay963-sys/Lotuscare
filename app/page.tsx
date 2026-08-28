import Link from "next/link";
import Image from "next/image";

import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { AssessmentBand } from "@/components/Sections";
import { ServiceRow } from "@/components/Cards";
import { site, services, careerTracks } from "@/content/site";

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
            <Reveal>
              <div className="hero-kicker">
                <span className="hero-kicker-dot" />
                <span>Home health care · Chicago</span>
              </div>
            </Reveal>

            <Reveal delay={70}>
              <h1 className="hero-title mt-7">
                Care that feels
                <br />
                <span className="hero-title-accent">like home.</span>
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="hero-copy mt-7 max-w-xl">
                Skilled nursing and compassionate home care that helps your
                loved ones live safely, comfortably, and independently in the
                place they know best.
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

                  <span>
                    Skilled nurses. Thoughtful caregivers. One connected team.
                  </span>
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
                  Compassionate care,
                  <br />
                  in familiar surroundings.
                </span>
              </div>

              <div className="hero-floating-card">
                <span className="hero-floating-icon">✦</span>

                <div>
                  <strong>Care begins with listening.</strong>
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
              The best care doesn't just treat a need.
              <em> It cares for the whole person.</em>
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-ink-700">
              LotusCare provides skilled nursing in the home by licensed
              personnel, alongside non-medical care for everyday living. Every
              plan is shaped around one person's needs and delivered by people
              who are sensitive to them.
            </p>

            <Link href="/about" className="editorial-link mt-8">
              <span>More about our mission</span>
              <span aria-hidden>↗</span>
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
                  Care designed around
                  <br />
                  real life.
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
              <span className="text-blush-600">
                One standard of compassion.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-700">
              From clinical support to the everyday moments that make a house
              feel like home, our care is shaped around the person — not just
              the task.
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
                  Clinical expertise,
                  <br />
                  delivered with humanity.
                </h3>

                <p>
                  Professional care should never feel cold. We combine
                  experience and clinical skill with genuine attentiveness.
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
                  Sometimes the smallest
                  <br />
                  moments matter most.
                </h3>

                <p>
                  From daily routines to companionship, we're here to make life
                  at home feel easier, safer, and more comfortable.
                </p>

                <Link href="/services" className="editorial-link mt-6">
                  <span>Explore our services</span>
                  <span aria-hidden>↗</span>
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
                <span>Thoughtful care</span>
                <strong>Made personal.</strong>
              </div>
            </div>
          </Reveal>

          <Reveal delay={170}>
            <div className="services-bottom-cta">
              <p>Not sure what kind of support your family needs?</p>

              <Link href="/contact" className="editorial-link">
                <span>Let's figure it out together</span>
                <span aria-hidden>↗</span>
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
              Getting started should feel
              <span className="font-display italic text-blush-600">
                {" "}
                simple.
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
                      assessment. They were so detailed about my mother's care —
                      and so kind about it.
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
                  “My caregiver was so passionate about me, and always ready to
                  help in a professional way.”
                </p>

                <span>Tami W. · Client</span>
              </div>

              <div>
                <p>
                  “I'll keep telling anyone who cares to listen about the care
                  they gave our family.”
                </p>

                <span>James C. · Family member</span>
              </div>

              <div className="testimonial-secondary-note">
                <span>Good care is personal.</span>
                <span>And people remember how you made them feel.</span>
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
                <strong>Good people. Good care.</strong>
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
                Compassionate people
                <br />
                <span className="text-blush-600">make LotusCare.</span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-ink-700">
                Build a career that changes lives — on a schedule that works for
                you. We're always looking for people who lead with kindness,
                professionalism, and heart.
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
