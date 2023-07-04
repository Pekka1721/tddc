import React from "react";
import "../css/contact.css"
export const Contact = ()=>{
    return(
        <div className="contact">
        <div className="banner">
        <h2>Join Us</h2>
        <span>The Day Dreamers Company</span>
        </div>
        
        <div className="form">
        <form>
        <input className="feilds" placeholder="Name" type="text"/>
        <input className="feilds" placeholder="Any contact info" type="text"/>
        <input className="feilds"  placeholder="Sample work" type="file"/>
        <input className="feilds"  placeholder="Location" type="text"/>
        <textarea className="feilds" placeholder="Feedback for Us"/>
        <button  >Submit</button>
        </form>

        </div>
        </div>
    )
}


