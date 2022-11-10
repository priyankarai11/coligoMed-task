/** @format */

import { DatePickerComp } from "./component/datepicker";
import { ExportIntoPDF } from "./features/exportPDF";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddSubscription } from "./features/addSubscription";
import { ShowAddAubscriptionDetails } from "./features/showAddSubscriptionDetail";
import { Subscription } from "./features/HomePage";

function App() {
  return (
    <Subscription />
    // <BrowserRouter>
    //   <Routes>
    //     <Route element={<AddSubscription />} path="/" />
    //     <Route
    //       element={<ShowAddAubscriptionDetails />}
    //       path="/showAddSubscriptionDetails"
    //     />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
