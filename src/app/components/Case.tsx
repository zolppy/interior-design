import Image from "next/image";
import type { Img as ImgInterface } from "@/utils/types/image";

const Case = ({ title, alt, path }: Omit<ImgInterface, "id">) => {
    return (
        <li>
            <Image
                src={path}
                title={title}
                alt={alt}
                className="min-w-[320px] w-[100%] max-w-[480px] opacity-80 lg:max-w-none"
            />
        </li>
    );
};

Case.displayName = "Case";

export default Case;
