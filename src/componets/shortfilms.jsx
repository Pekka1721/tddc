// import Poster from "../assets/Poster.webp"
import { List } from "../assets/shortFilmsList";
import React from "react";
import "../css/shortfilms.css"

 export const ShortFilms=()=>{
    return(
        <div className="ShortFlilmsDiv">
            <h2>Watch Our Original Content Online</h2>
            <h3 className="ourShortfilms">Our Short Films</h3>
            <div className="Filmsgrid">
                {List.map( (e)=>{
                    return(
                        <CardComponet data={e}/>
                    )
                }).reverse()}
            </div>
        </div>
    )
}






//UI component of the short films
const CardComponet = (props)=>{
    const {film_title,image,link}= props.data;
    return(
        <div className="Card">
             
            <h3>{film_title}</h3>
            
            <img src={image} alt="movie card"/>
           
            
            <div>
                <button> <a href={link} target="blank">Watch</a></button>
            </div>

        </div>
    )
}
