import { ReactNode } from "react";

interface ISectionTitle {
    children: ReactNode;
}

export const SectionTitle = ({ children }: ISectionTitle) => {
    return (
        <div className="flex flex-col gap-y-8">
            <h2 className="font-medium text-5xl text-[#f44336]">{children}</h2>
            <div className="bg-[#f44336] h-3 rounded-[4px] w-[60px]"></div>
        </div>
    );
};

SectionTitle.displayName = "SectionTitle";
