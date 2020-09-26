import React from "react";
import "./App.css";

// importing components
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/HomePage/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={Home}/>
    </Router>
  );
}

export default App;
