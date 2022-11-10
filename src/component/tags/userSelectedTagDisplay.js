/** @format */

import React from "react";
import { DatePickerComp } from "../datepicker";
import { ContextComp } from "./constant";

function UserSelectedTagDisplay(selectedOptions) {
  const val = ContextComp();

  return selectedOptions.selectedOptions === []
    ? ""
    : selectedOptions.selectedOptions.map((ele) => {
        return (
          <DatePickerComp
            key={ele.id}
            selectedDate={selectedOptions.date}
            setSelectedDate={selectedOptions.setDate}
            label={ele.header}
            name={ele.tag}
            getValue={ele.getValue}
          />
        );
      });
}

export { UserSelectedTagDisplay };
