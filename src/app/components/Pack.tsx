import { ReactNode } from "react";

interface IPack {
    children: ReactNode;
}

export function Pack({ children }: IPack) {
    return <li className="bg-[#f1f1f1]">{children}</li>;
}

Pack.displayName = "Pack";
