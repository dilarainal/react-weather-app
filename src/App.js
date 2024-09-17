import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by {""}
          <a
            href="https://www.linkedin.com/in/dilarainal/"
            target="_blank"
            rel="noreferrer"
          >
            Dilara Inal
          </a>
          {""} and is open-sourced on {""}
          <a
            href="https://github.com/dilarainal/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
