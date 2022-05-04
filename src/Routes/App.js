import React from "react"
import { Layout } from "../Pages/Layout"
import { AppContext } from "../Context/AppContext"
import { useContext } from "../Hooks/useContext"

function App() {
  const contextValue = useContext()
  return (
    <AppContext.Provider value={contextValue}>
      <Layout />
    </AppContext.Provider>
  );
}

export default App;
