import { BsX } from "react-icons/bs";
import { useMenu } from "@/context/MenuCtx";

const CloseMenuBtn = () => {
    const { closeMenu } = useMenu();

    return (
        <button
            onClick={closeMenu}
            className="lg:invisible lg:hover:cursor-pointer"
        >
            <BsX className="text-white text-4xl" />
        </button>
    );
};

CloseMenuBtn.displayName = "CloseMenuBtn";

export default CloseMenuBtn;
