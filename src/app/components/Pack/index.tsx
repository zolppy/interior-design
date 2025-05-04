import { ReactNode } from "react";

interface Pack {
    children: ReactNode;
}

export function Pack({ children }: Pack) {
    return <li className="bg-[#f1f1f1]">{children}</li>;
}

Pack.displayName = "Pack";
