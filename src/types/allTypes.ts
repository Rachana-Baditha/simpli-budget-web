import type { Dispatch, SetStateAction } from "react";

interface Event {
  target: {
    value: string;
  };
}

interface Transaction {
  spend: string;
  reason: string;
}

interface UserInputProps {
  allTransactions: Transaction[];
  setAllTransactions: Dispatch<SetStateAction<Array<Transaction>>>;
}

interface BudetMonitorProps {
  tripSpend: number;
  tripBudget: number;
}

export type { Event, Transaction, UserInputProps, BudetMonitorProps };
