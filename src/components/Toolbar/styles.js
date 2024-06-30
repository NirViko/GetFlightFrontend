import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";
const theme = createTheme();
export const useStyles = makeStyles(() => ({
  toolbar: {
    backgroundColor: "#0C0E2C",
  },
  typography: {
    flexGrow: 1,
    display: { xs: "none", sm: "block" },
  },
  btn: {
    color: "#4dffc3 !important",
    fontSize: 4,
  },
  icon: {
    paddingRight: 10,
    width: "15px !important",
  },
  btnFont: {
    fontSize: 11,
    fontWeight: "bold",
  },
}));
