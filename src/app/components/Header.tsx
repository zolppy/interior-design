import { BsList } from "react-icons/bs";
import { useMenu } from "@/context/MenuCtx";

const Header = ({ ref }: { ref: any }) => {
    const { openMenu } = useMenu();

    return (
        <header
            ref={ref}
            className="bg-[#f44336] h-[69px] flex items-center py-2 px-8 gap-x-8 fixed top-0 left-0 w-full z-10 lg:hidden"
        >
            <button onClick={openMenu}>
                <BsList className="text-white text-2xl" />
            </button>
            <h1 className="text-white text-2xl">Company Name</h1>
        </header>
    );
};

Header.displayName = "Header";

export default Header;
