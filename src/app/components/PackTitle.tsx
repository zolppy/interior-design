import { ReactNode } from "react";

interface IPackTitle {
    children: ReactNode;
    bgColor: string;
}

export const PackTitle = ({ children, bgColor }: IPackTitle) => {
    return (
        <div
            style={{ backgroundColor: bgColor }}
            className="py-8 px-4 text-center"
        >
            <h3 className="text-2xl text-white">{children}</h3>
        </div>
    );
};

PackTitle.displayName = "PackTitle";
