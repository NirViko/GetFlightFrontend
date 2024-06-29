import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import FlightDetails from "../FlightDetails";

export const FlightModal = (props) => {
  const { openModal, setOpenModal, flightPath } = props;
  return (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(null)}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box
        style={{ height: "200px", overflow: "scroll" }}
        sx={{
          width: "60%",
          height: "10%",
          background: "white",
          alignItems: "center",
          borderRadius: 1,
        }}
      >
        <h3 id="parent-modal-title">Flight details:</h3>
        <div
          style={{
            overflow: "scroll",
            height: 100,
            background: "gray",
            borderRadius: 1,
          }}
        >
          {flightPath.length > 0 &&
            flightPath?.map((flight, index) => (
              <FlightDetails flightDetails={flight} index={index} />
            ))}
        </div>
      </Box>
    </Modal>
  );
};
