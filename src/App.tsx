import React, { use, useEffect, useState } from "react";
import ThisTrip from "./components/ThisTrip/ThisTrip";
import AllTrips from "./components/AllTrips/AllTrips";
import "./App.css";
import type { Trip } from "./types/allTypes";

const local_trips: Trip[] = localStorage.getItem("all-trips")
  ? (JSON.parse(localStorage.getItem("trips") as string) as Trip[])
  : [];

const current_page = localStorage.getItem("current-page")
  ? (JSON.parse(localStorage.getItem("current-page") as string) as string)
  : "all-trips";

function App() {
  const [tripList, setTripList] = useState(local_trips);
  const [currentPage, setCurrentPage] = useState(current_page);
  useEffect(() => {
    localStorage.setItem("all-trips", JSON.stringify(tripList));
  }, [tripList]);
  return (
    <>
      {currentPage == "all-trips" && (
        <AllTrips tripList={tripList} setTripList={setTripList} />
      )}
    </>
  );
}

export default App;
