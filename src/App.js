import React from "react";
import {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom'
import Header from "./componets/header";
import Home from "./componets/Home";
import "./css/App.css"
import "./css/navBar.css"
import { ShortFilms } from "./componets/shortfilms";
import { Contact } from "./componets/contact";
function App(){
    return(
        <div className="app">
            <Header/>
            <Router>
            <div className="nav">
                <ul className="unorderedlists">
                    <Link className="navText" to="/">Homepage</Link>
                    <Link className="navText" to="/shortfilms">Short Films</Link>
                    <Link className="navText" to="/contact">Contact Us</Link>
                    <Link className="navText" to="/upcoming">Up Coming</Link>
                </ul>
                
            </div>
           
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/shortfilms" element={<ShortFilms/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/upcoming" element={<h1>Up Coming</h1>}/>
            </Routes>
            </Router>
        </div>
    )
}
export default App;