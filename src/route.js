import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import StepOne from "./components/Wizard/StepOne";
import StepTwo from "./components/Wizard/StepTwo";
import StepThree from "./components/Wizard/StepThree";

export default (
  <Switch>
    <div>
      <Route exact path="/" component={Dashboard} />
      <Route path="/stepone" component={StepOne} />
      <Route path="/steptwo" component={StepTwo} />
      <Route path="/stepthree" component={StepThree} />
    </div>
  </Switch>
);
