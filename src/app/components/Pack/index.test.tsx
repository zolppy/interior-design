import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Pack } from "@/app/components/Pack";

describe("Pack Componet", function () {
    // Test basic rendering and children
    it("should render children correctly", function () {
        const text = "Some text";
        render(<Pack>{text}</Pack>);
        expect(screen.getByText(text)).toBeInTheDocument();
    });
});
