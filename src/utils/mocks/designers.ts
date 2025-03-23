import { v4 as uuid } from "uuid";
import type { Designer as DesignerInterface } from "@/utils/types/designer";
import johnDoe from "../../../public/img/designers/john-doe.jpg";
import janeDoe from "../../../public/img/designers/jane-doe.jpg";
import mikeRoss from "../../../public/img/designers/mike-ross.jpg";

const designers: DesignerInterface[] = [
    {
        id: uuid(),
        photo: {
            id: uuid(),
            title: "Smiling Man",
            alt: "A portrait of a man with a beard and dark hair smiling broadly at the camera.",
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
            title: "Woman in Hat",
            alt: "A portrait of a woman with shoulder-length blonde hair wearing a black hat and a red floral dress, looking towards the camera.",
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
            title: "Man in Checkered Shirt",
            alt: "A portrait of a man with wavy blonde hair, wearing a light blue and white checkered shirt and a dark green tie. He is looking directly at the viewer with a gentle smile. The background is softly blurred, suggesting an indoor setting with muted light.",
            path: mikeRoss,
        },
        name: "Mike Ross",
        role: "Architect",
        description:
            "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
    },
];

export { designers };
