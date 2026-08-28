"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Container } from "./Container";
import { LotusMark } from "./LotusMark";
import { Button } from "./Button";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

const nav = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-pine-900/10 bg-ivory/92 shadow-[0_8px_30px_rgba(18,48,41,0.05)] backdrop-blur-xl"
          : "bg-ivory/75 backdrop-blur-md",
      )}
    >
      <Container className="flex h-[4.75rem] items-center justify-between gap-5">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label={`${site.name} home`}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-pine-900/10 bg-white transition-transform duration-300 group-hover:rotate-6">
            <LotusMark className="h-7 w-7 text-pine-700" />
          </span>

          <span className="font-display text-[1.35rem] font-semibold tracking-tight text-pine-900">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative text-[0.92rem] font-medium text-ink-700 transition-colors hover:text-pine-900"
            >
              {item.label}

              <span className="absolute -bottom-1 left-0 h-px w-0 bg-blush-600 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={site.phoneHref}
            className="hidden text-[0.88rem] font-semibold text-pine-800 lg:block"
          >
            {site.phone}
          </a>

          <Button href={site.primaryCta.href} size="md">
            Free assessment
          </Button>
        </div>

        <button
          type="button"
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-full border transition-all md:hidden",
            open
              ? "border-pine-900 bg-pine-900 text-white"
              : "border-pine-900/10 bg-white text-pine-900",
          )}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative block h-4 w-5">
            <span
              className={cn(
                "absolute left-0 h-0.5 w-5 bg-current transition-all duration-300",
                open ? "top-1.5 rotate-45" : "top-0.5",
              )}
            />

            <span
              className={cn(
                "absolute left-0 top-1.5 h-0.5 w-5 bg-current transition-opacity duration-200",
                open && "opacity-0",
              )}
            />

            <span
              className={cn(
                "absolute left-0 h-0.5 w-5 bg-current transition-all duration-300",
                open ? "top-1.5 -rotate-45" : "top-[0.65rem]",
              )}
            />
          </span>
        </button>
      </Container>

      <div
        id="mobile-nav"
        className={cn(
          "overflow-hidden border-t border-pine-900/10 bg-ivory transition-[max-height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden",
          open ? "max-h-[34rem]" : "max-h-0",
        )}
      >
        <Container className="py-5">
          <nav className="flex flex-col" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-pine-900/8 py-4 text-xl font-medium text-pine-900"
              >
                <span>{item.label}</span>
                <span className="text-blush-600">↗</span>
              </Link>
            ))}
          </nav>

          <div className="mt-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
              Talk to our team
            </p>

            <a
              href={site.phoneHref}
              className="font-display text-xl text-pine-900"
            >
              {site.phone}
            </a>

            <div className="mt-4">
              <Button href={site.primaryCta.href} size="lg" className="w-full">
                {site.primaryCta.label}
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
