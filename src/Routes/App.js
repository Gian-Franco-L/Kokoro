import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "../Pages/Layout"
import { SpecificArticle } from "../Pages/SpecificArticle"
import { NotFound } from "../Pages/NotFound"
import { AppContext } from "../Context/AppContext"
import { useContext } from "../Hooks/useContext"

function App() {
  const contextValue = useContext()
  return (
    <AppContext.Provider value={contextValue}>
       <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/">
                <Layout />
              </Route>
              <Route exact path="/sobremi">
                <SpecificArticle />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Routes>
          </Layout>
        </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
