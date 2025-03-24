"use client";

import { Section as SectionEnum } from "@/utils/enums/section";
import type { Section as SectionType } from "@/utils/types/section";
import {
    createContext,
    useContext,
    ReactNode,
    useRef,
    RefObject,
    useState,
    useEffect,
} from "react";

interface INavCtx {
    showcaseRef: RefObject<HTMLElement | undefined>;
    servicesRef: RefObject<HTMLElement | undefined>;
    designersRef: RefObject<HTMLElement | undefined>;
    packsRef: RefObject<HTMLElement | undefined>;
    contactRef: RefObject<HTMLElement | undefined>;
    scrollTo: (to: SectionType) => void;
    actualSection: SectionType;
}

const NavCtx = createContext<INavCtx | undefined>(undefined);

const NavProvider = ({ children }: { children: ReactNode }) => {
    const [actualSection, setActualSection] = useState<SectionType>(
        SectionEnum.Home
    );
    const showcaseRef = useRef<HTMLElement | undefined>(undefined);
    const servicesRef = useRef<HTMLElement | undefined>(undefined);
    const designersRef = useRef<HTMLElement | undefined>(undefined);
    const packsRef = useRef<HTMLElement | undefined>(undefined);
    const contactRef = useRef<HTMLElement | undefined>(undefined);
    const [width, setWidth] = useState<number>(0);

    useEffect(() => {
        const checkScreenWidth = () => {
            const screenWidth = window.innerWidth;
            setWidth(screenWidth);
        };

        const checkAtualSection = () => {
            let actualSection = SectionEnum.Home;
            const actualScrollY = window.scrollY;

            const homeTop = 0;
            const showcaseTop = calculateElTop(showcaseRef);
            const servicesTop = calculateElTop(servicesRef);
            const designersTop = calculateElTop(designersRef);
            const packsTop = calculateElTop(packsRef);
            const contactTop = calculateElTop(contactRef);

            if (actualScrollY >= homeTop && actualScrollY < showcaseTop) {
                actualSection = SectionEnum.Home;
            } else if (
                actualScrollY >= showcaseTop &&
                actualScrollY < servicesTop
            ) {
                actualSection = SectionEnum.Showcase;
            } else if (
                actualScrollY >= servicesTop &&
                actualScrollY < designersTop
            ) {
                actualSection = SectionEnum.Services;
            } else if (
                actualScrollY >= designersTop &&
                actualScrollY < packsTop
            ) {
                actualSection = SectionEnum.Designers;
            } else if (
                actualScrollY >= packsTop &&
                actualScrollY < contactTop
            ) {
                actualSection = SectionEnum.Packages;
            } else {
                actualSection = SectionEnum.Contact;
            }

            setActualSection(actualSection);
        };

        checkScreenWidth();
        checkAtualSection();

        window.addEventListener("resize", checkScreenWidth);
        window.addEventListener("scroll", checkAtualSection);

        return () => {
            window.removeEventListener("resize", checkScreenWidth);
            window.removeEventListener("scroll", checkAtualSection);
        };
    }, []);

    const calculateElTop = (
        ref: RefObject<HTMLElement | undefined>
    ): number => {
        const el = ref.current;
        const OffsetTop = el?.offsetTop || 0;
        // 69 is the header height
        // 1024 is the Tailwind CSS size for large screens
        const top = width >= 1024 ? OffsetTop : OffsetTop - 69;

        return top;
    };

    const setScrollSettings = (
        top: number = 0,
        left: number = 0,
        behavior: ScrollBehavior = "smooth"
    ) => {
        return {
            top: top,
            left: left,
            behavior: behavior,
        };
    };

    const scrollTo = (to: SectionType) => {
        switch (to) {
            case SectionEnum.Home:
                window.scroll(setScrollSettings());
                break;
            case SectionEnum.Showcase:
                const showcaseTop = calculateElTop(showcaseRef);
                window.scroll(setScrollSettings(showcaseTop));
                break;
            case SectionEnum.Services:
                const servicesTop = calculateElTop(servicesRef);
                window.scroll(setScrollSettings(servicesTop));
                break;
            case SectionEnum.Designers:
                const designersTop = calculateElTop(designersRef);
                window.scroll(setScrollSettings(designersTop));
                break;
            case SectionEnum.Packages:
                const packsTop = calculateElTop(packsRef);
                window.scroll(setScrollSettings(packsTop));
                break;
            case SectionEnum.Contact:
                const contactTop = calculateElTop(contactRef);
                window.scroll(setScrollSettings(contactTop));
        }
    };

    return (
        <NavCtx.Provider
            value={{
                showcaseRef,
                servicesRef,
                designersRef,
                packsRef,
                contactRef,
                scrollTo,
                actualSection,
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
