import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const currentUser = localStorage.getItem("currentUser");
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        currentUser != undefined ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/"} />
        )
      }
    />
  );
};
