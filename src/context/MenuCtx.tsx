"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface IMenuCtx {
    menuIsOpen: boolean;
    openMenu: () => void;
    closeMenu: () => void;
}

const MenuCtx = createContext<IMenuCtx | undefined>(undefined);

const MenuProvider = ({ children }: { children: ReactNode }) => {
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

    const openMenu = () => {
        setMenuIsOpen(true);
    };

    const closeMenu = () => {
        setMenuIsOpen(false);
    };

    return (
        <MenuCtx.Provider value={{ menuIsOpen, openMenu, closeMenu }}>
            {children}
        </MenuCtx.Provider>
    );
};

const useMenu = (): IMenuCtx => {
    const context = useContext<IMenuCtx | undefined>(MenuCtx);
    if (!context) {
        throw new Error("useMenu must be used inside a MenuProvider");
    }
    return context;
};

export { MenuProvider, useMenu };
