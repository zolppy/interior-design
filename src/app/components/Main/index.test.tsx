import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Main } from "@/app/components/Main";

describe("Main Componet", function () {
  // Test basic rendering and children
  it("should render children correctly", function () {
    const text = "Some text";
    render(<Main>{text}</Main>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
