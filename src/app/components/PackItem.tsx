import { ReactNode } from "react";

interface IPackItem {
    children: ReactNode;
}

export const PackItem = ({ children }: IPackItem) => {
    return <li className="p-4 text-center">{children}</li>;
};

PackItem.displayName = "PackItem";
