import React, { useState } from "react";
import type { Transaction } from "../types/allTypes";
import TransactionEntry from "./TransactionEntry";

interface TransactionListProps {
  allTransactions: Transaction[];
  setAllTransactions: (newList: Transaction[]) => void;
}

export default function TransactionList({
  allTransactions,
  setAllTransactions,
}: TransactionListProps) {
  return (
    <div>
      {allTransactions.map((item) => (
        <TransactionEntry
          entry={item}
          allTransactions={allTransactions}
          setAllTransactions={setAllTransactions}
        />
      ))}
    </div>
  );
}
