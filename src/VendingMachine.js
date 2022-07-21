import React from "react"

// import Sweets from "./Sweets"
// import Drinks from "./Drinks"
// import Chips from "./Chips"

import {Link} from "react-router-dom"



const VendingMachine = () =>{

    return(
        <div>
            <h2>Vending Machine</h2>
            <Link to="/chips">Chips</Link>
            <Link to="/sweets">Sweets</Link>
            <Link to="/drinks">Drinks</Link>

        </div>
    )
}

export default VendingMachine
