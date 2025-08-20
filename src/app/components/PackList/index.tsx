import { ReactNode } from "react";

interface PackList {
  children: ReactNode;
}

export function PackList({ children }: PackList) {
  return <ul className="divide-y divide-[#ddd]">{children}</ul>;
}

PackList.displayName = "PackList";
