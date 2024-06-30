import React from "react";
import backgroundSearch from "../../images/backgroundSearch.jpg";
import { Search } from "../Search/Search";
import { useStyles } from "./styles";
import { Button, InputBase } from "@mui/material";
export default function SearchContainer() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <div className={classes.formContainer}>
          <Search />
          <Search />
          <InputBase type="date" className={classes.input} />
          <InputBase type="date" className={classes.input} />
          <InputBase disabled className={classes.input} />
          <Button className={classes.btn}>Search</Button>
        </div>
      </div>
      <img src={backgroundSearch} className={classes.image} />
    </>
  );
}
