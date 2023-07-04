import React from "react";
import "../css/home.css"
export const Home = ()=>{
    return(
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
    )
}
export default Home