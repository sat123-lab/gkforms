import { Reveal } from "@/components/Reveal";
import type { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: PageHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  return (
    <Reveal className={`${alignClass} ${className}`}>
      <p className="pip-section-sub">{eyebrow}</p>
      <h1 className="pip-section-title mt-2 text-3xl md:text-4xl">{title}</h1>
      {description && (
        <p className={`mt-4 text-[var(--pip-muted)] leading-relaxed max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className = "",
}: Omit<PageHeaderProps, "align">) {
  return (
    <Reveal className={className}>
      <p className="pip-section-sub">{eyebrow}</p>
      <h2 className="pip-section-title mt-2">{title}</h2>
      {description && (
        <p className="mt-3 text-[var(--pip-muted)] max-w-2xl">{description}</p>
      )}
    </Reveal>
  );
}
