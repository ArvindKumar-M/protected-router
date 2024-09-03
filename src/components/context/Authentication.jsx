import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setUSer] = useState();
  const Login = (user) => {
    setUSer(user);
  };
  const Logout = () => {
    setUSer(null);
  };

  const contextValue = { user, Login, Logout };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
