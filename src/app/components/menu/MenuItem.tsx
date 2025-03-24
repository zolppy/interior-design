import { useMenu } from "@/context/MenuCtx";
import { Section as SectionType } from "@/utils/types/section";

interface IMenuItem {
    children: React.ReactNode;
    scrollTo: (to: SectionType, top: number) => void;
    to: SectionType;
}

const MenuItem = ({ children, scrollTo, to }: IMenuItem) => {
    const { closeMenu } = useMenu();

    return (
        <li
            onClick={() => (scrollTo(to, 234), closeMenu())}
            className="text-white text-[18px] p-2 active:bg-[#f1f1f1] active:text-black lg:hover:bg-[#f1f1f1] lg:hover:text-black lg:hover:cursor-pointer"
        >
            <span className="whitespace-nowrap">{children}</span>
        </li>
    );
};

MenuItem.displayName = "MenuItem";

export default MenuItem;
