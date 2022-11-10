/** @format */

import React from "react";
import { TextField } from "@material-ui/core";
import { TAGNAME } from "./constant";
import { Autocomplete } from "@material-ui/lab";
import { useStyles } from "./style";

function Tags({ selectedOptions, setSelectedOptions }) {
  const classes = useStyles();

  const handleChange = (event, option) => {
    setSelectedOptions(option);
  };

  return (
    <Autocomplete
      className={classes.tagContainer}
      multiple
      options={TAGNAME}
      filterSelectedOptions
      defaultValue={selectedOptions ?? ""}
      fullWidth
      getOptionLabel={(option) => option.tag}
      onChange={handleChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Add-ons"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            classes: {
              input: classes.componentStyle,
            },
          }}
        />
      )}
    />
  );
}

export { Tags };
