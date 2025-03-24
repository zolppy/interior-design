import { useNav } from "@/context/NavCtx";
import { useMenu } from "@/context/MenuCtx";
import { Section as SectionType } from "@/utils/types/section";

interface IMenuItem {
    children: React.ReactNode;
    to: SectionType;
    selected: boolean;
}

const MenuItem = ({ children, to, selected }: IMenuItem) => {
    const { scrollTo } = useNav();
    const { closeMenu } = useMenu();

    return (
        <li
            style={
                {
                    "--bg-color": selected ? "white" : "inherit",
                    "--text-color": selected ? "black" : "white",
                } as React.CSSProperties
            }
            onClick={() => (scrollTo(to), closeMenu())}
            className="bg-[var(--bg-color)] text-[var(--text-color)] text-[18px] p-2 active:bg-[#f1f1f1] active:text-black lg:hover:bg-[#f1f1f1] lg:hover:text-black lg:hover:cursor-pointer"
        >
            <span className="whitespace-nowrap">{children}</span>
        </li>
    );
};

MenuItem.displayName = "MenuItem";

export default MenuItem;
