import { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
  className?: string;
};

export function PageContainer({ children, className }: PageContainerProps) {
  const classes = [
    "mx-auto",
    "w-full",
    "max-w-[min(96vw,_80rem)]",
    "px-6",
    "sm:px-10",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classes}>{children}</div>;
}
