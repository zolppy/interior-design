import { Section as SectionEnum } from "@/utils/enums/section";

type Section =
    | SectionEnum.Home
    | SectionEnum.Showcase
    | SectionEnum.Services
    | SectionEnum.Designers
    | SectionEnum.Packages
    | SectionEnum.Contact;

export type { Section };
