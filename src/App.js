import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

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
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

function Home() {
    return(
        <div>
            Home
        </div>
    )
}

function About() {
    return(
        <div>
            About
        </div>
    )
}