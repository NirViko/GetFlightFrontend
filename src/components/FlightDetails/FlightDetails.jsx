import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

export const FlightDetails = (props) => {
  const { openModal, setOpenModal } = props;
  console.log(openModal);
  return (
    <Modal
      open={openModal}
      onClose={setOpenModal}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ width: 400 }}>
        <h2 id="parent-modal-title">Text in a modal</h2>
        <p id="parent-modal-description">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </p>
      </Box>
    </Modal>
  );
};
