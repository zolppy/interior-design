"use client";

import { Section } from "@/utils/enums/section";
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
    scrollTo: (to: Section) => void;
    actualSection: Section;
}

const NavCtx = createContext<INavCtx | undefined>(undefined);

const sectionOrder: Section[] = [
    Section.Home,
    Section.Showcase,
    Section.Services,
    Section.Designers,
    Section.Packages,
    Section.Contact,
];

function NavProvider({ children }: { children: ReactNode }) {
    const [actualSection, setActualSection] = useState<Section>(Section.Home);
    const [width, setWidth] = useState(0);

    const showcaseRef = useRef<HTMLElement | undefined>(undefined);
    const servicesRef = useRef<HTMLElement | undefined>(undefined);
    const designersRef = useRef<HTMLElement | undefined>(undefined);
    const packsRef = useRef<HTMLElement | undefined>(undefined);
    const contactRef = useRef<HTMLElement | undefined>(undefined);

    const sectionRefs = {
        [Section.Showcase]: showcaseRef,
        [Section.Services]: servicesRef,
        [Section.Designers]: designersRef,
        [Section.Packages]: packsRef,
        [Section.Contact]: contactRef,
    };

    function calculateElTop(section: Section): number {
        if (section === Section.Home) return 0;

        const ref = sectionRefs[section];
        const offsetTop = ref.current?.offsetTop || 0;
        return width >= 1024 ? offsetTop : offsetTop - 69;
    }

    function getScrollOptions(top = 0): ScrollToOptions {
        return {
            top,
            behavior: "smooth",
        };
    }

    function scrollTo(to: Section) {
        window.scrollTo(getScrollOptions(calculateElTop(to)));
    }

    useEffect(
        function setupListeners() {
            function handleResize() {
                setWidth(window.innerWidth);
            }

            function handleScroll() {
                const scrollY = window.scrollY;
                const thresholds = sectionOrder.map(calculateElTop);

                let newSection = Section.Home;
                for (let i = 0; i < thresholds.length; i++) {
                    if (
                        scrollY >= thresholds[i] &&
                        (i === thresholds.length - 1 ||
                            scrollY < thresholds[i + 1])
                    ) {
                        newSection = sectionOrder[i];
                        break;
                    }
                }

                setActualSection(newSection);
            }

            handleResize();
            handleScroll();

            window.addEventListener("resize", handleResize);
            window.addEventListener("scroll", handleScroll);

            return function cleanupListeners() {
                window.removeEventListener("resize", handleResize);
                window.removeEventListener("scroll", handleScroll);
            };
        },
        [width]
    );

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
}

function useNav(): INavCtx {
    const context = useContext(NavCtx);
    if (!context) throw new Error("useNav must be used within NavProvider");
    return context;
}

export { NavProvider, useNav };
