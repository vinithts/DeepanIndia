import React from "react";
import { Navigate, Route } from "react-router-dom";
import { cookies } from "../Components/Adminscreen/Admin";

const isAuthnticated = () => {
  const token = JSON.parse(cookies.get("user")).token;
  return Boolean(token);
};

const PrivateRoute = ({ element, ...rest }) => {
  return isAuthnticated() ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
