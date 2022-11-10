/** @format */

import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { format } from "date-fns";
import { useStyles } from "./style";

function DatePickerComp({
  selectedDate,
  setSelectedDate,
  label,
  name,
  getValue,
}) {
  const classes = useStyles();
  const handleChange = (name, date) => {
    setSelectedDate({
      ...selectedDate,
      [name]: format(date, "d MMM yyyy"),
    });
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        className={classes.datePickerSection}
        autoOk
        variant="inline"
        name={name}
        inputVariant="outlined"
        label={label}
        placeholder="dd mm yyyy"
        format="d MMM yyyy"
        value={getValue}
        InputAdornmentProps={{ position: "start" }}
        onChange={(date) => handleChange(name, date)}
        // onChange={(date) => setSelectedDate(format(date, "d MMM yyyy"))}
        InputProps={{ classes: { input: classes.componentStyle } }}
      />
    </MuiPickersUtilsProvider>
  );
}

export { DatePickerComp };
