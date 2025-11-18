import { useEffect, useState } from "react";
import ThisTrip from "./components/ThisTrip/ThisTrip";
import AllTrips from "./components/AllTrips/AllTrips";
import "./App.css";
import type { Trip } from "./types/allTypes";

const local_trips: Trip[] = localStorage.getItem("all-trips")
  ? JSON.parse(localStorage.getItem("all-trips") as string)
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

  function updateTrip(updatedTrip: Trip) {
    const updatedTripList = tripList.map((trip) =>
      trip.uid === updatedTrip.uid ? updatedTrip : trip
    );
    setTripList(updatedTripList);
  }

  function checkTripID(tripPageValue: string) {
    const [tripPage, tripID] = tripPageValue.split("-");
    if (tripPage !== "trip" || !tripID) return null;
    return tripList.find((trip) => trip.uid === tripID);
  }

  function getTripByPage(tripPageValue: string) {
    const [_, tripID] = tripPageValue.split("-");
    return tripList.find((trip) => trip.uid === tripID);
  }

  return (
    <>
      {currentPage == "all-trips" && (
        <AllTrips
          tripList={tripList}
          setTripList={setTripList}
          setCurrentPage={setCurrentPage}
        />
      )}
      {currentPage.startsWith("trip-") && checkTripID(currentPage) && (
        <ThisTrip
          currentTrip={getTripByPage(currentPage) || tripList[0]}
          updateTrip={updateTrip}
          setCurrentPage={setCurrentPage}
        /> // Pass a default trip to avoid undefined - I hate what i did but bandaid solution
      )}
    </>
  );
}

export default App;
