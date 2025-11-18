import React, { useEffect, type ChangeEvent } from "react";
import Select from "react-select";
import type { Event, Trip, Transaction } from "../../types/allTypes";
import "./css/NewTripInput.css";

interface NewTripInputProps {
  tripList: Trip[];
  setTripList: (newTrips: any) => void;
}

const baseTrip: Trip = {
  uid: "",
  name: "",
  currency: [],
  total: 0,
  maxSplit: 2,
  transactions: [],
};

const options = [
  { value: "USD", label: "USD" },
  { value: "EUR", label: "EUR" },
  { value: "INR", label: "INR" },
];

export default function NewTripInput({
  tripList,
  setTripList,
}: NewTripInputProps) {
  const [newTrip, setNewTrip] = React.useState(baseTrip);
  const [expandInput, setExpandInput] = React.useState(false);
  const [togglePeople, setTogglePeople] = React.useState(false);

  function generateUID() {
    const ID_SIZE = 5;
    let result_id = "";

    for (let i = 0; i < ID_SIZE; i++) {
      const randomIndex = Math.floor(Math.random() * 36);
      result_id += "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"[randomIndex];
    }

    return result_id;
  }

  // function handleTogglePeople(e: ChangeEvent<HTMLInputElement>) {
  //   setTogglePeople(e.target.checked);
  // }
  function handleExpandInput() {
    setExpandInput(true);
  }
  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    setNewTrip({ ...newTrip, name: e.target.value });
  }
  // function handleCurrencyChange(e: ChangeEvent<HTMLSelectElement>) {
  //   console.log(e);
  //   setNewTrip({ ...newTrip, currency: [e.target.value] });
  // }
  // function handleMaxSplitChange(e: ChangeEvent<HTMLInputElement>) {
  //   let value = Number(e.target.value) % 10;
  //   if (value < 2) value = 2;
  //   if (value > 6) value = 6;
  //   setNewTrip({ ...newTrip, maxSplit: value });
  // }
  function addNewTrip() {
    newTrip.uid = generateUID();
    if (togglePeople == false) {
      newTrip.maxSplit = 1;
    }
    tripList?.length
      ? setTripList((prev: Trip[]) => [newTrip, ...prev])
      : setTripList([newTrip]);
    setNewTrip(baseTrip);
    setExpandInput(false);
    setTogglePeople(false);
  }
  return (
    <>
      {expandInput ? (
        <div className="new-trip-container">
          <div className="new-trip-item">
            <input
              className="new-trip-name new-trip-item"
              placeholder="Trip Title"
              value={newTrip.name}
              onChange={handleNameChange}
            />
          </div>

          <div className="new-trip-item">
            <button onClick={addNewTrip}>Add +</button>
          </div>
        </div>
      ) : (
        <div>
          <button onClick={handleExpandInput}>New Trip +</button>
        </div>
      )}
    </>
  );
}
