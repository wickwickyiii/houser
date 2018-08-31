import React, { Component } from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";
import router from "./route";
import Header from "./components/Header/Header";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          {router}
        </div>
      </HashRouter>
    );
  }
}

export default App;
