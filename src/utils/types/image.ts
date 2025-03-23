import { StaticImageData } from "next/image";

interface Img {
    id: string;
    title: string;
    alt: string;
    path: StaticImageData;
}

export type { Img };
