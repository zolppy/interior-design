import { HTMLAttributes, memo } from "react";
import { useNav } from "@/context/NavCtx";
import { useMenu } from "@/context/MenuCtx";
import { Section } from "@/utils/enums/section";
import { ClassNameValue, twMerge } from "tailwind-merge";

interface MenuItem extends HTMLAttributes<HTMLLIElement> {
  children: React.ReactNode;
  to: Section;
}

export const MenuItem = memo(
  ({ children, to, className = "", ...props }: MenuItem) => {
    const { scrollTo } = useNav();
    const { closeMenu } = useMenu();
    const baseStyles =
      "text-white text-[18px] p-2 active:bg-[#f1f1f1] active:text-black lg:hover:bg-[#f1f1f1] lg:hover:text-black lg:hover:cursor-pointer transition-colors duration-200";

    return (
      <li
        {...props}
        onClick={() => (scrollTo(to), closeMenu())}
        className={twMerge(baseStyles, className as ClassNameValue)}
      >
        <span className="whitespace-nowrap">{children}</span>
      </li>
    );
  }
);

MenuItem.displayName = "MenuItem";
