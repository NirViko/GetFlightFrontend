import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import FlightDetails from "../FlightDetails";
import { useStyles } from "./styles";

export const FlightModal = (props) => {
  const classes = useStyles();
  const { openModal, setOpenModal, flightPath } = props;
  return (
    <Modal
      className={classes.modal}
      open={openModal}
      onClose={() => setOpenModal(null)}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box className={classes.box}>
        <h3 className={classes.title} id="parent-modal-title">
          Flight details:
        </h3>
        <div className={classes.flightData}>
          {flightPath.length > 0 &&
            flightPath?.map((flight, index) => (
              <FlightDetails flightDetails={flight} index={index} />
            ))}
        </div>
      </Box>
    </Modal>
  );
};
