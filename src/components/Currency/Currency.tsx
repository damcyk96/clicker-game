type CurrencyProps = {
  value: number;
  decimals?: number;
  currency?: string;
};

const Currency = ({ value, decimals = 2, currency = "bug" }: CurrencyProps) => {
  const formattedValue = value.toFixed(decimals);
  const displayedValue = (+formattedValue).toLocaleString("pl-PL", {
    minimumFractionDigits: 0,
  });
  if (value > 1) {
    currency += "s";
  }

  return (
    <span>
      {displayedValue} {currency}
    </span>
  );
};

export default Currency;
