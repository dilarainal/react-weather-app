import React, { useState } from "react";

export default function WeatherUnit(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.units * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherUnit">
        <span className="temperature">{Math.round(props.units)}</span>
        <span className="unit">
          ° C |{" "}
          <a href="/" onClick={showFahrenheit}>
            F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherUnit">
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="unit">
          °{" "}
          <a href="/" onClick={showCelsius}>
            C
          </a>{" "}
          | F
        </span>
      </div>
    );
  }
}
