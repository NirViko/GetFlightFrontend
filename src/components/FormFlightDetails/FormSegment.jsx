import { Button, FormGroup, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { post } from "../../utils/api";

export const FormFlightDetails = () => {
  const [formFlight, setformFlight] = useState({});

  const setData = (key, value) => {
    setformFlight({ ...formFlight, [key]: value });
  };

  return (
    <>
      <TextField
        label={"Company"}
        value={formFlight?.company}
        onChange={(e) => setData("company", e.target.value)}
      />
      <TextField
        label={"Point"}
        value={formFlight?.point}
        onChange={(e) => setData("point", e.target.value)}
      />
      <TextField
        label={"Duration"}
        value={formFlight?.duration}
        onChange={(e) => setData("duration", e.target.value)}
      />
      <Button>Add Segment</Button>
    </>
  );
};
