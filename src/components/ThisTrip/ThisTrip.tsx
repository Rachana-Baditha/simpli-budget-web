import { useEffect, useState } from "react";
import type { Transaction } from "../../types/allTypes";
import Header from "./Header";
import BudgetMonitor from "./BudgetMonitor";
import UserInput from "./UserInput";
import TransactionList from "./TransactionList";
import { to_usd } from "../../data/currency_data";
import type { Trip } from "../../types/allTypes";

interface ThisTripProps {
  currentTrip: Trip;
  updateTrip: (updatedTrip: Trip) => void;
  setCurrentPage: (newPage: string) => void;
}

function ThisTrip({ currentTrip, updateTrip, setCurrentPage }: ThisTripProps) {
  const [tripSpend, setTripSpend] = useState(0);
  // const [tripBudget, setTripBudget] = useState(1600);
  const tripBudget = 1600;
  const [tripCurrency, setTripCurrency] = useState("USD");
  const allTransactions = currentTrip.transactions;

  const CURRENCY_LIST = ["USD", "EUR"];

  useEffect(() => {
    let totalSpend = allTransactions.reduce(
      (acc, curr) => acc + curr.spend * curr.split * to_usd[curr.currency],
      0
    );
    setTripSpend(totalSpend);
  }, [allTransactions]);

  const updateTransactions = (newTransactions: Transaction[]) => {
    const updatedTrip = { ...currentTrip, transactions: newTransactions };
    updateTrip(updatedTrip);
  };

  console.log("CURRENT TRIP IN THIS TRIP:", currentTrip);

  return (
    <div className="App">
      <div className="header-container">
        <Header
          title={currentTrip.name}
          tripCurrency={tripCurrency}
          setTripCurrency={setTripCurrency}
          CURRENCY_LIST={CURRENCY_LIST}
          setAllTransactions={updateTransactions}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <div className="functionality-container">
        <BudgetMonitor tripSpend={tripSpend} tripBudget={tripBudget} />
        <UserInput
          allTransactions={allTransactions}
          setAllTransactions={updateTransactions}
          tripCurrency={tripCurrency}
        />
        <TransactionList
          allTransactions={allTransactions}
          setAllTransactions={updateTransactions}
          CURRENCY_LIST={CURRENCY_LIST}
        />
      </div>
    </div>
  );
}

export default ThisTrip;
