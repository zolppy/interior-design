import { HTMLAttributes } from "react";
import { ClassNameValue, twMerge } from "tailwind-merge";

interface IFormInput extends HTMLAttributes<HTMLInputElement> {
    id: string;
    type?: "text" | "date" | "datetime" | "email" | "tel";
    required: boolean;
    placeholder: string;
}

export const FormInput = ({
    id,
    type = "text",
    required,
    placeholder,
    className = "",
    ...props
}: IFormInput) => {
    const baseStyles = "border border-neutral-300 p-2";

    return (
        <input
            {...props}
            id={id}
            type={type}
            required={required}
            placeholder={placeholder}
            className={twMerge(baseStyles, className as ClassNameValue)}
        />
    );
};

FormInput.displayName = "FormInput";
