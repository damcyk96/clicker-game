import React, { useMemo } from "react";
import Currency from "../Currency/Currency";

type LevelProps = {
  totalCurrency: number;
};

const Level = ({ totalCurrency }: LevelProps) => {
  // eslint-disable-next-line
  const level = useMemo(() => getLevelByTotal(), [totalCurrency]);
  return (
    <div>
      <div data-testid="totalAmount">
        <Currency value={totalCurrency} decimals={0} /> total
      </div>
      <br />
      <span data-testid="level">Level: {level}</span>
    </div>
  );

  // @ts-ignore
  function getLevelByTotal(multiplier = 2, level = 3) {
    if (totalCurrency < 10) return 1;
    if (totalCurrency >= 10 && totalCurrency < 20) return 2;
    if (totalCurrency >= 10 * multiplier && totalCurrency < 20 * multiplier)
      return level;
    return getLevelByTotal(multiplier * 2, level + 1);
  }
};

export default Level;
