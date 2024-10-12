import React from "react";

export default function WeatherUnit(props) {
  return (
    <div className="WeatherUnit">
      <span className="temperature">{Math.round(props.units)}</span>
      <span className="unit">°C</span>
    </div>
  );
}
