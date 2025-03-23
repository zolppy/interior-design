import MenuItem from "@/app/components/menu/MenuItem";
import { useNav } from "@/context/NavCtx";
import { Section } from "@/utils/enums/section";

const MenuList = () => {
    const { scrollTo } = useNav();

    return (
        <ul>
            <MenuItem scrollTo={scrollTo} to={Section.Home}>
                Home
            </MenuItem>
            <MenuItem scrollTo={scrollTo} to={Section.Showcase}>
                Showcase
            </MenuItem>
            <MenuItem scrollTo={scrollTo} to={Section.Services}>
                Services
            </MenuItem>
            <MenuItem scrollTo={scrollTo} to={Section.Designers}>
                Designers
            </MenuItem>
            <MenuItem scrollTo={scrollTo} to={Section.Packages}>
                Packages
            </MenuItem>
            <MenuItem scrollTo={scrollTo} to={Section.Contact}>
                Contact
            </MenuItem>
        </ul>
    );
};

MenuList.displayName = "MenuList";

export default MenuList;
