import { ReactNode, RefObject } from "react";

const Section = ({
    children,
    ref,
}: {
    children: ReactNode;
    ref: RefObject<HTMLElement | undefined>;
}) => {
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

export default Section;
