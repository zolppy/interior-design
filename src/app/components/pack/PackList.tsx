const PackList = ({ children }: { children: React.ReactNode }) => {
    return <ul className="divide-y divide-[#ddd]">{children}</ul>;
};

PackList.displayName = "PackList";

export default PackList;
