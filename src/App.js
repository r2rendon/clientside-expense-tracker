import React, { useEffect, useContext } from "react";
import { GlobalProvider, GlobalContext } from "./Context/GlobalState";
import Dashboard from "./Components/Dashboard";

import { Login } from "./Components/Login/Login";
import { PrivateRoute } from "./PrivateRoute";

//Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
};
