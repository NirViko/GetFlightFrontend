import React, { useEffect, useState } from "react";
import { get } from "../../utils/api";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FlightModal } from "../FlightModal/FlightModal";
import FormFlightDetails from "../FormFlightDetails";

export const CardFlight = () => {
  const [flights, setFlights] = useState();
  const [openModal, setOpenModal] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await get("flights");
    setFlights(data);
  };

  return (
    <>
      {flights?.map((flight) => {
        return (
          <Card
            key={flight?.id}
            sx={{
              width: "40%",
              margin: 10,
            }}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 20, fontWeight: "bold" }}
                gutterBottom
              >
                {flight?.company}
              </Typography>
              <Typography component="div">
                {`${flight?.point} - ${flight?.duration}`}
              </Typography>
              <Typography component="div">
                {flight?.segment && flight.segment.length > 0
                  ? `From: ${flight.segment[0]?.origin} - To: ${
                      flight.segment[flight.segment.length - 1]?.destination
                    }`
                  : "Segment data not available"}
              </Typography>
              <Typography variant="body2"></Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => setOpenModal(flight?.id)} size="small">
                Learn More
              </Button>
              <FlightModal
                flightPath={flight?.segment}
                openModal={openModal === flight?.id}
                setOpenModal={setOpenModal}
              />
            </CardActions>
          </Card>
        );
      })}
      <FormFlightDetails />
    </>
  );
};
