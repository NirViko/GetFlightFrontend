import React from "react";

export const FlightDetails = (props) => {
  const { flightDetails } = props;

  return (
    <div style={{ padding: 5 }}>
      <div>{`Departure Time: ${flightDetails?.departureTime}`}</div>
      <div>{`Arrival Time: ${flightDetails?.arrivalTime}`}</div>
      <div>{`Origin: ${flightDetails?.origin} Destination: ${flightDetails?.destination}`}</div>
    </div>
  );
};
