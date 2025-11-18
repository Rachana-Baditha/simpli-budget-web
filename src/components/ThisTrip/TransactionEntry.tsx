import { useState } from "react";
import type { Transaction } from "../../types/allTypes";
import "./css/TransactionStyles.css";
import { currency_symbol } from "../../data/currency_data";

interface TransactionEntryProps {
  entry: Transaction;
  allTransactions: Transaction[];
  setAllTransactions: (newList: Transaction[]) => void;
  CURRENCY_LIST: string[];
}

export default function TransactionEntry({
  entry,
  allTransactions,
  setAllTransactions,
  CURRENCY_LIST,
}: TransactionEntryProps) {
  const [showOptions, setShowOptions] = useState(false);
  function handleSplit() {
    setAllTransactions(
      allTransactions.map((curr) =>
        curr != entry ? curr : { ...entry, split: entry.split == 1 ? 0.5 : 1 }
      )
    );
  }
  function switchCurrency() {
    setAllTransactions(
      allTransactions.map((curr) =>
        curr != entry
          ? curr
          : {
              ...entry,
              currency:
                CURRENCY_LIST[
                  (CURRENCY_LIST.indexOf(entry.currency) + 1) %
                    CURRENCY_LIST.length
                ],
            }
      )
    );
  }
  function handleDelete() {
    setShowOptions(false);
    setAllTransactions(allTransactions.filter((curr) => curr != entry));
  }
  function revealOptions() {
    setShowOptions(!showOptions);
  }
  function handleEdit() {
    console.log(entry.raw);
  }
  return (
    <div className="entry-container">
      <div className="entry-details" onClick={revealOptions}>
        <div>{entry.reason}</div>
        <div className="entry-amounts">
          {entry.split !== 1 && (
            <div className="entry-amount-item">
              {String(entry.spend)} / {1 / entry.split}
            </div>
          )}
          <div className="entry-amount-item">
            {currency_symbol[entry.currency] +
              String(entry.spend * entry.split)}
          </div>
        </div>
      </div>
      {showOptions && (
        <div className="entry-options">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            height={20}
            onClick={handleDelete}
          >
            <path d="M136.7 5.9C141.1-7.2 153.3-16 167.1-16l113.9 0c13.8 0 26 8.8 30.4 21.9L320 32 416 32c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 8.7-26.1zM32 144l384 0 0 304c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-304zm88 64c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            height={20}
            onClick={handleSplit}
          >
            {entry.split == 1 ? (
              <path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z" />
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M448 256c0-106-86-192-192-192l0 384c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z" />
              </svg>
            )}
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            height={20}
            onClick={switchCurrency}
          >
            {entry.currency == "USD" ? (
              <path d="M136 24c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 56 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-114.9 0c-24.9 0-45.1 20.2-45.1 45.1 0 22.5 16.5 41.5 38.7 44.7l91.6 13.1c53.8 7.7 93.7 53.7 93.7 108 0 60.3-48.9 109.1-109.1 109.1l-10.9 0 0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40-72 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l130.9 0c24.9 0 45.1-20.2 45.1-45.1 0-22.5-16.5-41.5-38.7-44.7l-91.6-13.1C55.9 273.5 16 227.4 16 173.1 16 112.9 64.9 64 125.1 64l10.9 0 0-40z" />
            ) : (
              <path d="M73.3 192C100.8 99.5 186.5 32 288 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-65.6 0-122 39.5-146.7 96L272 192c13.3 0 24 10.7 24 24s-10.7 24-24 24l-143.2 0c-.5 5.3-.8 10.6-.8 16s.3 10.7 .8 16L272 272c13.3 0 24 10.7 24 24s-10.7 24-24 24l-130.7 0c24.7 56.5 81.1 96 146.7 96l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-101.5 0-187.2-67.5-214.7-160L40 320c-13.3 0-24-10.7-24-24s10.7-24 24-24l24.6 0c-.7-10.5-.7-21.5 0-32L40 240c-13.3 0-24-10.7-24-24s10.7-24 24-24l33.3 0z" />
            )}
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            height={20}
            onClick={handleEdit}
          >
            <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L368 46.1 465.9 144 490.3 119.6c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L432 177.9 334.1 80 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z" />
          </svg>
        </div>
      )}
      <hr className="entry-divider" />
    </div>
  );
}
