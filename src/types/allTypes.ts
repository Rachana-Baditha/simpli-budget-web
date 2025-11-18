type Event = {
  target: {
    value: string;
    checked: boolean;
  };
};

type Transaction = {
  raw: string;
  spend: number;
  reason: string;
  split: number;
  currency: string;
};

type Trip = {
  uid: string;
  name: string;
  currency: string[];
  total: number;
  maxSplit: number;
  transactions: Transaction[];
};

export type { Event, Transaction, Trip };
