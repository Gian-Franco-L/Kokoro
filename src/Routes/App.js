import React from "react"
import { useHashLocation } from "../Hooks/useHashLocation"
import { Layout } from "../Pages/Layout"
// import { NotFound } from "../Pages/NotFound"
import { Profile } from "../Pages/Profile"
import { List } from "../Pages/List"
import { ResetPassword } from "../Pages/ResetPassword"
import { ForgotPassword } from "../Pages/ForgotPassword"
import { AppContext } from "../Context/AppContext"
import { useContext } from "../Hooks/States/useContext"
import { Route, Router } from "wouter";

function App() {
  const contextValue = useContext()

  useHashLocation()

  return (
    <AppContext.Provider value={contextValue}>
      <Router hook={useHashLocation}>
        <Route 
          component={Layout}
          path="/"
        />
        {/* <Route 
          component={NotFound}
          path="/nf"
        /> */}
        <Route
          component={Profile}
          path="/profile"
        />
        <Route 
          component={List}
          path="/list"
        />
        <Route  
          component={ForgotPassword}
          path="/forgotpassword"
        />
        <Route path="/resetpassword/:id/:token">
          {params => <ResetPassword id={params.id} token={params.token} />}
        </Route>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
