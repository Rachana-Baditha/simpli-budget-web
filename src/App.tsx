import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import BudgetMonitor from "./components/BudgetMonitor";
import UserInput from "./components/UserInput";

function App() {
  const [tripSpend, setTripSpend] = useState(0);
  const [tripBudget, setTripBudget] = useState(1600);

  const [allTransactions, setAllTransactions] = useState([]);

  return (
    <>
      <Header />
      <BudgetMonitor tripSpend={tripSpend} tripBudget={tripBudget} />
      <UserInput />
    </>
  );
}

export default App;
