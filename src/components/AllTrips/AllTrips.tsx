import type { Trip } from "../../types/allTypes";
import NewTripInput from "./NewTripInput";
import TripEntry from "./TripEntry";

interface AllTripsProps {
  tripList: Trip[];
  setTripList: (newTripList: Trip[]) => void;
  setCurrentPage: (newPage: string) => void;
}

export default function AllTrips({
  tripList,
  setTripList,
  setCurrentPage,
}: AllTripsProps) {
  return (
    <div className="all-trips-container">
      <NewTripInput tripList={tripList} setTripList={setTripList} />
      {tripList?.length ? (
        <div>
          {tripList.map((trip) => (
            <TripEntry
              key={trip.uid}
              tripId={trip.uid}
              tripName={trip.name}
              tripTotal={trip.total}
              setCurrentPage={setCurrentPage}
              setTripList={setTripList}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
