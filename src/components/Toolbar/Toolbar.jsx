import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useStyles } from "./styles";
import logo from "../../images/logo.png";
import logo_title from "../../images/logo_title.png";
import { Button } from "@mui/material";
import FlightRoundedIcon from "@mui/icons-material/FlightRounded";
import FlightTakeoffRoundedIcon from "@mui/icons-material/FlightTakeoffRounded";
export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <img src={logo} width={70} />
          <img src={logo_title} width={100} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            className={classes.typography}
          ></Typography>
          <Button className={classes.btn}>
            <FlightRoundedIcon className={classes.icon} />
            <div className={classes.btnFont}>Login</div>
          </Button>
          <Button className={classes.btn}>
            <FlightTakeoffRoundedIcon className={classes.icon} />
            <div className={classes.btnFont}>Register</div>
          </Button>
          {/* <Search /> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
