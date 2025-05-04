"use client";

import { MenuItem } from "@/app/components/MenuItem";
import { useNav } from "@/context/NavCtx";
import { Section as SectionEnum } from "@/utils/enums/section";
import { clsx } from "clsx";

export function MenuList() {
    const { actualSection } = useNav();

    return (
        <ul>
            <MenuItem
                to={SectionEnum.Home}
                className={clsx(
                    actualSection === SectionEnum.Home && "bg-white text-black"
                )}
            >
                Home
            </MenuItem>
            <MenuItem
                to={SectionEnum.Showcase}
                className={clsx(
                    actualSection === SectionEnum.Showcase &&
                        "bg-white text-black"
                )}
            >
                Showcase
            </MenuItem>
            <MenuItem
                to={SectionEnum.Services}
                className={clsx(
                    actualSection === SectionEnum.Services &&
                        "bg-white text-black"
                )}
            >
                Services
            </MenuItem>
            <MenuItem
                to={SectionEnum.Designers}
                className={clsx(
                    actualSection === SectionEnum.Designers &&
                        "bg-white text-black"
                )}
            >
                Designers
            </MenuItem>
            <MenuItem
                to={SectionEnum.Packages}
                className={clsx(
                    actualSection === SectionEnum.Packages &&
                        "bg-white text-black"
                )}
            >
                Packages
            </MenuItem>
            <MenuItem
                to={SectionEnum.Contact}
                className={clsx(
                    actualSection === SectionEnum.Contact &&
                        "bg-white text-black"
                )}
            >
                Contact
            </MenuItem>
        </ul>
    );
}

MenuList.displayName = "MenuList";
