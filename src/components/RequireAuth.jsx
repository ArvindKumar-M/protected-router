import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./context/Authentication";

const RequireAuth = ({ children }) => {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/loginform"></Navigate>;
  }
  return children;
};

export default RequireAuth;
