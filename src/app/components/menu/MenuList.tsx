import MenuItem from "@/app/components/menu/MenuItem";
import { useNav } from "@/context/NavCtx";
import { SectionEnum } from "@/utils/enums/section";

const MenuList = () => {
    const { scrollTo } = useNav();

    return (
        <ul>
            <MenuItem scrollTo={scrollTo} to={SectionEnum.Home}>
                Home
            </MenuItem>
            <MenuItem scrollTo={scrollTo} to={SectionEnum.Showcase}>
                Showcase
            </MenuItem>
            <MenuItem scrollTo={scrollTo} to={SectionEnum.Services}>
                Services
            </MenuItem>
            <MenuItem scrollTo={scrollTo} to={SectionEnum.Designers}>
                Designers
            </MenuItem>
            <MenuItem scrollTo={scrollTo} to={SectionEnum.Packages}>
                Packages
            </MenuItem>
            <MenuItem scrollTo={scrollTo} to={SectionEnum.Contact}>
                Contact
            </MenuItem>
        </ul>
    );
};

export default MenuList;
