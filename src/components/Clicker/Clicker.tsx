import image from "./clicker.svg";
import styles from "./Clicker.module.css";
import ClickGenerator from "../ClickGenerator/ClickGenerator";
import Currency from "../Currency/Currency";

type ClickerProps = {
  currency: number;
  currencyPerClick: number;
  currencyPerSecond: number;
  clicked: React.MouseEventHandler<HTMLImageElement>;
};

const Clicker = ({
  currency,
  currencyPerClick,
  currencyPerSecond,
  clicked,
}: ClickerProps) => (
  <>
    <img
      data-testid="clicker"
      src={image}
      className={styles.Clicker}
      onClick={clicked}
      alt="clicker"
    />
    <div className={styles.ClickerNumberDisplay} data-testid="amount">
      <Currency value={currency} decimals={0} />
    </div>
    <div data-testid="amountPerClick">
      <Currency value={currencyPerClick} /> per click
    </div>
    <ClickGenerator currencyPerSecond={currencyPerSecond} />
  </>
);

export default Clicker;
