import CloseMenuBtn from "@/app/components/CloseMenuBtn";
import MenuItem from "@/app/components/menu/MenuItem";
import { useMenu } from "@/context/MenuCtx";
import { sectionType } from "@/utils/types/section";
import { SectionEnum } from "@/utils/enums/section";

// Animação com bug
{
    /* <AnimatePresence>
    {menuIsOpen && (
        <>
            <div className="z-20 bg-black h-screen w-screen fixed left-0 top-0 opacity-50"></div>
            <motion.nav
                initial={{ width: 0 }}
                animate={{ width: "320px" }}
                exit={{ width: 0 }}
                transition={{ type: "spring", duration: 0.4 }}
                className="h-screen bg-[#f44336] fixed top-0 left-0 z-30 p-8 flex flex-col gap-y-16 overflow-x-hidden"
            >
                <CloseMenuBtn />
                <h1 className="text-white text-2xl">
                    Company <br /> Name
                </h1>
                <ul>
                    <MenuItem scrollTo={scrollTo} to=Section>
                        Home
                    </MenuItem>
                    <MenuItem scrollTo={scrollTo} to="showcase">
                        Showcase
                    </MenuItem>
                    <MenuItem scrollTo={scrollTo} to="services">
                        Services
                    </MenuItem>
                    <MenuItem scrollTo={scrollTo} to="designers">
                        Designers
                    </MenuItem>
                    <MenuItem scrollTo={scrollTo} to="packages">
                        Packages
                    </MenuItem>
                    <MenuItem scrollTo={scrollTo} to="contact">
                        Contact
                    </MenuItem>
                </ul>
            </motion.nav>
        </>
    )}
</AnimatePresence> */
}

const Menu = ({ scrollTo }: { scrollTo: (to: sectionType) => void }) => {
    const { menuIsOpen } = useMenu();

    return (
        <div>
            {menuIsOpen && (
                <>
                    <div className="z-20 bg-black h-screen w-screen fixed left-0 top-0 opacity-50"></div>
                    <nav className="h-screen w-[320px] bg-[#f44336] fixed top-0 left-0 z-30 p-8 flex flex-col gap-y-16 overflow-x-hidden">
                        <CloseMenuBtn />
                        <h1 className="text-white text-2xl">
                            Company <br /> Name
                        </h1>
                        <ul>
                            <MenuItem scrollTo={scrollTo} to={SectionEnum.Home}>
                                Home
                            </MenuItem>
                            <MenuItem
                                scrollTo={scrollTo}
                                to={SectionEnum.Showcase}
                            >
                                Showcase
                            </MenuItem>
                            <MenuItem
                                scrollTo={scrollTo}
                                to={SectionEnum.Services}
                            >
                                Services
                            </MenuItem>
                            <MenuItem
                                scrollTo={scrollTo}
                                to={SectionEnum.Designers}
                            >
                                Designers
                            </MenuItem>
                            <MenuItem
                                scrollTo={scrollTo}
                                to={SectionEnum.Packages}
                            >
                                Packages
                            </MenuItem>
                            <MenuItem
                                scrollTo={scrollTo}
                                to={SectionEnum.Contact}
                            >
                                Contact
                            </MenuItem>
                        </ul>
                    </nav>
                </>
            )}
        </div>
    );
};

export default Menu;
