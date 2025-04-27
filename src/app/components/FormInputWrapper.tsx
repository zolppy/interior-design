import { ReactNode } from "react";

interface IFormInputWrapper {
    children: ReactNode;
}

export function FormInputWrapper({ children }: IFormInputWrapper) {
    return <div className="flex flex-col gap-y-1">{children}</div>;
}

FormInputWrapper.displayName = "FormInputWrapper";
