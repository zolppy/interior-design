import { StaticImageData } from "next/image";

interface IImage {
    id: string;
    title: string;
    alt: string;
    path: StaticImageData;
}

export type { IImage };
