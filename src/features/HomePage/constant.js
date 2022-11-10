/** @format */

import { format } from "date-fns";

export const KEYDATEPICKER = [
  {
    id: 1,
    name: "first",
    
  },
  {
    id: 2,
    name: "second",
    datePicker: format(new Date(), "d MMM yyyy"),
  },
  {
    id: 3,
    name: "third",
    datePicker: format(new Date(), "d MMM yyyy"),
  },
];
