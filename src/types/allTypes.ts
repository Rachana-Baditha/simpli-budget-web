type Event = {
  target: {
    value: string;
  };
};

type Transaction = {
  spend: number;
  reason: string;
  split: number;
};

export type { Event, Transaction };
