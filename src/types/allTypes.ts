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

export type { Event, Transaction };
