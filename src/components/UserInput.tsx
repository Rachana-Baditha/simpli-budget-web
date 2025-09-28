import { useState } from "react";
import type { Event, Transaction } from "../types/allTypes";

interface UserInputProps {
  allTransactions: Transaction[];
  setAllTransactions: (newTransactions: Transaction[]) => void;
}

export default function UserInput({
  allTransactions,
  setAllTransactions,
}: UserInputProps) {
  const [currentSpend, setCurrentSpend] = useState("");
  const REGEX = /^(\d+\.?\d*)\s?(?:(?:for|at|on)?\s*(.*))?$/g;
  const checkInput = REGEX.exec(currentSpend);

  function handleInput(e: Event) {
    setCurrentSpend(e.target.value);
  }

  function handleSubmit() {
    let spend: string = "0";
    let reason: string = "";

    if (checkInput) [spend, reason] = checkInput.slice(1, 3);
    else console.log("REGEX FAILED");

    let newList = [...allTransactions, { spend: spend, reason: reason }];

    setAllTransactions(newList);
    setCurrentSpend("");
  }

  return (
    <div>
      <input
        type="text"
        value={currentSpend}
        placeholder="Spend for Reason"
        onChange={handleInput}
      />
      <input
        type="button"
        value=">"
        onClick={handleSubmit}
        disabled={checkInput == null}
      />
      <div>
        {allTransactions.map((item) => (
          <div>{item.spend + " " + item.reason}</div>
        ))}
      </div>
    </div>
  );
}
