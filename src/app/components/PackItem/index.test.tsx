import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PackItem } from "@/app/components/PackItem";

describe("PackItem Componet", function () {
  // Test basic rendering and children
  it("should render children correctly", function () {
    const text = "Some text";
    render(<PackItem>{text}</PackItem>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
