import React, { useEffect, useState } from "react";
import { get } from "../../utils/api";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FlightModal } from "../FlightModal/FlightModal";
import FormFlightDetails from "../FormFlightDetails";
import { useStyles } from "./styles";
export const CardFlight = () => {
  const classes = useStyles();

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
          <Card key={flight?.id} className={classes.card}>
            <CardContent>
              <Typography className={classes.cardContent} gutterBottom>
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
