"use client";

import { Section } from "@/app/components/Section";
import { SectionTitle } from "@/app/components/SectionTitle";
import { Designer } from "@/app/components/Designer";
import { useNav } from "@/context/NavCtx";
import { designers } from "@/utils/mocks/designers";

export const DesignersSection = () => {
    const { designersRef } = useNav();

    return (
        <Section ref={designersRef}>
            <SectionTitle>Designers.</SectionTitle>
            <div className="flex flex-col gap-y-4">
                <p>The best team in the world.</p>
                <p>
                    We are lorem ipsum consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                </p>
                <h3 className="font-bold">
                    Our designers are thoughtfully chosen:
                </h3>
                <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {designers.map(({ id, photo, name, role, description }) => (
                        <Designer
                            key={id}
                            photo={photo}
                            name={name}
                            role={role}
                            description={description}
                        />
                    ))}
                </ul>
            </div>
        </Section>
    );
};

DesignersSection.displayName = "DesignersSection";
