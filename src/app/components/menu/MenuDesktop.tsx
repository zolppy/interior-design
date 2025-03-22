import CloseMenuBtn from "@/app/components/CloseMenuBtn";
import MenuList from "@/app/components/menu/MenuList";

const Menu = () => {
    return (
        <nav className="h-screen hidden bg-[#f44336] fixed top-0 left-0 z-30 p-8 flex-col gap-y-16 overflow-x-hidden w-[320px] lg:flex">
            <CloseMenuBtn />
            <h1 className="text-white text-2xl">
                Company <br /> Name
            </h1>
            <MenuList />
        </nav>
    );
};

export default Menu;
