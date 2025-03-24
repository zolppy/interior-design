import { useNav } from "@/context/NavCtx";
import { useMenu } from "@/context/MenuCtx";
import { Section as SectionType } from "@/utils/types/section";

interface IMenuItem {
    children: React.ReactNode;
    to: SectionType;
}

const MenuItem = ({ children, to }: IMenuItem) => {
    const { scrollTo } = useNav();
    const { closeMenu } = useMenu();

    return (
        <li
            onClick={() => (scrollTo(to), closeMenu())}
            className="text-white text-[18px] p-2 active:bg-[#f1f1f1] active:text-black lg:hover:bg-[#f1f1f1] lg:hover:text-black lg:hover:cursor-pointer"
        >
            <span className="whitespace-nowrap">{children}</span>
        </li>
    );
};

MenuItem.displayName = "MenuItem";

export default MenuItem;
