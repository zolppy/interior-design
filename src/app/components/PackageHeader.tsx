interface IPackageHeader {
    children: React.ReactNode;
    bgColor: string;
}

const PackageHeader = ({ children, bgColor }: IPackageHeader) => {
    return (
        <div
            style={{ backgroundColor: bgColor }}
            className="py-8 px-4 text-center"
        >
            <h3 className="text-2xl text-white">{children}</h3>
        </div>
    );
};

export default PackageHeader;
