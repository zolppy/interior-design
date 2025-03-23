import { AnimatePresence, motion } from "framer-motion";
import CloseMenuBtn from "@/app/components/CloseMenuBtn";
import MenuList from "@/app/components/menu/MenuList";
import { useMenu } from "@/context/MenuCtx";

const Menu = () => {
    const { menuIsOpen } = useMenu();

    return (
        <AnimatePresence>
            {menuIsOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        className="z-20 bg-black h-screen w-screen fixed left-0 top-0 lg:hidden"
                    ></motion.div>
                    <motion.nav
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "320px", opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        transition={{ type: "spring", duration: 0.4 }}
                        className="h-screen bg-[#f44336] fixed top-0 z-30 p-8 flex-col gap-y-16 overflow-x-hidden flex"
                    >
                        <CloseMenuBtn />
                        <h1 className="text-white text-2xl">
                            Company <br /> Name
                        </h1>
                        <MenuList />
                    </motion.nav>
                </>
            )}
        </AnimatePresence>
    );
};

Menu.displayName = "Menu";

export default Menu;
