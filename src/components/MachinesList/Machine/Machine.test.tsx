import { render, within } from "@testing-library/react";
import Machine, { MachineProps } from "./Machine";

const machine: MachineProps = {
  name: "Machine 1",
  cost: 10,
  count: 1,
  currency: 100,
  increase: 10,
  type: "generator",
  clicked: () => {},
  disabled: false,
};

describe("Machine", () => {
  test("renders properly", () => {
    const { baseElement } = render(<Machine {...machine} />);
    expect(
      within(baseElement as HTMLElement).getByText("Machine 1")
    ).toBeTruthy();
  });

  test("renders an available machine", () => {
    const { container } = render(<Machine {...machine} />);
    const classes = container!.firstElementChild!.className;
    expect(classes).toContain("Available");
  });

  test("renders a disabled machine", () => {
    const props: MachineProps = { ...machine, disabled: true };
    const { container } = render(<Machine {...props} />);
    const classes = container!.firstElementChild!.className;
    expect(classes).toContain("Disabled");
  });
});
