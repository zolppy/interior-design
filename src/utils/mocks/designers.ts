import { v4 as uuid } from "uuid";
import type { IDesigner } from "@/utils/types/designer";
import johnDoe from "../../../public/img/designers/john-doe.jpg";
import janeDoe from "../../../public/img/designers/jane-doe.jpg";
import mikeRoss from "../../../public/img/designers/mike-ross.jpg";

const designers: IDesigner[] = [
    {
        id: uuid(),
        photo: {
            id: uuid(),
            title: "",
            alt: "",
            path: johnDoe,
        },
        name: "John Doe",
        role: "CEO & Founder",
        description:
            "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
    },
    {
        id: uuid(),
        photo: {
            id: uuid(),
            title: "",
            alt: "",
            path: janeDoe,
        },
        name: "Jane Doe",
        role: "Designer",
        description:
            "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
    },
    {
        id: uuid(),
        photo: {
            id: uuid(),
            title: "",
            alt: "",
            path: mikeRoss,
        },
        name: "Mike Ross",
        role: "Architect",
        description:
            "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
    },
];

export { designers };
