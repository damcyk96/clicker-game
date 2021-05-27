import { render, screen } from "@testing-library/react";
import Achivements from "./Achivements";

describe("Shop", () => {
  test("renders the document title", () => {
    render(<Achivements />);
    const text = screen.getByText("Wkrótce");
    expect(text).toBeInTheDocument();
  });
});
