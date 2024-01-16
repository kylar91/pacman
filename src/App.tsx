import React, { useState } from "react";
import "./App.css";
import Field from "./component/Field";

function App() {
  const [score, setScore] = useState(0);

  return (
    <div className="game-container">
      <header>
        <h1>PAC-MAN</h1>
        <div className="info">
          <div>
            <p>1 UP</p>
          </div>
          <div>
            <p>
              SCORE: <span>{score}</span>
            </p>
          </div>
        </div>
      </header>
      <Field />
    </div>
  );
}

export default App;
