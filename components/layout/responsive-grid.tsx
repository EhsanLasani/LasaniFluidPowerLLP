import { CSSProperties, ReactNode } from "react";

type ResponsiveGridProps = {
  children: ReactNode;
  minColumnWidth?: string;
  gap?: "sm" | "md" | "lg";
  as?: keyof JSX.IntrinsicElements;
  className?: string;
};

const GAP_MAP: Record<NonNullable<ResponsiveGridProps["gap"]>, string> = {
  sm: "1.25rem",
  md: "1.75rem",
  lg: "2.5rem",
};

export function ResponsiveGrid({
  children,
  minColumnWidth = "18rem",
  gap = "md",
  as: Component = "div",
  className,
}: ResponsiveGridProps) {
  const style: CSSProperties = {
    display: "grid",
    gap: GAP_MAP[gap],
    gridTemplateColumns: `repeat(auto-fit, minmax(${minColumnWidth}, 1fr))`,
    width: "100%",
  };

  return (
    <Component className={className} style={style}>
      {children}
    </Component>
  );
}
