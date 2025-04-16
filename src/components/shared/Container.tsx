import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "mx-auto max-w-[2520px] px-4 md:px-10  xl:px-28 2xl:px-40 2xl:w-[95%]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
