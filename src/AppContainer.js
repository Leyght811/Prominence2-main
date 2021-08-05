import React, { Component } from "react";
import App from "./App";
import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];



class AppContainer extends Component {
  render() {
    return (
        <App />
    );
  }
}

export default AppContainer;
