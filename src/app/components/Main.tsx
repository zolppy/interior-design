import { ReactNode } from "react";

interface IMain {
    children: ReactNode;
}

export function Main({ children }: IMain) {
    return (
        <main className="mt-[69px] pt-6 px-3.5 lg:ml-[320px] lg:px-14">
            {children}
        </main>
    );
}

Main.displayName = "Main";
