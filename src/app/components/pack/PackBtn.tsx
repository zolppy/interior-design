interface IPackBtn {
    bgColor: string;
    textColor: string;
}

const PackBtn = ({ bgColor, textColor }: IPackBtn) => {
    return (
        <button
            style={
                {
                    "--bg-color": bgColor,
                    "--text-color": textColor,
                } as React.CSSProperties
            }
            className="bg-[var(--bg-color)] text-[var(--text-color)] active:text-white lg:hover:text-white py-3 px-6 active:bg-black lg:hover:bg-black lg:hover:cursor-pointer"
        >
            Sign up
        </button>
    );
};

PackBtn.displayName = "PackBtn";

export default PackBtn;
