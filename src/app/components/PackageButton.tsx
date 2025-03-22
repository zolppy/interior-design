interface IPackageButton {
    bgColor: string;
    textColor: string;
}

const PackageButton = ({ bgColor, textColor }: IPackageButton) => {
    return (
        <button
            style={
                {
                    "--bg-color": bgColor,
                    "--text-color": textColor,
                } as React.CSSProperties
            }
            className="bg-[var(--bg-color)] py-3 px-6 active:bg-black lg:hover:bg-black"
        >
            <span className="text-[var(--text-color)] active:text-white lg:hover:text-white">
                Sign up
            </span>
        </button>
    );
};

export default PackageButton;
