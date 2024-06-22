import React, { useEffect, useState } from "react";
import { get } from "../../utils/api";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FlightDetails from "../FlightDetails";

export const CardFlight = () => {
  const [flights, setFlights] = useState();
  const [openModal, setOpenModal] = useState(false);

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
          <Card key={flight?.id} sx={{ width: "40%", margin: 10 }}>
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
                {`From: ${flight?.segment[0].origin} - To: ${
                  flight?.segment[flight?.segment.length - 1].destination
                }`}
              </Typography>
              <Typography variant="body2"></Typography>
            </CardContent>
            <CardActions>
              <Button onChange={() => setOpenModal(true)} size="small">
                Learn More
              </Button>
              <FlightDetails
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            </CardActions>
          </Card>
        );
      })}
    </>
  );
};
