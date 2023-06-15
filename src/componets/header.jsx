import React from "react";
// import Button from "./navcomponent";
import "../css/header.css"

function Header(){
    return(
        
            <header>
                <div className="logo"> 
                <p>THE DAY DREAMER`S COMPANY</p>
                </div > 
                <div className="nav">
                    <ul className="lists">
                        <span><a href="/">Short Films </a> </span>
                        <span><a href="/">Watch Now</a> </span>
                        <span><a href="/">Up Coming </a> </span>
                    </ul>
                </div>
                <div className="text">
                <span className="lca">Lights, Camera, Action!</span>
                <p className="para">Welcome to the ultimate collection of mind-blowing <br></br>short films 
                    that will make you go wooo😯
                </p>
                <ul className="testimonials">
                    <li>
                        <h3>25</h3>
                        <p>Curated Films</p>
                    </li>
                    <li>
                    <h3>10</h3>
                        <p>Award Winners</p>
                    </li>
                    <li>
                    <h3>15</h3>
                        <p>Obscure Gems</p>
                    </li>
                </ul>
                </div>
            </header>
      
        
    )
}
export default Header;