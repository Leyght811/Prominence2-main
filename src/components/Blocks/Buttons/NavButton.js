import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../assets/styles/Style.css";
import "../../../assets/styles/Navbar.css";

const NavButton = (props) => {
    const pathName = window.location.pathname;
    if(pathName == props.url){
        return(
            <div className="selectedLink  navLink Header">{props.text}</div>
        )
    } else {
        return (
            <Link className="navLink" to={props.url}>{props.text}</Link>
        
        )
    }
}

export default NavButton