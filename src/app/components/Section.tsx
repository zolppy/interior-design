import { ReactNode, RefObject } from "react";

interface ISection {
    children: ReactNode;
    ref: RefObject<HTMLElement | undefined>;
}

export const Section = ({ children, ref }: ISection) => {
    return (
        <section
            ref={ref as RefObject<HTMLElement>}
            className="flex flex-col gap-y-5 pb-[105px]"
        >
            {children}
        </section>
    );
};

Section.displayName = "Section";
