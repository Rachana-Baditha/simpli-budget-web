import { useEffect, useState } from "react";
import "./App.css";
import type { Transaction } from "./types/allTypes";
import Header from "./components/Header";
import BudgetMonitor from "./components/BudgetMonitor";
import UserInput from "./components/UserInput";
import TransactionList from "./components/TransactionList";

function App() {
  const [tripSpend, setTripSpend] = useState(0);
  const [tripBudget, setTripBudget] = useState(1600);

  const [allTransactions, setAllTransactions] = useState([] as Transaction[]);

  useEffect(() => {
    let totalSpend = allTransactions.reduce(
      (acc, curr) => acc + curr.spend * curr.split,
      0
    );
    setTripSpend(totalSpend);
  }, [allTransactions]);

  return (
    <>
      <Header />
      <BudgetMonitor tripSpend={tripSpend} tripBudget={tripBudget} />
      <UserInput
        allTransactions={allTransactions}
        setAllTransactions={setAllTransactions}
      />
      <TransactionList
        allTransactions={allTransactions}
        setAllTransactions={setAllTransactions}
      />
    </>
  );
}

export default App;
