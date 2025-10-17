import React, { useEffect } from "react";
import type { Event, Trip, Transaction } from "../../types/allTypes";

interface NewTripInputProps {
  tripList: Trip[];
  setTripList: (newTrips: any) => void;
}

const baseTrip: Trip = {
  uid: Math.random().toString(36).substring(2, 9),
  name: "",
  currency: "USD",
  total: 0,
  transactions: [],
};

export default function NewTripInput({
  tripList,
  setTripList,
}: NewTripInputProps) {
  const [newTrip, setNewTrip] = React.useState(baseTrip);

  function handleNameChange(e: Event) {
    setNewTrip({ ...newTrip, name: e.target.value });
  }
  function handleCurrencyChange(e: Event) {
    setNewTrip({ ...newTrip, currency: e.target.value });
  }
  function addNewTrip() {
    tripList?.length
      ? setTripList((prev: Trip[]) => [newTrip, ...prev])
      : setTripList([newTrip]);
    setNewTrip(baseTrip);
  }
  return (
    <>
      <div>
        <input
          placeholder="Trip Name"
          value={newTrip.name}
          onChange={handleNameChange}
        />
        <select value={newTrip.currency} onChange={handleCurrencyChange}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
        <button onClick={addNewTrip}>Add Trip</button>
      </div>
    </>
  );
}
