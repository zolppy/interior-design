import { ReactNode } from "react";

interface IFormInputWrapper {
    children: ReactNode;
}

export const FormInputWrapper = ({ children }: IFormInputWrapper) => {
    return <div className="flex flex-col gap-y-1">{children}</div>;
};

FormInputWrapper.displayName = "FormInputWrapper";
