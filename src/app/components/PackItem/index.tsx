import { ReactNode } from "react";

interface PackItem {
  children: ReactNode;
}

export function PackItem({ children }: PackItem) {
  return <li className="p-4 text-center">{children}</li>;
}

PackItem.displayName = "PackItem";
