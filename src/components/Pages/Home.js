import React, { useState } from "react";
import "../../assets/styles/Style.css";
import "../../assets/styles/Home.css"
import image from "../../assets/img/705910e2f940448eb289d47200f4cab2.png"

const Home = () => {
    return(
        <div id="homeMain">
            <div id="homeText" className="textBlock opaque">
                <h1 className="Header Header3 Maroon">
                    Welcome to Prominence <br/> Curtains and Blinds
                </h1>
                <span>Great Look, Great Prices</span>
            </div>
            <img id="homeImage" src={image} alt="" />
        </div>
    )
}

export default Home