import { BsX } from "react-icons/bs";
import { useMenu } from "@/context/MenuCtx";

const CloseMenuBtn = () => {
    const { closeMenu } = useMenu();

    return (
        <button onClick={closeMenu} className="lg:invisible">
            <BsX className="text-white text-4xl" />
        </button>
    );
};

export default CloseMenuBtn;
