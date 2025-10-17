import React, { useState } from "react";
import type { Trip } from "../../types/allTypes";
import NewTripInput from "./NewTripInput";

interface AllTripsProps {
  tripList: Trip[];
  setTripList: (newTripList: Trip[]) => void;
}

export default function AllTrips({ tripList, setTripList }: AllTripsProps) {
  console.log();
  return (
    <div className="all-trips-container">
      {tripList?.length ? (
        <div>
          {tripList.map((trip) => (
            <li>
              {trip.name} - $ {trip.currency}
            </li>
          ))}
        </div>
      ) : null}
      <NewTripInput tripList={tripList} setTripList={setTripList} />
    </div>
  );
}
