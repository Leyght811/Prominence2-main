import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavButton from "./Buttons/NavButton";
import "../../assets/styles/Style.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark justify-content-center Text-Block">
        <div className="Header Header2 Maroon">Prominence Curtains and Blinds</div>
      </nav>
      <nav className="navbar navbar-expand-md Text-Block navbar-dark justify-content-center noPadding">
        <div style={{textAlign:"center"}}>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item">
                <NavButton url="/" text="Home" />
              </li>
              <li class="nav-item">
                <NavButton url="/about" text="About Us" />
              </li>
              <li class="nav-item">
                <NavButton url="/products" text="Products" />
              </li>
              <li class="nav-item">
                <NavButton url="/contact" text="Contact" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
