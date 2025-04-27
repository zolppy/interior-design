import { HTMLAttributes } from "react";
import { ClassNameValue, twMerge } from "tailwind-merge";

interface FormInput extends HTMLAttributes<HTMLInputElement> {
    id: string;
    type?: "text" | "date" | "datetime" | "email" | "tel";
    required: boolean;
    placeholder: string;
}

export function FormInput({
    id,
    type = "text",
    required,
    placeholder,
    className = "",
    ...props
}: FormInput) {
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
}

FormInput.displayName = "FormInput";
