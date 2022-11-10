/** @format */

import React from "react";
import { FormControl, Select, MenuItem, InputLabel } from "@material-ui/core";
import { AttachMoney, Euro } from "@material-ui/icons";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import moment from "moment";
import { useStyles } from "./style";

function DropDown({
  billingCycle,
  setBillingCycle,
  currency,
  setCurrency,
  setCurrencyIcon,
  show,
  menu,
  formControl,
  size,
  date,
  setNextBillingDate,
}) {
  const classes = useStyles();

  const handleBillingCycle = (e) => {
    setBillingCycle(e.target.value);
    switch (e.target.value) {
      case "Monthly":
        setNextBillingDate(moment(date).add(1, "M").format("D MMM yyyy"));
        break;
      case "Quarterly(every 3 months)":
        setNextBillingDate(moment(date).add(3, "M").format("D MMM yyyy"));
        break;
      case "Annual(every 12 months)":
        setNextBillingDate(moment(date).add(1, "Y").format("D MMM yyyy"));
        break;
      default:
        break;
    }
  };

  const handleCurrency = (e) => {
    setCurrency(e.target.value);
    switch (e.target.value) {
      case "Rupees":
        setCurrencyIcon(<CurrencyRupeeIcon className={classes.currencyIcon} />);
        break;
      case "Euro":
        setCurrencyIcon(<Euro className={classes.currencyIcon} />);
        break;
      case "Dollar":
        setCurrencyIcon(<AttachMoney className={classes.currencyIcon} />);
        break;
      default:
        break;
    }
  };

  return (
    <FormControl className={formControl} variant="outlined" size={size}>
      {show && <InputLabel id="demo-select-small">Billing Cycle</InputLabel>}
      {show ? (
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={billingCycle}
          label="Billing Cycle"
          onChange={handleBillingCycle}
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left",
            },
            getContentAnchorEl: null,
          }}
          classes={{ root: classes.componentStyle }}
        >
          {menu.map((ele) => {
            return (
              <MenuItem key={ele.id} value={ele.name}>
                {ele.name}
              </MenuItem>
            );
          })}
        </Select>
      ) : (
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={currency}
          onChange={handleCurrency}
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left",
            },
            getContentAnchorEl: null,
          }}
          classes={{ root: classes.componentCurrencyStyle }}
        >
          {menu.map((ele) => {
            return (
              <MenuItem key={ele.id} value={ele.name}>
                {ele.name}
              </MenuItem>
            );
          })}
        </Select>
      )}
    </FormControl>
  );
}

export { DropDown };
