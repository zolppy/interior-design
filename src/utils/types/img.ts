import { StaticImageData } from "next/image";

interface Img {
  id?: string;
  path: StaticImageData;
  title: string;
  alt: string;
}

export type { Img };
