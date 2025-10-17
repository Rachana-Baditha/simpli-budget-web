type Event = {
  target: {
    value: string;
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
  currency: string;
  total: number;
  transactions: Transaction[];
};

export type { Event, Transaction, Trip };
