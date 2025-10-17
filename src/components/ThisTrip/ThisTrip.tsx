import { useEffect, useState } from "react";
import type { Transaction } from "../../types/allTypes";
import Header from "./Header";
import BudgetMonitor from "./BudgetMonitor";
import UserInput from "./UserInput";
import TransactionList from "./TransactionList";
import { to_usd } from "../../data/currency_data";

const local_transactions: Transaction[] = localStorage.getItem("transactions")
  ? (JSON.parse(
      localStorage.getItem("transactions") as string
    ) as Transaction[])
  : [];

function ThisTrip() {
  const [tripSpend, setTripSpend] = useState(0);
  // const [tripBudget, setTripBudget] = useState(1600);
  const tripBudget = 1600;
  const [tripCurrency, setTripCurrency] = useState("USD");
  const [allTransactions, setAllTransactions] = useState(local_transactions);

  const CURRENCY_LIST = ["USD", "EUR"];

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(allTransactions));
  }, [allTransactions]);

  useEffect(() => {
    let totalSpend = allTransactions.reduce(
      (acc, curr) => acc + curr.spend * curr.split * to_usd[curr.currency],
      0
    );
    setTripSpend(totalSpend);
  }, [allTransactions]);

  return (
    <div className="App">
      <div className="header-container">
        <Header
          title="Amsterdam Trip"
          tripCurrency={tripCurrency}
          setTripCurrency={setTripCurrency}
          CURRENCY_LIST={CURRENCY_LIST}
          setAllTransactions={setAllTransactions}
        />
      </div>
      <div className="functionality-container">
        <BudgetMonitor tripSpend={tripSpend} tripBudget={tripBudget} />
        <UserInput
          allTransactions={allTransactions}
          setAllTransactions={setAllTransactions}
          tripCurrency={tripCurrency}
        />
        <TransactionList
          allTransactions={allTransactions}
          setAllTransactions={setAllTransactions}
          CURRENCY_LIST={CURRENCY_LIST}
        />
      </div>
    </div>
  );
}

export default ThisTrip;
