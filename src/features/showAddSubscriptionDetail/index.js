/** @format */

import React from "react";
import { Button } from "@material-ui/core";
import { Bookmark } from "@material-ui/icons";
import { ShowAddons } from "./showAddons";
import { useStyles } from "./style";

function ShowAddAubscriptionDetails({
  date,
  billingCycle,
  currencyIcon,
  selectedOptions,
  nextBillingDate,
  setShow,
}) {
  const classes = useStyles();

  const getRegExp = () => {
    let regExp = /\(([^)]+)\)/;
    let matches =
      billingCycle === "Monthly" ? "" : regExp.exec(billingCycle)[1];
    return matches;
  };

  const handleAddSubscriptionEditting = () => {
    setShow(true);
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Bookmark className={classes.bookmarkIcon} />
        <h3 className={classes.title}>Subscription</h3>
      </div>
      <div className={classes.showDetailContainer}>
        <div className={classes.showDetail}>
          <h3 className={classes.heading}>Subscription Start Date</h3>
          <span className={classes.getValues}>
            {date.subscriptionStartDate}
          </span>
        </div>
        <div>
          <h3 className={classes.heading}>Current Subscription Plan</h3>
          <span className={classes.getValues}>{billingCycle}</span>
        </div>
        <div>
          <h3 className={classes.heading}>Next Billing Date</h3>
          <span className={classes.getValues}>{nextBillingDate}</span>
        </div>
        <ShowAddons
          myLifeCareStartDate={date.MyLifeCare}
          baseLine={date.BaseLine}
          selectedOptions={selectedOptions}
          getValues={classes.getValues}
        />
      </div>
      <div className={classes.showDetailContainer}>
        <div className={classes.showDetail}>
          <h3 className={classes.heading}>Base Fee</h3>
          <svg className={classes.currencyIcon}>{currencyIcon}</svg>
          <span className={classes.count}> 450</span>
          <span className={classes.checkReg}>{getRegExp()}</span>
        </div>
        <div>
          <h3 className={classes.heading}>MyLifeCare Fee</h3>
          <svg className={classes.currencyIcon}>{currencyIcon}</svg>{" "}
          <span className={classes.count}>147</span>
          <span className={classes.checkReg}>{getRegExp()}</span>
        </div>
        <div>
          <h3 className={classes.heading}>Discount</h3>
          <span className={classes.getValues}>10%</span>
        </div>
        <div>
          <h3 className={classes.heading}>Total ColigoMed Fees</h3>
          <svg className={classes.currencyIcon}>{currencyIcon}</svg>{" "}
          <span className={classes.count}> 537</span>
          <span className={classes.checkReg}>{getRegExp()}</span>
        </div>
        <div>
          <h3 className={classes.heading}>Provider Fee</h3>
          <svg className={classes.currencyIcon}>{currencyIcon}</svg>
          <span className={classes.count}> 650</span>
          <span className={classes.checkReg}>{getRegExp()}</span>
        </div>
      </div>
      <div className={classes.btnSection}>
        <Button
          className={classes.subscriptionBtn}
          onClick={handleAddSubscriptionEditting}
        >
          Edit Subscription Details
        </Button>
        <Button className={classes.subscriptionBtn}>Cancel Subscription</Button>
      </div>
    </div>
  );
}

export { ShowAddAubscriptionDetails };
