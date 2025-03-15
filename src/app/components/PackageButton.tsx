interface IPackageButton {
    bgColor: string;
    textColor: string;
}

const PackageButton = ({ bgColor, textColor }: IPackageButton) => {
    return (
        <button
            style={{ backgroundColor: bgColor }}
            className="py-3 px-6 active:bg-black active:text-white lg:hover:bg-black lg:hover:text-white"
        >
            <span style={{ color: textColor }}>Sign up</span>
        </button>
    );
};

export default PackageButton;
