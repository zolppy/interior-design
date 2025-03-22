"use client";

import { SectionEnum } from "@/utils/enums/section";
import type { sectionType } from "@/utils/types/section";
import { createContext, useContext, ReactNode, useRef } from "react";

interface INavCtx {
    homeRef: any;
    showcaseRef: any;
    servicesRef: any;
    designersRef: any;
    packagesRef: any;
    contactRef: any;
    scrollTo: (to: sectionType) => void;
}

const NavCtx = createContext<INavCtx | undefined>(undefined);

const NavProvider = ({ children }: { children: ReactNode }) => {
    const homeRef = useRef<any>(undefined);
    const showcaseRef = useRef<any>(undefined);
    const servicesRef = useRef<any>(undefined);
    const designersRef = useRef<any>(undefined);
    const packagesRef = useRef<any>(undefined);
    const contactRef = useRef<any>(undefined);

    const scrollTo = (to: sectionType) => {
        const scrollSettings = { behavior: "smooth" };

        switch (to) {
            case SectionEnum.Home:
                homeRef?.current.scrollIntoView(scrollSettings);
                break;
            case SectionEnum.Showcase:
                showcaseRef?.current.scrollIntoView(scrollSettings);
                break;
            case SectionEnum.Services:
                servicesRef?.current.scrollIntoView(scrollSettings);
                break;
            case SectionEnum.Designers:
                designersRef?.current.scrollIntoView(scrollSettings);
                break;
            case SectionEnum.Packages:
                packagesRef?.current.scrollIntoView(scrollSettings);
                break;
            case SectionEnum.Contact:
                contactRef?.current.scrollIntoView(scrollSettings);
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
