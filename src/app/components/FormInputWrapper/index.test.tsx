import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FormInputWrapper } from "@/app/components/FormInputWrapper";

describe("FormInputWrapper Componet", function () {
  // Test basic rendering and children
  it("should render children correctly", function () {
    const text = "Some text";
    render(<FormInputWrapper>{text}</FormInputWrapper>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
