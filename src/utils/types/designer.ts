import type { Img as ImgInterface } from "@/utils/types/image";

interface Designer {
    id: string;
    photo: ImgInterface;
    name: string;
    role: string;
    description: string;
}

export type { Designer };
