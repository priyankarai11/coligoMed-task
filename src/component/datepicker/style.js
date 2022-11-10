/** @format */

import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  datePickerSection: {
    width: 400,
    marginRight: 30,
    "&.MuiSvgIcon-root": {
      color: "blue",
    },
    "& .MuiFormLabel-root": {
      color: "#48738de0",
      fontFamily: "sans-serif",
      fontWeight: 700,
    },
  },
  componentStyle: {
    fontSize: 13,
    fontWeight: 700,
    fontFamily: "sans-serif",
    paddingTop: 16,
    paddingBottom: 16,
  },
});
