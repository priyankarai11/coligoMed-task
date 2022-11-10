/** @format */

import React, { useState } from "react";
import moment from "moment";
import { format } from "date-fns";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { AddSubscription } from "../addSubscription";
import { ShowAddAubscriptionDetails } from "../showAddSubscriptionDetail";
import { TAGNAME } from "../../component/tags/constant";
import { DataProvider } from "./context";

function Subscription() {
  const [billingCycle, setBillingCycle] = useState("Monthly");
  const [currency, setCurrency] = useState("Rupees");
  const [date, setDate] = useState({
    subscriptionStartDate: format(new Date(), "d MMM yyyy"),
    MyLifeCare: format(new Date(), "d MMM yyyy"),
    BaseLine: format(new Date(), "d MMM yyyy"),
  });

  const [selectedOptions, setSelectedOptions] = useState([TAGNAME[1]]);
  const [nextBillingDate, setNextBillingDate] = useState(
    moment(date.subscriptionStartDate).add(1, "M").format("D MMM yyyy")
  );
  const [currencyIcon, setCurrencyIcon] = useState(<CurrencyRupeeIcon />);
  const [show, setShow] = useState(true);

  return show ? (
    <DataProvider value={date}>
      <AddSubscription
        billingCycle={billingCycle}
        date={date}
        setDate={setDate}
        setBillingCycle={setBillingCycle}
        currency={currency}
        currencyIcon={currencyIcon}
        setCurrencyIcon={setCurrencyIcon}
        setCurrency={setCurrency}
        nextBillingDate={nextBillingDate}
        setNextBillingDate={setNextBillingDate}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
        setShow={setShow}
      />
    </DataProvider>
  ) : (
    <ShowAddAubscriptionDetails
      date={date}
      billingCycle={billingCycle}
      currency={currency}
      currencyIcon={currencyIcon}
      selectedOptions={selectedOptions}
      setShow={setShow}
      nextBillingDate={nextBillingDate}
    />
  );
}

export { Subscription };
