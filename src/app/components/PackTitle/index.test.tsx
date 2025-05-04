import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PackTitle } from "@/app/components/PackTitle";

describe("PackTitle Componet", function () {
    // Test basic rendering and children
    it("should render children correctly", function () {
        const text = "Some text";
        render(<PackTitle>{text}</PackTitle>);
        expect(screen.getByText(text)).toBeInTheDocument();
    });

    // Test Tailwind class merging
    it("should merge base styles with custom classes", function () {
        const customClass = "font-bold";
        const text = "Some text";
        render(<PackTitle className={customClass}>{text}</PackTitle>);

        const packTitle = screen.getByText(text);

        // Base styles verification
        const baseStyles = [
            "text-2xl",
            "text-white",
            "py-8",
            "px-4",
            "text-center",
            "bg-[#f44336]",
        ];

        baseStyles.forEach((className) => {
            expect(packTitle).toHaveClass(className);
        });

        // Custom class verification
        expect(packTitle).toHaveClass(customClass);
    });

    // Test additional HTML attributes
    it("should pass through other HTML attributes", function () {
        const text = "Some text";
        render(<PackTitle lang="pt-br">{text}</PackTitle>);
        expect(screen.getByText(text)).toHaveAttribute("lang", "pt-br");
    });
});
