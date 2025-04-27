import { ReactNode, RefObject } from "react";

interface Section {
    children: ReactNode;
    ref: RefObject<HTMLElement | undefined>;
}

export function Section({ children, ref }: Section) {
    return (
        <section
            ref={ref as RefObject<HTMLElement>}
            className="flex flex-col gap-y-5 pb-[105px]"
        >
            {children}
        </section>
    );
}

Section.displayName = "Section";
