import type { Img } from "@/utils/types/img";

interface Designer {
    id?: string;
    photo: Img;
    name: string;
    role: string;
    description: string;
}

export type { Designer };
