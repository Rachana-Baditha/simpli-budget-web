// import { useState } from "react";
import type { Transaction } from "../types/allTypes";

interface TransactionEntryProps {
  entry: Transaction;
  allTransactions: Transaction[];
  setAllTransactions: (newList: Transaction[]) => void;
}

export default function TransactionEntry({
  entry,
  allTransactions,
  setAllTransactions,
}: TransactionEntryProps) {
  function formatSplit(splitVal: number) {
    return splitVal == 1 ? "1" : "1/2";
  }
  function handleSplit() {
    setAllTransactions(
      allTransactions.map((curr) =>
        curr != entry ? curr : { ...entry, split: entry.split == 1 ? 0.5 : 1 }
      )
    );
    console.log("HI");
  }
  function handleDelete() {
    setAllTransactions(allTransactions.filter((curr) => curr != entry));
  }
  return (
    <div>
      <div>{entry.spend + " | " + entry.reason}</div>
      <input
        type="button"
        value={"x" + formatSplit(entry.split)}
        onClick={handleSplit}
      />
      <input type="button" value={"DEL"} onClick={handleDelete} />
    </div>
  );
}
