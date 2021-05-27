import React from "react";
import Currency from "../Currency/Currency";

type ClickGeneratorProps = {
  currencyPerSecond: number;
};

const ClickGenerator = ({ currencyPerSecond }: ClickGeneratorProps) => (
  <div>
    Auto-generating <Currency value={currencyPerSecond} /> per second
  </div>
);

export default ClickGenerator;
