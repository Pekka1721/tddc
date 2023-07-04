
import { List } from "../assets/shortFilmsList";
import React from "react";
import "../css/shortfilms.css"

 export const ShortFilms=()=>{
    return(
        <div className="ShortFlilmsDiv">
            <h2>Watch Our Original Content Online</h2>
            <h3>Our Short Films</h3>
            <div className="Filmsgrid">
                {List.map( (e)=>{
                    return(
                        <CardComponet title={e.film_title}  share={e.link} Watch={e.link}/>

                    )
                }).reverse()}
            </div>
        </div>
    )
}






//UI component of the short films
const CardComponet = (props)=>{
    return(
        <div className="Card">
             
            <h3>{props.title}</h3>
            <div>
                <span>{props.share}</span>
                <span>{props.Watch}</span>
            </div>

        </div>
    )
}
