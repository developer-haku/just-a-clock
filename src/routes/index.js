import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import ClockLayout from "../components/ClockLayout/ClockLayout";

const Router = (props) => {
  return (
    <Fragment>
      <Route path="/" exact component={null} />
      <Route path="/set/:config" exact component={ClockLayout} />
      <Route path="/setting" exact component={null} />
    </Fragment>
  );
};

export default Router;
