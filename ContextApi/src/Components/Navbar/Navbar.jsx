import React from "react";
import './Navbar.css'
function Navbar(){
    return (
        <>
        <div className="nav">
        <div className="logo"> 
           <img src="/imagelogo..jpeg" alt="logo" />
        </div>
        <ul className="list">
           <li>Home</li>
           <li>Categorise</li>
           <li>About Us</li>
        </ul>
        </div>
        </>
    )
}
export default Navbar