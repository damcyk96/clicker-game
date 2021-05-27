import Currency from "../../Currency/Currency";
import styles from "./Machine.module.css";

export type MachineProps = {
  name: string;
  cost: number;
  count: number;
  currency: number;
  increase: number;
  type: "click" | "generator";
  clicked: React.MouseEventHandler<HTMLDivElement>;
  disabled?: boolean;
};

const Machine = ({
  name,
  cost,
  count,
  currency,
  increase,
  type,
  clicked,
  disabled = false,
}: MachineProps) => {
  let className = [styles.Machine];
  if (disabled) {
    className.push(styles.Disabled);
  }

  if (currency >= cost) {
    className.push(styles.Available);
  }

  return (
    <div className={className.join(" ")} onClick={clicked}>
      <div className={styles.Container}>
        <div className={styles.Name}>{name}</div>
        <div>
          <Currency value={cost} decimals={0} />
        </div>
        <div className={styles.Count}>{count > 0 && count}</div>
      </div>
      <p className={styles.Description}>
        +<Currency value={increase} decimals={0} /> per{" "}
        {type === "generator" ? "second" : type}
      </p>
    </div>
  );
};

export default Machine;
