import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";
const theme = createTheme();
export const useStyles = makeStyles(() => ({
  container: { width: "20%", marginLeft: "5.5%", marginTop: "2%" },
  result: {
    borderRadius: 4,
    borderWidth: 6,
    borderColor: "black",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIconWrapper: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputBase: {
    color: "inherit",
    width: 200,
    background: "white",
    borderRadius: 4,
  },
}));
