interface IPackPrice {
    price: number;
    description: string;
}

export const PackPrice = ({ price, description }: IPackPrice) => {
    return (
        <div className="flex flex-col gap-y-4 p-2">
            <h4 className="text-3xl">$ {price}</h4>
            <span className="opacity-60">{description}</span>
        </div>
    );
};

PackPrice.displayName = "PackPrice";
