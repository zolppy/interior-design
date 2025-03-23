const FormBtn = () => {
    return (
        <button
            type="submit"
            className="bg-[#f44336] py-3 px-6 text-white active:text-black lg:hover:text-black active:bg-[#ccc] lg:hover:bg-[#ccc] lg:hover:cursor-pointer"
        >
            Send Message
        </button>
    );
};

FormBtn.displayName = "FormBtn";

export default FormBtn;
