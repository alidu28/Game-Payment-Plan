/* eslint-disable no-unused-vars */
import "./css/app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import YourInfo from "./pages/YourInfo";
import SelectPlan from "./pages/SelectPlan";
import AddOns from "./pages/AddOns";
import Summary from "./pages/Summary";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<YourInfo />} />
          <Route path="/SelectPlan" element={<SelectPlan />} />
          <Route path="/AddOns" element={<AddOns />} />
          <Route path="/Summary" element={<Summary />} />
        </Routes>

        {/* <Switch>
        <Route exact path="/">
          <YourInfo />
        </Route>
        <Route path="/SelectPlan">
          <SelectPlan />
        </Route>
        <Route path="/AddOns">
          <AddOns />
        </Route>
        <Route path="/Summary">
          <Summary />
        </Route>
      </Switch> */}
      </Router>

     
    </>
  );
}

export default App;
