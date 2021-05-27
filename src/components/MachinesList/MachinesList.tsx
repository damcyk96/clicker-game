import React from "react";
import Machine from "./Machine/Machine";
import { machine } from "../../utilities/utilities";

type MachinesListProps = {
  machines: machine[];
  purchased: Function;
  currency: number;
};

const MachinesList = ({ machines, purchased, currency }: MachinesListProps) => (
  <>
    <h1>List of problems</h1>

    {machines.map((machines, index) => (
      <Machine
        key={index}
        name={machines.name}
        type={machines.type}
        cost={machines.cost}
        currency={currency}
        count={machines.count}
        increase={machines.increase}
        disabled={machines.disabled}
        clicked={() => purchased(index)}
      />
    ))}
  </>
);

export default MachinesList;
