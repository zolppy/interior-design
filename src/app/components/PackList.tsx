import { ReactNode } from "react";

interface IPackList {
    children: ReactNode;
}

export function PackList({ children }: IPackList) {
    return <ul className="divide-y divide-[#ddd]">{children}</ul>;
}

PackList.displayName = "PackList";
