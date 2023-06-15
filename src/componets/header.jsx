import React from "react";
import Button from "./navcomponent";
import "../css/header.css"

function Header(){
    return(
        
            <header>
                <div className="logo"> 
                <p>The Day Dreamers Company</p>
                </div >
                <div className="nav">
                    <Button name="Home"></Button>
                    <Button name="About us"></Button>
                    <Button name="Movies"></Button>
                    <Button name="Watch Now"></Button>
                </div>
                
                   
            </header>
      
        
    )
}
export default Header;