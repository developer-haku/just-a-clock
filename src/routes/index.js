import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import ClockLayout from "../components/ClockLayout/ClockLayout";
import Setting from "../components/Settings/Settings";

const Router = (props) => {
  return (
    <Fragment>
      <Route path="/" exact component={null} />
      <Route path="/set/:config" exact component={ClockLayout} />
      <Route path="/setting" exact component={Setting} />
    </Fragment>
  );
};

export default Router;
