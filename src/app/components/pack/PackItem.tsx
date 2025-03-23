const PackItem = ({ children }: { children: React.ReactNode }) => {
    return <li className="p-4 text-center">{children}</li>;
};

PackItem.displayName = "PackItem";

export default PackItem;
