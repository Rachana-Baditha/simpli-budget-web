import { useState } from "react";
import "./css/AllStyles.css";
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
    let spend: number = 0;
    let reason: string = "";

    if (checkInput) {
      spend = Number(checkInput[1]);
      reason = checkInput[2];
    } else console.log("REGEX FAILED");

    let newList = [
      ...allTransactions,
      { spend: spend, reason: reason, split: 1 },
    ];

    console.log(newList);

    setAllTransactions(newList);
    setCurrentSpend("");
  }

  return (
    <div>
      <input
        className="user-input"
        style={{
          borderColor: checkInput == null ? "#cfcfcfff" : "#9f5b5bff",
          color: "#433838ff",
        }}
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
    </div>
  );
}
