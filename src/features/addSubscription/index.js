/** @format */

import React from "react";
import { Button } from "@material-ui/core";
import { Bookmark } from "@material-ui/icons";
import { DatePickerComp } from "../../component/datepicker";
import { DropDown } from "../../component/dropdown";
import { Tags } from "../../component/tags";
import { TextFieldComp } from "../../component/textField";
import { MENUDATA, CURRENCY } from "../../component/dropdown/constant";
import { UserSelectedTagDisplay } from "../../component/tags/userSelectedTagDisplay";
import { useStyles } from "./style";

function AddSubscription({
  date,
  billingCycle,
  currency,
  currencyIcon,
  setDate,
  setCurrencyIcon,
  selectedOptions,
  setBillingCycle,
  setCurrency,
  setSelectedOptions,
  setNextBillingDate,
  setShow,
}) {
  const classes = useStyles();
  const handleAddSubscriptionEditting = () => {
    setShow(false);
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Bookmark className={classes.bookmarkIcon} />
        <h3 className={classes.title}>Add Subscription</h3>
      </div>
      <span className={classes.headerDesc}>
        Enter the following details to add subscription details
      </span>
      <div className={classes.dateandDropDownContainer}>
        <DatePickerComp
          selectedDate={date}
          setSelectedDate={setDate}
          label="Subscription Start Date"
          name="subscriptionStartDate"
          getValue={date.subscriptionStartDate}
        />
        <DropDown
          className={classes.dropDownSection}
          billingCycle={billingCycle}
          setBillingCycle={setBillingCycle}
          show={true}
          menu={MENUDATA}
          formControl={classes.formControl}
          setNextBillingDate={setNextBillingDate}
          date={date.subscriptionStartDate}
        />
      </div>
      <Tags
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
      />
      <UserSelectedTagDisplay
        selectedOptions={selectedOptions}
        date={date}
        setDate={setDate}
      />

      <div className={classes.feesPerCycleSection}>
        <h3 className={classes.mainHeader}>ColigoMed Fees per cycle</h3>
        <div className={classes.showCurrencyDropdown}>
          <span className={classes.showInText}>Show in</span>
          <DropDown
            show={false}
            menu={CURRENCY}
            currency={currency}
            currencyIcon={currencyIcon}
            setCurrencyIcon={setCurrencyIcon}
            setCurrency={setCurrency}
            formControl={classes.currencySection}
            size="small"
          />
        </div>
      </div>
      <div className={classes.textFieldContainer}>
        <TextFieldComp
          currencyIcon={currencyIcon}
          value="450"
          label="Base Fee(Auto generated)"
        />
        <TextFieldComp
          currencyIcon={currencyIcon}
          value="147"
          label="MyLifeCare Fee(Auto generated)"
        />
        <TextFieldComp value="10%" label="Discount(Auto generated)" />
        <TextFieldComp
          currencyIcon={currencyIcon}
          value="537.30"
          label="Total ColigoMed(Auto generated)"
        />
      </div>
      <div className={classes.providerFeesSection}>
        <h3 className={classes.mainHeader}>Provider Fees per cycle</h3>
        <TextFieldComp
          currencyIcon={currencyIcon}
          value="650"
          label="Provider Fee"
        />
      </div>
      <Button
        className={classes.addSubscriptionBtn}
        onClick={handleAddSubscriptionEditting}
      >
        Add Subscription
      </Button>
    </div>
  );
}

export { AddSubscription };
