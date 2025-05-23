import { v4 as uuid } from "uuid";
import type { Img } from "@/utils/types/img";
import kitchenConcrete from "../../../public/img/showcases/kitchenconcrete.jpg";
import atrium from "../../../public/img/showcases/atrium.jpg";
import livingRoom from "../../../public/img/showcases/livingroom.jpg";
import bedRoom from "../../../public/img/showcases/bedroom.jpg";
import diningRoom from "../../../public/img/showcases/diningroom.jpg";
import livingRoom2 from "../../../public/img/showcases/livingroom2.jpg";

const showcases: Img[] = [
    {
        id: uuid(),
        path: kitchenConcrete,
        title: "Modern industrial kitchen with rustic decor and natural lighting",
        alt: "An overhead view of a modern industrial kitchen with exposed brick walls, large windows, dark countertops and a rustic wooden table surrounded by white chairs.",
    },
    {
        id: uuid(),
        path: atrium,
        title: "Cozy wooden living room with a stunning nature view",
        alt: "Warm and inviting living room with wooden interiors, large glass windows, a comfortable sofa, and a scenic view of a lush garden with outdoor seating.",
    },
    {
        id: uuid(),
        path: livingRoom,
        title: "Modern minimalist living and dining space",
        alt: "Stylish modern living room with Scandinavian-inspired furniture, featuring a black sofa, wooden chairs, a white dining table, and a cozy atmosphere.",
    },
    {
        id: uuid(),
        path: bedRoom,
        title: "Modern Bedroom with Desk",
        alt: "Image of a stylish bedroom with a wooden accent wall, a bed with white and grey bedding, and a white desk set up with a computer and speakers. A black chair with a 'NEW YORK' pillow sits next to the desk.",
    },
    {
        id: uuid(),
        path: diningRoom,
        title: "Dining Room with Modern Chairs",
        alt: "A dining room features a wooden table surrounded by four white modern chairs, with natural light coming through a window.",
    },
    {
        id: uuid(),
        path: livingRoom2,
        title: "Modern Living Room Interior",
        alt: "A glimpse into a modern living room with white walls, wood floors, a grey sectional sofa with patterned pillows, and a round coffee table.",
    },
];

export { showcases };
