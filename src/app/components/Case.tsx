import { memo } from "react";
import Image from "next/image";
import type { Img } from "@/utils/types/image";

export const Case = memo(({ title, alt, path }: Omit<Img, "id">) => {
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
});

Case.displayName = "Case";
