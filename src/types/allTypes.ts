type Event = {
  target: {
    value: string;
  };
};

type Transaction = {
  spend: string;
  reason: string;
};

export type { Event, Transaction };
