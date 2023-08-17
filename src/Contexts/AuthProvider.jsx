import React, { createContext, useContext, useEffect, useState } from "react";
import socket from "../services/socketClient";
const AuthContext = createContext();
const AuthUpdateContext = createContext();

//Exporting the variables ans functions that we want to provide to all the children
export function useAuth() {
  return useContext(AuthContext);
}

export function setAuth() {
  return useContext(AuthUpdateContext);
}

export default function AuthProvider({ children }) {
  const [authorization, setAuthorization] = useState();

  //When it is called it verfy the token on the server
  const handleContextAuth = () => {
    socket.emit("hasAuthorization", localStorage.getItem("token"), hasAuth);
  };

  //This is the callback function that the server recieves, we set the authorization to the result
  const hasAuth = (auth) => {
    const isAuthed = auth;
    setAuthorization(isAuthed);
  };

  useEffect(() => {
    handleContextAuth();
  }, []);

  return (
    <AuthContext.Provider value={authorization}>
      <AuthUpdateContext.Provider value={handleContextAuth}>
        {children}
      </AuthUpdateContext.Provider>
    </AuthContext.Provider>
  );
}
