const FormInput = ({ id }: { id: string }) => {
    return (
        <input
            type="text"
            required
            id={id}
            className="border border-neutral-300 p-2"
        />
    );
};

export default FormInput;
