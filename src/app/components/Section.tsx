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

export default Section;
