import { ReactNode } from "react";

type LayoutContainerProps = {
  children: ReactNode;
  className?: string;
  width?: "standard" | "wide" | "full";
  padding?: "none" | "sm" | "md" | "lg";
};

const WIDTH_CLASS: Record<NonNullable<LayoutContainerProps["width"]>, string> = {
  standard: "max-w-screen-xl",
  wide: "max-w-[80rem]",
  full: "max-w-none",
};

const PADDING_CLASS: Record<NonNullable<LayoutContainerProps["padding"]>, string> = {
  none: "px-0",
  sm: "px-4 sm:px-6",
  md: "px-6 sm:px-10",
  lg: "px-8 sm:px-12",
};

export function LayoutContainer({
  children,
  className,
  width = "standard",
  padding = "md",
}: LayoutContainerProps) {
  const classes = [
    "mx-auto",
    "w-full",
    WIDTH_CLASS[width],
    PADDING_CLASS[padding],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>{children}</div>
  );
}
