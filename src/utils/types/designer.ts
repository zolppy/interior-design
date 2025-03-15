import type { IImage } from "@/utils/types/image";

interface IDesigner {
    id: string;
    photo: IImage;
    name: string;
    role: string;
    description: string;
}

export type { IDesigner };
