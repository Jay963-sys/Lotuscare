import Link from "next/link";
import { Container } from "./Container";
import { LotusMark } from "./LotusMark";
import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 bg-pine-900 text-sage-100">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <LotusMark className="h-9 w-9 text-sage-200" />
              <span className="font-display text-[1.35rem] font-semibold text-white">
                {site.name}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-[0.95rem] leading-relaxed text-sage-200/85">
              {site.tagline}
            </p>
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
                  <Link href={l.href} className="text-sage-100/85 hover:text-white">
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
