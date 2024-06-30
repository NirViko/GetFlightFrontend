import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";
const theme = createTheme();
export const useStyles = makeStyles(() => ({
  container: {
    width: "80%",
    height: 200,
    background: "#0C0E2C",
    position: "absolute",
    borderRadius: 5,
    right: "50%",
    left: "50%",
    transform: "translateX(-50%)",
    top: "25%",
  },
  formContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    flexWrap: "wrap",
  },
  input: {
    marginLeft: 5,
    color: "inherit",
    height: 55,
    background: "white",
    borderRadius: 4,
    paddingLeft: 12,
  },
  btn: {
    height: 55,
    margin: "5px !important",
    fontWeight: "bold !important",
    background: "#4dffc3 !important",
    color: "#0C0E2C !important",
  },
  image: { width: "100%", height: 500 },
}));
