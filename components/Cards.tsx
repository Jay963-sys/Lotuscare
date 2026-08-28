import Link from "next/link";
import type { Service } from "@/content/site";

export function ServiceRow({ service }: { service: Service }) {
  return (
    <Link
      href={`/services#${service.slug}`}
      className="srow group"
      aria-label={`Learn more about ${service.title}`}
    >
      <span className="st">{service.title}</span>

      <span className="sd">{service.blurb}</span>

      <span className="sarrow" aria-hidden>
        ↗
      </span>
    </Link>
  );
}

export function ExpectStep({
  label,
  title,
  children,
  first,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
  first?: boolean;
}) {
  return (
    <div className={first ? "estep first" : "estep"}>
      <p className="elabel">{label}</p>
      <h3 className="mt-2.5 font-display text-[1.3rem]">{title}</h3>
      <p className="mt-2 text-[0.98rem] text-ink-600">{children}</p>
    </div>
  );
}
