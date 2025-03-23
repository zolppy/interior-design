const FormInputWrapper = ({ children }: { children: React.ReactNode }) => {
    return <div className="flex flex-col gap-y-1">{children}</div>;
};

FormInputWrapper.displayName = "FormInputWrapper";

export default FormInputWrapper;
