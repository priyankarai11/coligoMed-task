/** @format */

import React from "react";
import { InputAdornment, TextField } from "@material-ui/core";
import { useStyles } from "./style";

function TextFieldComp({ value, label, currencyIcon }) {
  const classes = useStyles();
  return (
    <TextField
      className={classes.textFieldSection}
      type="text"
      value={value}
      label={label}
      variant="outlined"
      inputProps={{
        readOnly: true,
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <svg className={classes.currencyIcon}>{currencyIcon}</svg>
          </InputAdornment>
        ),
        classes: { input: classes.componentStyle },
      }}
    />
  );
}

export { TextFieldComp };
