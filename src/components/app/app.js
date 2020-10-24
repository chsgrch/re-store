import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { CartPage, HomePage } from "../pages";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/card" exact component={CartPage} />
    </Switch>
  );
};

export default App;
