import React from "react"
import {BrowserRouter, Routes,Route, Link} from "react-router-dom"
import VendingMachine from "./VendingMachine";
import Sweets from "./Sweets"
import Drinks from "./Drinks"
import Chips from "./Chips"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route exact path ="/" element={<VendingMachine />}>
        </Route>
        <Route exact path="/chips" element={<Chips />}>
        </Route>
        <Route exact path ="/drinks" element ={<Drinks/>}>
        </Route>
        <Route exact path="/sweets" element={<Sweets/>}>
        </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
