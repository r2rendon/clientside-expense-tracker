import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from "js-cookie";

export const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const currentUser = Cookies.get("user");
  console.log(currentUser);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        currentUser != null ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/"} />
        )
      }
    />
  );
};
