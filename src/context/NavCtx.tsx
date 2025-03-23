"use client";

import { Section as SectionEnum } from "@/utils/enums/section";
import type { Section as SectionType } from "@/utils/types/section";
import { createContext, useContext, ReactNode, useRef, RefObject } from "react";

interface INavCtx {
    homeRef: RefObject<HTMLElement | undefined>;
    showcaseRef: RefObject<HTMLElement | undefined>;
    servicesRef: RefObject<HTMLElement | undefined>;
    designersRef: RefObject<HTMLElement | undefined>;
    packagesRef: RefObject<HTMLElement | undefined>;
    contactRef: RefObject<HTMLElement | undefined>;
    scrollTo: (to: SectionType) => void;
}

const NavCtx = createContext<INavCtx | undefined>(undefined);

const NavProvider = ({ children }: { children: ReactNode }) => {
    const homeRef = useRef<HTMLElement | undefined>(undefined);
    const showcaseRef = useRef<HTMLElement | undefined>(undefined);
    const servicesRef = useRef<HTMLElement | undefined>(undefined);
    const designersRef = useRef<HTMLElement | undefined>(undefined);
    const packagesRef = useRef<HTMLElement | undefined>(undefined);
    const contactRef = useRef<HTMLElement | undefined>(undefined);

    const scrollTo = (to: SectionType) => {
        const scrollSettings: ScrollIntoViewOptions = { behavior: "smooth" };

        switch (to) {
            case SectionEnum.Home:
                homeRef.current?.scrollIntoView(scrollSettings);
                break;
            case SectionEnum.Showcase:
                showcaseRef.current?.scrollIntoView(scrollSettings);
                break;
            case SectionEnum.Services:
                servicesRef.current?.scrollIntoView(scrollSettings);
                break;
            case SectionEnum.Designers:
                designersRef.current?.scrollIntoView(scrollSettings);
                break;
            case SectionEnum.Packages:
                packagesRef.current?.scrollIntoView(scrollSettings);
                break;
            case SectionEnum.Contact:
                contactRef.current?.scrollIntoView(scrollSettings);
        }
    };

    return (
        <NavCtx.Provider
            value={{
                homeRef,
                showcaseRef,
                servicesRef,
                designersRef,
                packagesRef,
                contactRef,
                scrollTo,
            }}
        >
            {children}
        </NavCtx.Provider>
    );
};

const useNav = (): INavCtx => {
    const context = useContext<INavCtx | undefined>(NavCtx);
    if (!context) {
        throw new Error("useNav must be used inside a NavProvider");
    }
    return context;
};

export { NavProvider, useNav };
