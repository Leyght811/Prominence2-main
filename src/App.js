import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Navbar from "./components/Blocks/Navbar";
import Footer from "./components/Blocks/Footer";

import Home from "./components/Pages/Home";
import About from "./components/Pages/About";

import "./App.css";
import "./assets/styles/Style.css";
import "./assets/styles/Coloring.css";
import "./assets/styles/Elements.css";
import "./assets/styles/Containers.css";
import "./assets/styles/Transitions.css";

export default function App() {
    return(
        <div id="App-Main">
            
            <Router>
                <div style={{position:"relative"}}>
                    <Navbar />
                    <Switch>
                        
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/about">
                            <About/>
                        </Route>
                    </Switch>
                    <Footer/>
                </div>
                
            </Router>
        </div>
    )
}