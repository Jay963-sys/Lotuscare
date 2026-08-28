import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import { site } from "@/content/site";

const socialLabels: Record<string, string> = {
  facebook: "Facebook",
  instagram: "Instagram",
  linkedin: "LinkedIn",
};

export function Footer() {
  const year = new Date().getFullYear();
  const socials = Object.entries(site.socials).filter(([, url]) => url);

  return (
    <footer className="mt-24 bg-pine-900 text-sage-100">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Image
              src="/lotuscare-lockup-white.png"
              alt={site.name}
              width={662}
              height={176}
              className="h-10 w-auto"
            />
            <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed text-sage-200/85">
              {site.tagline}
            </p>

            {socials.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[0.9rem]">
                {socials.map(([key, url]) => (
                  <li key={key}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sage-100/85 hover:text-white"
                    >
                      {socialLabels[key] ?? key}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-sage-200/70">
              Explore
            </h4>
            <ul className="mt-4 space-y-2.5 text-[0.95rem]">
              {[
                { href: "/about", label: "About us" },
                { href: "/services", label: "Services" },
                { href: "/careers", label: "Careers" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sage-100/85 hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-sage-200/70">
              Get in touch
            </h4>
            <address className="mt-4 space-y-2.5 text-[0.95rem] not-italic text-sage-100/85">
              <p>
                {site.address.line1}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </p>
              <p>
                <a href={site.phoneHref} className="hover:text-white">
                  {site.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </p>
              <p className="text-sage-200/70">{site.hours}</p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-sage-200/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p>Home health care in Chicago, Illinois.</p>
        </div>
      </Container>
    </footer>
  );
}
