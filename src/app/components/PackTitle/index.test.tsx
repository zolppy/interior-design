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
        const customClass = "bg-black";
        render(<PackTitle className={customClass}>Some text</PackTitle>);

        const packTitle = screen.getByRole("h3");

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
        render(<PackTitle lang="pt-br">Click me</PackTitle>);
        expect(screen.getByRole("button")).toHaveAttribute("lang", "pt-br");
    });
});
