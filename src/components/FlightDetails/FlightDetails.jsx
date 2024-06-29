import React from "react";
import { flightDetailsStyle } from "./styles";
export const FlightDetails = (props) => {
  const { flightDetails } = props;

  return (
    <div style={flightDetailsStyle.container}>
      <div>{`Departure Time: ${flightDetails?.departureTime}`}</div>
      <div>{`Arrival Time: ${flightDetails?.arrivalTime}`}</div>
      <div>{`Origin: ${flightDetails?.origin} Destination: ${flightDetails?.destination}`}</div>
    </div>
  );
};
