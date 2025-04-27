"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface MenuContextValue {
    menuIsOpen: boolean;
    openMenu: () => void;
    closeMenu: () => void;
}

const MenuContext = createContext<MenuContextValue | null>(null);

interface MenuProviderProps {
    children: ReactNode;
}

function MenuProvider({ children }: MenuProviderProps) {
    const [menuIsOpen, menuSetIsOpen] = useState(false);

    return (
        <MenuContext.Provider
            value={{
                menuIsOpen,
                openMenu: () => menuSetIsOpen(true),
                closeMenu: () => menuSetIsOpen(false),
            }}
        >
            {children}
        </MenuContext.Provider>
    );
}

function useMenu() {
    const context = useContext(MenuContext);

    if (!context) {
        throw new Error("useMenu must be used within a MenuProvider");
    }

    return context;
}

export { MenuProvider, useMenu };
