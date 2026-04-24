import type { ReactNode } from "react";

interface ContainerProps {
  narrow?: boolean;
  className?: string;
  children: ReactNode;
}

export function Container({ narrow = false, className = "", children }: ContainerProps) {
  const max = narrow ? "max-w-[820px]" : "max-w-[1200px]";
  return (
    <div className={`mx-auto w-full ${max} px-5 sm:px-6 md:px-8 ${className}`}>{children}</div>
  );
}
