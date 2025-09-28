import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import BudgetMonitor from "./components/BudgetMonitor";
import UserInput from "./components/UserInput";
import type { Transaction } from "./types/allTypes";

function App() {
  const [tripSpend, setTripSpend] = useState(0);
  const [tripBudget, setTripBudget] = useState(1600);

  const [allTransactions, setAllTransactions] = useState<Array<Transaction>>(
    []
  );

  useEffect(() => {}, []);

  return (
    <>
      <Header />
      <BudgetMonitor tripSpend={tripSpend} tripBudget={tripBudget} />
      <UserInput
        allTransactions={allTransactions}
        setAllTransactions={setAllTransactions}
      />
    </>
  );
}

export default App;
