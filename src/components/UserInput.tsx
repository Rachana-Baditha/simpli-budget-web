import { useState } from "react";
import "./css/UserInput.css";
import type { Event, Transaction } from "../types/allTypes";

interface UserInputProps {
  allTransactions: Transaction[];
  setAllTransactions: (newTransactions: Transaction[]) => void;
  tripCurrency: string;
}

export default function UserInput({
  allTransactions,
  setAllTransactions,
  tripCurrency,
}: UserInputProps) {
  const [currentSpend, setCurrentSpend] = useState("");
  const REGEX =
    /^(\d+\.?\d*(?:\s*(?:\+|-|\*|\\)\s*(?:\d+\.?\d*))*)\s?(?:(?:for|at|on)?\s*(.*))?$/g;
  const checkInput = REGEX.exec(currentSpend);

  function capitalizePhrase(phrase: string) {
    return phrase
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1, word.length))
      .join(" ");
  }

  function handleInput(e: Event) {
    setCurrentSpend(e.target.value);
  }

  function handleSubmit() {
    let spend: number = 0;
    let reason: string = "";

    if (checkInput) {
      spend = Number(eval(checkInput[1]));
      reason = checkInput[2];
    } else console.log("REGEX FAILED");

    let newList = [
      {
        raw: currentSpend,
        spend: spend,
        reason: reason ? capitalizePhrase(reason) : "",
        split: 1,
        currency: tripCurrency,
      },
      ...allTransactions,
    ];

    setAllTransactions(newList);
    setCurrentSpend("");
  }

  return (
    <div
      className={
        checkInput == null
          ? "user-input-container-disabled"
          : "user-input-container-enabled"
      }
    >
      <div className="user-input-bar">
        <input
          className="user-input"
          type="text"
          value={currentSpend}
          placeholder="Spend for Reason"
          onChange={handleInput}
        />
      </div>
      <input
        className={
          checkInput == null ? "user-submit-disabled" : "user-submit-enabled"
        }
        type="button"
        value=">"
        onClick={handleSubmit}
        disabled={checkInput == null}
      />
    </div>
  );
}
