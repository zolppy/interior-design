import { HTMLAttributes, ReactNode } from "react";
import { ClassNameValue, twMerge } from "tailwind-merge";

interface PackTitle extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

export function PackTitle({ children, className = "", ...props }: PackTitle) {
  const baseStyles = "text-2xl text-white py-8 px-4 text-center bg-[#f44336]";

  return (
    <h3 {...props} className={twMerge(baseStyles, className as ClassNameValue)}>
      {children}
    </h3>
  );
}

PackTitle.displayName = "PackTitle";
