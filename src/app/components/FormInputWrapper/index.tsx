import { ReactNode } from "react";

interface FormInputWrapper {
    children: ReactNode;
}

export function FormInputWrapper({ children }: FormInputWrapper) {
    return <div className="flex flex-col gap-y-1">{children}</div>;
}

FormInputWrapper.displayName = "FormInputWrapper";
