"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/app/components/Button";
import { MenuList } from "@/app/components/MenuList";
import { useMenu } from "@/context/MenuCtx";
import { BsX } from "react-icons/bs";

export function Menu() {
    const { closeMenu, menuIsOpen } = useMenu();

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
                        className="h-screen bg-[#f44336] fixed top-0 z-30 p-8 flex-col gap-y-16 overflow-x-hidden flex font-bold"
                    >
                        <Button
                            onClick={closeMenu}
                            className="lg:invisible bg-inherit p-0"
                        >
                            <BsX className="text-white text-4xl" />
                        </Button>
                        <h1 className="text-white text-2xl">
                            Company <br /> Name
                        </h1>
                        <MenuList />
                    </motion.nav>
                </>
            )}
        </AnimatePresence>
    );
}

Menu.displayName = "Menu";
