import React from "react";
import "./App.css";

// importing components
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" />
    </Router>
  );
}

export default App;
