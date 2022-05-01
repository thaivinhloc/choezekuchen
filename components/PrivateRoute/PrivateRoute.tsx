import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute: React.FC<{}> = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) <Navigate to="/login" />;

  return <Outlet />;
};

export default PrivateRoute;
