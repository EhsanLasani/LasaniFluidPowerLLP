import { ReactNode } from "react";

type CardProps = {
  title?: ReactNode;
  eyebrow?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  variant?: "default" | "raised" | "muted";
  className?: string;
};

const VARIANT_CLASS: Record<NonNullable<CardProps["variant"]>, string> = {
  default: "bg-[var(--color-surface)] border border-subtle shadow-sm",
  raised: "bg-[var(--color-surface-raised)] border border-subtle shadow-md",
  muted: "bg-[color-mix(in_srgb,var(--color-bg)_88%,var(--color-interactive)_12%)]/30 border border-subtle shadow-sm",
};

export function Card({
  eyebrow,
  title,
  children,
  footer,
  variant = "default",
  className,
}: CardProps) {
  const classes = [
    "flex h-full flex-col gap-4 rounded-[var(--radius-lg)] p-6",
    VARIANT_CLASS[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={classes}>
      {eyebrow ? (
        <span className="badge-label text-muted" data-compact="true">
          {eyebrow}
        </span>
      ) : null}
      {title ? <h3 className="type-subtitle">{title}</h3> : null}
      {children ? <div className="type-body text-secondary">{children}</div> : null}
      {footer ? <div className="mt-auto">{footer}</div> : null}
    </article>
  );
}
