/** @format */

import React from "react";
import { useStyles } from "./style";

function ShowAddons({ selectedOptions, getValues }) {
  const classes = useStyles();
  return (
    <>
      <div>
        <h3 className={classes.heading}>Add-on</h3>
        {selectedOptions === []
          ? ""
          : selectedOptions.map((ele) => {
              return <p className={getValues}>{ele.tag}</p>;
            })}
      </div>
      {selectedOptions === []
        ? ""
        : selectedOptions.map((ele) => {
            return (
              <div>
                <h3 className={classes.heading}>{ele.header}</h3>
                <span className={getValues}>{ele.getValue}</span>
              </div>
            );
          })}
    </>
  );
}

export { ShowAddons };
