import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  modal: { display: "flex", justifyContent: "center", alignItems: "center" },
  cardContent: {
    fontSize: 20,
    fontWeight: "bold",
  },
  box: {
    width: "30%",
    height: 200,
    background: "white",
    alignItems: "center",
    borderRadius: 1,
    overflow: "scroll",
  },
  title: { paddingLeft: 10 },
  flightData: {
    overflow: "scroll",
    height: 100,
    background: "gray",
    borderRadius: 1,
  },
}));
