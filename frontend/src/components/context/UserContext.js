import React, { createContext } from "react";

import useAuth from "../hooks/useAuth";

const UserContext = createContext();

function UserProvider({ children }) {
  const { authenticated, loading, register, login, logout } = useAuth();

  return (
    <UserContext.Provider
      value={{ loading, authenticated, register, login, logout }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };