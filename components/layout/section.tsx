import { ReactNode } from "react";
import { LayoutContainer } from "./layout-container";

type SectionWidth = "standard" | "wide" | "full";
type SectionVariant = "default" | "muted" | "raised" | "inverse" | "gradient";
type SectionAlign = "left" | "center";

type SectionProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  width?: SectionWidth;
  variant?: SectionVariant;
  align?: SectionAlign;
  contentPadding?: "none" | "sm" | "md" | "lg";
  style?: React.CSSProperties;
};

type SectionHeaderProps = {
  eyebrow?: ReactNode;
  title?: ReactNode;
  kicker?: ReactNode;
  align?: SectionAlign;
  className?: string;
};

type SectionBodyProps = {
  children: ReactNode;
  className?: string;
};

const VARIANT_CLASS: Record<SectionVariant, string> = {
  default: "section-surface",
  muted: "section-surface surface-panel--muted",
  raised: "section-surface section-surface--raised",
  inverse: "section-surface section-on-dark",
  gradient: "section-surface section-surface--raised bg-[linear-gradient(135deg,color-mix(in_srgb,var(--color-bg)_90%,var(--color-interactive)_10%)_0%,color-mix(in_srgb,var(--color-bg)_72%,var(--color-accent)_28%)_65%,var(--color-bg)_100%)]",
};

const ALIGN_CLASS: Record<SectionAlign, string> = {
  left: "items-start text-left",
  center: "items-center text-center",
};

export function Section({
  children,
  className,
  containerClassName,
  width = "standard",
  variant = "default",
  align = "left",
  contentPadding = "md",
  style,
}: SectionProps) {
  const classes = ["flex flex-col gap-8", ALIGN_CLASS[align], className]
    .filter(Boolean)
    .join(" ");

  return (
    <LayoutContainer width={width} padding={contentPadding} className={containerClassName}>
      <section className={[VARIANT_CLASS[variant], classes].join(" ")} style={style}>
        {children}
      </section>
    </LayoutContainer>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  kicker,
  align = "left",
  className,
}: SectionHeaderProps) {
  if (!eyebrow && !title && !kicker) return null;

  const classes = ["flex w-full flex-col gap-3", ALIGN_CLASS[align], className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      {eyebrow ? (
        <span className="badge-label text-muted" data-compact="true">
          {eyebrow}
        </span>
      ) : null}
      {title ? <h2 className="type-title">{title}</h2> : null}
      {kicker ? <p className="type-body-lg text-secondary">{kicker}</p> : null}
    </div>
  );
}

export function SectionBody({ children, className }: SectionBodyProps) {
  return (
    <div className={["flex w-full flex-col gap-6", className].filter(Boolean).join(" ")}>
      {children}
    </div>
  );
}
