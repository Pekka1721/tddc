import React from "react";
import "../css/navcomp.css"

function Button(props){
    return(
        <button className="btn">{props.name}</button>
    )
    
}


export default Button;