"use client";

import { Section } from "@/app/components/Section";
import { SectionTitle } from "@/app/components/SectionTitle";
import { Case } from "@/app/components/Case";
import { useNav } from "@/context/NavCtx";
import { showcases } from "@/utils/mocks/showcases";

export const CaseSection = () => {
    const { showcaseRef } = useNav();

    return (
        <Section ref={showcaseRef}>
            <SectionTitle>Showcase.</SectionTitle>
            <ul className="grid grid-cols-1 gap-y-2.5 gap-x-4 md:grid-cols-2">
                {showcases.map(({ id, title, alt, path }) => (
                    <Case key={id} title={title} alt={alt} path={path} />
                ))}
            </ul>
        </Section>
    );
};

CaseSection.displayName = "CaseSection";
