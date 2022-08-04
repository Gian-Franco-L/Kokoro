import React from "react"
import { Layout } from "../Pages/Layout"
import { NotFound } from "../Pages/NotFound"
import { Login } from "../Pages/Login"
import { AppContext } from "../Context/AppContext"
import { useContext } from "../Hooks/useContext"
import { Route } from "wouter"

function App() {
  const contextValue = useContext()
  return (
    <AppContext.Provider value={contextValue}>
      <Route 
        component={Layout}
        path="/"
      />
      <Route 
        component={NotFound}
        path="/nf"
      />
      <Route 
        component={Login}
        path="/log"
      />
    </AppContext.Provider>
  );
}

export default App;
