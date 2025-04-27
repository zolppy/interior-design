import { BsCupHotFill } from "react-icons/bs";

export function CoffeeBtn() {
    return (
        <button>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://ko-fi.com/zolppy"
                className="fixed -translate-y-1/2 -translate-x-1/2 bg-[#f44336] text-4xl p-3 rounded-full right-0 bottom-0 active:bg-[#ccc] active:text-black lg:hover:cursor-pointer lg:hover:bg-[#ccc] lg:hover:text-black text-white transition-colors duration-200"
            >
                <BsCupHotFill />
            </a>
        </button>
    );
}

CoffeeBtn.displayName = "CoffeeBtn";
