interface FormInput {
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
}: FormInput) {
  return (
    <input
      id={id}
      type={type}
      required={required}
      placeholder={placeholder}
      className="border border-neutral-300 p-2"
    />
  );
}

FormInput.displayName = "FormInput";
