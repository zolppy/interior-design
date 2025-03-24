import MenuItem from "@/app/components/menu/MenuItem";
import { useNav } from "@/context/NavCtx";
import { Section as SectionEnum } from "@/utils/enums/section";

const MenuList = () => {
    const { actualSection } = useNav();

    return (
        <ul>
            <MenuItem
                to={SectionEnum.Home}
                selected={actualSection === SectionEnum.Home}
            >
                Home
            </MenuItem>
            <MenuItem
                to={SectionEnum.Showcase}
                selected={actualSection === SectionEnum.Showcase}
            >
                Showcase
            </MenuItem>
            <MenuItem
                to={SectionEnum.Services}
                selected={actualSection === SectionEnum.Services}
            >
                Services
            </MenuItem>
            <MenuItem
                to={SectionEnum.Designers}
                selected={actualSection === SectionEnum.Designers}
            >
                Designers
            </MenuItem>
            <MenuItem
                to={SectionEnum.Packages}
                selected={actualSection === SectionEnum.Packages}
            >
                Packages
            </MenuItem>
            <MenuItem
                to={SectionEnum.Contact}
                selected={actualSection === SectionEnum.Contact}
            >
                Contact
            </MenuItem>
        </ul>
    );
};

MenuList.displayName = "MenuList";

export default MenuList;
