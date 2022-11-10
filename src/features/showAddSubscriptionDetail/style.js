/** @format */
import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  container: {
    boxShadow: "0px 8px 24px #d9d9e6",
    padding: 20,
    height: "80vh",
    margin: "100px 300px",
    width: "53%",
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

  heading: {
    color: "#48738de0",
    fontFamily: "sans-serif",
    fontSize: 13,
  },

  showDetailContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    marginBottom: 20,
    gridGap: 20,
    padding: "0px 30px",
  },

  // showDetail: {
  //   marginBottom: 10,
  // },

  btnSection: {
    padding: "0px 30px",
  },

  subscriptionBtn: {
    backgroundColor: "#2d619c",
    textTransform: "none",
    marginTop: 30,
    fontSize: 13,
    fontWeight: 300,
    fontFamily: "sans-serif",
    color: "#ffffff",
    marginRight: 30,
    padding: "10px 30px",
    "&:hover": {
      backgroundColor: "#2d619c",
    },
  },

  currencyIcon: {
    width: 16,
    height: 16,
  },

  count: {
    position: "absolute",
    marginTop: -1,
    marginLeft: 5,
    fontFamily: "sans-serif",
    fontSize: 14,
    fontWeight: 700,
  },

  checkReg: {
    fontSize: 12,
    color: "#837777",
    marginLeft: 35,
    marginTop: 1,
    position: "absolute",
    fontFamily: "sans-serif",
  },

  getValues: {
    fontFamily: "sans-serif",
    fontSize: 14,
    fontWeight: 700,
  },
});
