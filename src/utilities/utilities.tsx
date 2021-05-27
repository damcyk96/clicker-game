export type machine = {
  name: string;
  type: "click" | "generator";
  minCurrency: number;
  initialCost: number;
  cost: number;
  count: number;
  increase: number;
  multiplier: number;
  disabled: boolean;
};

export type upgrade = {
  name: string;
  unlockCount?: number;
  unlockCost?: number;
  cost: number;
  multiplier: number;
};

export const getInitialState = () => {
  const machinesList: machine[] = [
    {
      name: "More stress",
      type: "click",
      minCurrency: 10,
      initialCost: 10,
      cost: 10,
      count: 0,
      increase: 1,
      disabled: false,
      multiplier: 1,
    },
    {
      name: "Night with games",
      type: "generator",
      minCurrency: 50,
      initialCost: 50,
      cost: 50,
      count: 0,
      increase: 1,
      disabled: false,
      multiplier: 1,
    },
    {
      name: "Team Leader is behind you",
      type: "generator",
      minCurrency: 1000,
      initialCost: 1000,
      cost: 1000,
      count: 0,
      increase: 8,
      disabled: true,
      multiplier: 1,
    },
    {
      name: "Live Coding",
      type: "generator",
      minCurrency: 12000,
      initialCost: 12000,
      cost: 12000,
      count: 0,
      increase: 47,
      disabled: true,
      multiplier: 1,
    },
    {
      name: "Deadline",
      type: "generator",
      minCurrency: 120000,
      initialCost: 120000,
      cost: 120000,
      count: 0,
      increase: 260,
      disabled: true,
      multiplier: 1,
    },
    {
      name: "Deploy on Friday",
      type: "generator",
      minCurrency: 1400000,
      initialCost: 1400000,
      cost: 1400000,
      count: 0,
      increase: 1400,
      disabled: true,
      multiplier: 1,
    },
  ];

  const powerUpsList = [
    {
      name: "No Coffee - double bug per click",
      type: "click",
      cost: 1000,
      multiplier: 2,
      enabled: false,
    },
    {
      name: "Few projects - triple bug per click",
      type: "click",
      cost: 5000,
      multiplier: 3,
      enabled: false,
    },
    {
      name: "Apolacypse - fourfold bug per click",
      type: "click",
      cost: 10000,
      multiplier: 2,
      enabled: false,
    },
  ];

  let initialState = {
    title: "Bug Clicker",
    currency: 0,
    totalCurrency: 0,
    currencyPerClick: 1,
    currencyPerSecond: 0,
    clickMultiplier: 1,
    perSecondMultiplier: 1,
    machines: machinesList,
    powerUps: powerUpsList,
  };

  const savedData = localStorage.getItem("savedGame");
  if (savedData) {
    initialState = {
      ...initialState,
      ...JSON.parse(savedData),
    };
  }

  return initialState;
};
