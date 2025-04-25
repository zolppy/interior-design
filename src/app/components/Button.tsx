import { HTMLAttributes, ReactNode } from "react";
import { ClassNameValue, twMerge } from "tailwind-merge";

interface IButton extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    type?: "button" | "reset" | "submit";
}

export const Button = ({
    children,
    type = "button",
    className,
    ...props
}: IButton) => {
    const baseStyles =
        "py-3 px-6 text-white transition-colors duration-200 lg:hover:cursor-pointer active:bg-black lg:hover:bg-black";

    return (
        <button
            {...props}
            className={twMerge(baseStyles, className as ClassNameValue)}
        >
            {children}
        </button>
    );
};

Button.displayName = "Button";
