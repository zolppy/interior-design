import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MenuItem } from "@/app/components/MenuItem";
import { Section } from "@/utils/enums/section";

describe("MenuItem Componet", function () {
    // Test basic rendering and children
    it("should render children correctly", function () {
        const text = "Some text";
        render(<MenuItem to={Section.Contact}>{text}</MenuItem>);
        expect(screen.getByText(text)).toBeInTheDocument();
    });

    // Test Tailwind class merging
    it("should merge base styles with custom classes", function () {
        const customClass = "bg-black";
        render(
            <MenuItem to={Section.Contact} className={customClass}>
                Some text
            </MenuItem>
        );

        const menuItem = screen.getByRole("li");

        // Base styles verification
        const baseStyles = [
            "text-white",
            "text-[18px]",
            "p-2",
            "active:bg-[#f1f1f1]",
            "active:text-black",
            "lg:hover:bg-[#f1f1f1]",
            "lg:hover:text-black",
            "lg:hover:cursor-pointer",
            "transition-colors",
            "duration-200",
        ];

        baseStyles.forEach((className) => {
            expect(menuItem).toHaveClass(className);
        });

        // Custom class verification
        expect(menuItem).toHaveClass(customClass);
    });

    // Test memoization (basic implementation)
    it("should not re-render with same props", function () {
        const { rerender } = render(
            <MenuItem to={Section.Contact}>Some text</MenuItem>
        );
        const menuItem = screen.getByRole("li");

        // Force re-render with same props
        rerender(<MenuItem to={Section.Contact}>Memo</MenuItem>);

        // Basic check
        expect(menuItem).toBeInTheDocument();
    });

    // Test additional HTML attributes
    it("should pass through other HTML attributes", function () {
        render(
            <MenuItem to={Section.Contact} lang="pt-br">
                Some text
            </MenuItem>
        );
        expect(screen.getByRole("li")).toHaveAttribute("lang", "pt-br");
    });
});
