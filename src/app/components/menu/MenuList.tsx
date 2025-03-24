import MenuItem from "@/app/components/menu/MenuItem";
import { Section } from "@/utils/enums/section";

const MenuList = () => {
    return (
        <ul>
            <MenuItem to={Section.Home}>Home</MenuItem>
            <MenuItem to={Section.Showcase}>Showcase</MenuItem>
            <MenuItem to={Section.Services}>Services</MenuItem>
            <MenuItem to={Section.Designers}>Designers</MenuItem>
            <MenuItem to={Section.Packages}>Packages</MenuItem>
            <MenuItem to={Section.Contact}>Contact</MenuItem>
        </ul>
    );
};

MenuList.displayName = "MenuList";

export default MenuList;
