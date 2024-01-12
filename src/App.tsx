import React from "react";
import logo from "./logo.svg";
import "./App.css";

function ciao() {
  console.log("ciao");
}

function App() {
  function test() {
    console.log("prova");
  }

  return ciao;
}

export default App;
