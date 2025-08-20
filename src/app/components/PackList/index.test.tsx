import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PackList } from "@/app/components/PackList";

describe("PackList Componet", function () {
  // Test basic rendering and children
  it("should render children correctly", function () {
    const text = "Some text";
    render(<PackList>{text}</PackList>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
