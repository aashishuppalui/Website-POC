import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import home from "./Components/Home";
import About from "./Components/About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={home} />
        <Route path="/about" component={About} />
        {/* <h2>Hello Monks</h2> */}
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
