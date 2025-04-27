"use client";

import { Section } from "@/app/components/Section";
import { SectionTitle } from "@/app/components/SectionTitle";
import { Pack } from "@/app/components/Pack";
import { PackTitle } from "@/app/components/PackTitle";
import { PackList } from "@/app/components/PackList";
import { PackItem } from "@/app/components/PackItem";
import { PackPrice } from "@/app/components/PackPrice";
import { Button } from "@/app/components/Button";
import { useNav } from "@/context/NavCtx";

export function PacksSection() {
    const { packsRef } = useNav();

    return (
        <Section ref={packsRef}>
            <SectionTitle>Packages.</SectionTitle>
            <div className="flex flex-col gap-y-4">
                <p>
                    Some text our prices. Lorem ipsum consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure.
                </p>
                <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Pack>
                        <PackTitle className="bg-[#616161]">Basic</PackTitle>
                        <PackList>
                            <PackItem>Floorplanning</PackItem>
                            <PackItem>10 hours support</PackItem>
                            <PackItem>Photography</PackItem>
                            <PackItem>20% furniture discount</PackItem>
                            <PackItem>Good deals</PackItem>
                            <PackItem>
                                <PackPrice price={199} description="per room" />
                            </PackItem>
                            <PackItem>
                                <Button className="bg-[#fff] text-[#000] active:text-white lg:hover:text-white">
                                    Sign up
                                </Button>
                            </PackItem>
                        </PackList>
                    </Pack>
                    <Pack>
                        <PackTitle>Pro</PackTitle>
                        <PackList>
                            <PackItem>Floorplanning</PackItem>
                            <PackItem>50 hours support</PackItem>
                            <PackItem>Photography</PackItem>
                            <PackItem>50% furniture discount</PackItem>
                            <PackItem>GREAT deals</PackItem>
                            <PackItem>
                                <PackPrice price={249} description="per room" />
                            </PackItem>
                            <PackItem>
                                <Button className="bg-[#f44336] text-[#fff]">
                                    Sign up
                                </Button>
                            </PackItem>
                        </PackList>
                    </Pack>
                </ul>
            </div>
        </Section>
    );
}

PacksSection.displayName = "PacksSection";
