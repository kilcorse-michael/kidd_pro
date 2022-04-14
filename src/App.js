import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";


import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Services from "./components/Services";

class App extends Component {
  logToConsole() {
    console.log(
      "||   ||      |||||||    |||||||         |||||||   |||||||     |||||||||\n||  ||       ||    ||   ||    ||        ||    ||  ||    ||   ||       ||\n|| ||    ||  ||     ||  ||     ||       ||    ||  ||    ||  ||         ||\n||||         ||     ||  ||     ||       ||    ||  ||    ||  ||         ||\n||||     ||  ||     ||  ||     ||       |||||||   |||||||   ||         ||\n|| ||    ||  ||     ||  ||     ||       ||        ||    ||  ||         ||\n||  ||   ||  ||    ||   ||    ||  ||||  ||        ||    ||   ||       ||\n||   ||  ||  |||||||    |||||||   ||||  ||        ||    ||    |||||||||\n=========================================================================\n=========================================================================\n^^                                                                     ^^\n^^                            Created by:                              ^^\n^^                          Michael Kilcorse                           ^^\n^^        -----------------------------------------------------        ^^\n^^                      Interested in hiring me?                       ^^\n^^                           Contact me at:                            ^^\n^^                          michael@kidd.pro                           ^^\n^^        -----------------------------------------------------        ^^\n^^                                                                     ^^\n^^                                                                     ^^\n=========================================================================\n=========================================================================\n"
    );
  }

  componentDidMount() {
    this.logToConsole();
  }

  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        
      </div>
    );
  }
}

export default App;
