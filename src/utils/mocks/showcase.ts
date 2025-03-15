import { v4 as uuid } from "uuid";
import type { IImage } from "@/utils/types/image";
import kitchenConcrete from "../../../public/img/showcases/kitchenconcrete.jpg";
import atrium from "../../../public/img/showcases/atrium.jpg";
import livingRoom from "../../../public/img/showcases/livingroom.jpg";
import bedRoom from "../../../public/img/showcases/bedroom.jpg";
import diningRoom from "../../../public/img/showcases/diningroom.jpg";
import livingRoom2 from "../../../public/img/showcases/livingroom2.jpg";

const showcases: IImage[] = [
    {
        id: uuid(),
        title: "",
        alt: "",
        path: kitchenConcrete,
    },
    {
        id: uuid(),
        title: "",
        alt: "",
        path: atrium,
    },
    {
        id: uuid(),
        title: "",
        alt: "",
        path: livingRoom,
    },
    {
        id: uuid(),
        title: "",
        alt: "",
        path: bedRoom,
    },
    {
        id: uuid(),
        title: "",
        alt: "",
        path: diningRoom,
    },
    {
        id: uuid(),
        title: "",
        alt: "",
        path: livingRoom2,
    },
];

export { showcases };
