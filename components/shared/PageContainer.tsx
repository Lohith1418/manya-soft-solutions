import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function PageContainer({
  children,
  className,
}: PageContainerProps) {
  return (
    <div
      className={cn(
        "w-full max-w-[1440px] mx-auto px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10",
        className
      )}
    >
      {children}
    </div>
  );
}
