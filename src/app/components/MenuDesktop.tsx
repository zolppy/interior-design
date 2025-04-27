"use client";

import { Button } from "@/app/components/Button";
import { MenuList } from "@/app/components/MenuList";
import { useMenu } from "@/context/MenuCtx";
import { BsX } from "react-icons/bs";

export function MenuDesktop() {
    const { closeMenu } = useMenu();

    return (
        <nav className="h-screen hidden bg-[#f44336] fixed top-0 left-0 z-30 p-8 flex-col gap-y-16 overflow-x-hidden w-[320px] font-bold lg:flex">
            <Button onClick={closeMenu} className="lg:invisible bg-inherit p-0">
                <BsX className="text-white text-4xl" />
            </Button>
            <h1 className="text-white text-2xl">
                Company <br /> Name
            </h1>
            <MenuList />
        </nav>
    );
}

MenuDesktop.displayName = "MenuDesktop";
