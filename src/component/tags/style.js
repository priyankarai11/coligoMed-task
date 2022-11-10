/** @format */

import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  tagContainer: {
    marginTop: 30,
    width: "92%",
    marginBottom: 30,
    "& .MuiChip-root": {
      backgroundColor: "e0f1f9",
    },
    "& .MuiChip-label": {
      fontSize: 13,
      fontWeight: 700,
      fontFamily: "sans-serif",
    },
    "& .MuiChip-deleteIcon": {
      color: "#191850",
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
