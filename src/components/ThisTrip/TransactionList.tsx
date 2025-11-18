// import React, { useState } from "react";
import type { Transaction } from "../../types/allTypes";
import TransactionEntry from "./TransactionEntry";

interface TransactionListProps {
  allTransactions: Transaction[];
  setAllTransactions: (newList: Transaction[]) => void;
  CURRENCY_LIST: string[];
}

export default function TransactionList({
  allTransactions,
  setAllTransactions,
  CURRENCY_LIST,
}: TransactionListProps) {
  return (
    <div className="transaction-list-container">
      {allTransactions.map((item) => (
        <TransactionEntry
          entry={item}
          allTransactions={allTransactions}
          setAllTransactions={setAllTransactions}
          CURRENCY_LIST={CURRENCY_LIST}
        />
      ))}
    </div>
  );
}
