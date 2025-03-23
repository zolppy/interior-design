import Image from "next/image";
import type { IDesigner } from "@/utils/types/designer";

const Designer = ({
    photo,
    name,
    role,
    description,
}: Omit<IDesigner, "id">) => {
    return (
        <li className="bg-[#f1f1f1] min-w-[320px] w-[100%] max-w-[480px] md:min-w-[200px]">
            <Image
                src={photo.path}
                title={photo.title}
                alt={photo.alt}
                className="grayscale-[80%]"
            />
            <div className="flex flex-col gap-y-4 p-4">
                <h3 className="text-2xl">{name}</h3>
                <p className="text-gray-500">{role}</p>
                <p>{description}</p>
            </div>
        </li>
    );
};

Designer.displayName = "Designer";

export default Designer;
