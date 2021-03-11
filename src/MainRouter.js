import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./core/Home";
import NotFoundPage from "./core/NotFoundPage";

const MainRouter = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route component={NotFoundPage} />
    </Switch>
  </div>
);

export default MainRouter;
