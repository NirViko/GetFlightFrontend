import React from "react";
import backgroundSearch from "../../images/backgroundSearch.jpg";
import { Search } from "../Search/Search";
import { useStyles } from "./styles";
import { Button, InputBase } from "@mui/material";
export default function CompositionInput() {
  const classes = useStyles();
  const setComposition = () => {};
  return <InputBase disabled className={classes.input} />;
}
