import { useEffect, useState } from "react";
import "./App.css";
import type { Transaction } from "./types/allTypes";
import Header from "./components/Header";
import BudgetMonitor from "./components/BudgetMonitor";
import UserInput from "./components/UserInput";
import TransactionList from "./components/TransactionList";
import { to_usd } from "./data/currency_data";

const local_transactions: Transaction[] = localStorage.getItem("transactions")
  ? (JSON.parse(
      localStorage.getItem("transactions") as string
    ) as Transaction[])
  : [];

function App() {
  const [tripSpend, setTripSpend] = useState(0);
  const [tripBudget, setTripBudget] = useState(1600);
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
    <>
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
    </>
  );
}

export default App;
