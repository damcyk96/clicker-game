import React, { useEffect, useState } from "react";
import Clicker from "../../components/Clicker/Clicker";
import PowerUpsList from "../../components/PowerUpsList/PowerUpsList";
import Machines from "../../components/MachinesList/MachinesList";
import useInterval from "../../hooks/useInterval";
import styles from "./Shop.module.css";
import { getInitialState } from "../../utilities/utilities";
import ResetButton from "../../components/ResetButton/ResetButton";
import Level from "../../components/Level/Level";

const Shop = () => {
  const initialState = getInitialState();
  const [documentTitle, setDocumentTitle] = useState(initialState.title);
  const [currency, setCurrency] = useState(initialState.currency);
  const [totalCurrency, setTotalCurrency] = useState(
    initialState.totalCurrency
  );
  const [currencyPerClick, setCurrencyPerClick] = useState(
    initialState.currencyPerClick
  );
  const [currencyPerSecond, setCurrencyPerSecond] = useState(
    initialState.currencyPerSecond
  );
  const [clickMultiplier, setClickMultiplier] = useState(
    initialState.clickMultiplier
  );
  const [perSecondMultiplier, setPerSecondMultiplier] = useState(
    initialState.perSecondMultiplier
  );
  const [machines, setMachines] = useState(initialState.machines);
  const [powerUps, setPowerUps] = useState(initialState.powerUps);
  const intervalDivider = 4;
  const machineMultiplier = 1.2;

  useEffect(() => {
    document.title = documentTitle;
  }, [documentTitle]);

  useInterval(() => {
    const saveData = {
      currency: currency,
      currencyPerClick: currencyPerClick,
      currencyPerSecond: currencyPerSecond,
      totalCurrency: totalCurrency,
      clickMultiplier: clickMultiplier,
      perSecondMultiplier: perSecondMultiplier,
      machines: machines,
      powerUps: powerUps,
    };
    localStorage.setItem("savedGame", JSON.stringify(saveData));
  }, 5000);

  useInterval(() => {
    setDocumentTitle(`${currency.toFixed(0)} Bugs - Bug Clicker`);
  }, 5000);

  useInterval(() => {
    setCurrency(
      currency + (currencyPerSecond * perSecondMultiplier) / intervalDivider
    );
    setTotalCurrency(
      (current) =>
        current + (currencyPerSecond * perSecondMultiplier) / intervalDivider
    );

    const updatedMachines = [...machines];
    machines.forEach((machine, index) => {
      if (machine.disabled && currency >= machine.minCurrency) {
        updatedMachines[index] = {
          ...updatedMachines[index],
          disabled: false,
        };
        setMachines(updatedMachines);
      }
    });
  }, 1000 / intervalDivider);

  const clickHandler = () => {
    setTotalCurrency((current) => current + currencyPerClick * clickMultiplier);
    setCurrency(currency + currencyPerClick * clickMultiplier);
  };

  const clickedMachineHandler = (index: number) => {
    const cost = machines[index].cost;
    if (currency >= cost) {
      const updatedMachines = [...machines];
      const updatedCount = updatedMachines[index].count + 1;

      updatedMachines[index] = {
        ...updatedMachines[index],
        count: updatedCount,
        cost:
          updatedMachines[index].initialCost *
          machineMultiplier ** updatedCount,
      };

      if (updatedMachines[index].type === "click") {
        setCurrencyPerClick(currencyPerClick + updatedMachines[index].increase);
      } else if (updatedMachines[index].type === "generator") {
        setCurrencyPerSecond(
          currencyPerSecond + updatedMachines[index].increase
        );
      }

      setMachines(updatedMachines);
      setCurrency(currency - cost);
    }
  };

  const clickedPowerUpHandler = (index: number) => {
    if (!powerUps[index].enabled) {
      const cost = powerUps[index].cost;
      if (currency >= cost) {
        const updatedPowerUps = [...powerUps];
        updatedPowerUps[index] = {
          ...updatedPowerUps[index],
          enabled: true,
        };

        setPowerUps(updatedPowerUps);
        setCurrency(currency - cost);

        if (updatedPowerUps[index].type === "click") {
          setClickMultiplier(
            clickMultiplier * updatedPowerUps[index].multiplier
          );
        } else if (updatedPowerUps[index].type === "generator") {
          setPerSecondMultiplier(
            perSecondMultiplier * updatedPowerUps[index].multiplier
          );
        }
      }
    }
  };

  return (
    <div className={styles.Shop}>
      <div className={styles.Left}>
        <Clicker
          currency={currency}
          currencyPerClick={currencyPerClick * clickMultiplier}
          currencyPerSecond={currencyPerSecond * perSecondMultiplier}
          clicked={clickHandler}
        />
        <Level totalCurrency={totalCurrency} />
        <PowerUpsList
          powerUps={powerUps}
          currency={currency}
          clicked={clickedPowerUpHandler}
        />
      </div>
      <div className={styles.Right}>
        <Machines
          machines={machines}
          currency={currency}
          purchased={clickedMachineHandler}
        />
        <ResetButton />
      </div>
    </div>
  );
};

export default Shop;
