/** @format */

import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  container: {
    boxShadow: "0px 8px 24px #d9d9e6",
    padding: 20,
    height: "100vh",
    margin: "20px 300px",
    width: "60%",
  },

  header: {
    display: "flex",
  },

  title: {
    marginTop: 5,
    marginLeft: 20,
    fontFamily: "sans-serif",
    fontSize: 14,
  },

  bookmarkIcon: {
    color: "#4f73d5",
    width: 20,
  },

  headerDesc: {
    color: "#857474fa",
  },

  dateandDropDownContainer: {
    marginTop: 30,
    display: "flex",
  },

  mainHeader: {
    marginTop: 20,
    fontFamily: "sans-serif",
    fontSize: 14,
  },

  feesPerCycleSection: {
    display: "flex",
  },

  showCurrencyDropdown: {
    marginTop: 22,
    marginLeft: 53,
    fontSize: 13,
  },

  formControl: {
    width: 400,
    "& .MuiFormLabel-root": {
      color: "#48738de0",
      fontFamily: "sans-serif",
      fontWeight: 700,
    },
  },

  currencySection: {
    width: 118,
    position: "absolute",
    marginLeft: 7,
    marginTop: -9,
  },

  showInText: {
    width: "60%",
    color: "#48738de0",
    fontFamily: "sans-serif",
    fontWeight: 700,
  },

  textFieldContainer: {
    display: "grid",
    gridTemplateColumns: "430px 430px",
  },
  providerFeesSection: {
    display: "grid",
    gridTemplateColumns: "430px",
  },

  addSubscriptionBtn: {
    backgroundColor: "#2d619c",
    textTransform: "none",
    marginTop: 30,
    fontSize: 13,
    fontWeight: 300,
    fontFamily: "sans-serif",
    color: "#ffffff",
    padding: "10px 30px",
    "&:hover": {
      backgroundColor: "#2d619c",
    },
  },
});
