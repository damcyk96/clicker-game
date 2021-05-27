import { fireEvent, render, screen } from "@testing-library/react";
import Shop from "./Shop";

describe("Shop", () => {
  test("renders the document title", () => {
    render(<Shop />);
    expect(document.title).toBe("Bug Clicker");
  });
});

describe("Shop using", () => {
  test("renders list of machines text", () => {
    render(<Shop />);
    const machines = screen.getByText("List of problems");
    expect(machines).toBeInTheDocument();
  });

  test("renders with a single click", () => {
    render(<Shop />);
    const clicker = screen.getByAltText("clicker");
    const currencyText = screen.getAllByText("0 bug")[0];
    fireEvent.click(clicker);
    expect(currencyText).toHaveTextContent("1 bug");
  });

  test("able to make a purchase", () => {
    render(<Shop />);
    const clicker = screen.getByAltText("clicker");
    const currencyText = screen.getAllByText("0 bug")[0];
    const machineToPurchase = screen.getByText("More stress");

    for (let i = 0; i < 10; i++) {
      fireEvent.click(clicker);
    }
    expect(currencyText).toHaveTextContent("10 bugs");

    fireEvent.click(machineToPurchase);
    expect(currencyText).toHaveTextContent("0 bug");
  });
});
