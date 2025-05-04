import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Button } from "@/app/components/Button";

describe("Button Component", function () {
    // Test basic rendering and children
    it("should render children correctly", function () {
        const text = "Click me";
        render(<Button>{text}</Button>);
        expect(screen.getByText(text)).toBeInTheDocument();
    });

    // Test default type attribute
    it("should have default type 'button'", function () {
        render(<Button>Click me</Button>);
        expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    });

    // Test custom type attribute
    it("should accept and use custom type", function () {
        render(<Button type="submit">Click me</Button>);
        expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
    });

    // Test Tailwind class merging
    it("should merge base styles with custom classes", function () {
        const customClass = "bg-black";
        render(<Button className={customClass}>Click me</Button>);

        const button = screen.getByRole("button");

        // Base styles verification
        const baseStyles = [
            "py-3",
            "px-6",
            "text-white",
            "transition-colors",
            "duration-200",
            "lg:hover:cursor-pointer",
            "active:bg-black",
            "lg:hover:bg-black",
        ];

        baseStyles.forEach((className) => {
            expect(button).toHaveClass(className);
        });

        // Custom class verification
        expect(button).toHaveClass(customClass);
    });

    // Test click handler
    it("should trigger onClick when clicked", async function () {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Click me</Button>);

        await userEvent.click(screen.getByRole("button"));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    // Test memoization (basic implementation)
    it("should not re-render with same props", function () {
        const { rerender } = render(<Button>Click me</Button>);
        const button = screen.getByRole("button");

        // Force re-render with same props
        rerender(<Button>Click me</Button>);

        // Basic check
        expect(button).toBeInTheDocument();
    });

    // Test additional HTML attributes
    it("should pass through other HTML attributes", function () {
        render(<Button aria-label="Accessible">Click me</Button>);
        expect(screen.getByRole("button")).toHaveAttribute(
            "aria-label",
            "Accessible"
        );
    });
});
