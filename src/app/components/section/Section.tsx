const Section = ({
    children,
    ref,
}: {
    children: React.ReactNode;
    ref: any;
}) => {
    return (
        <section ref={ref} className="flex flex-col gap-y-5 pb-[105px]">
            {children}
        </section>
    );
};

Section.displayName = "Section";

export default Section;
