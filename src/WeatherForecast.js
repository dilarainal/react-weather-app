import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div>Mon</div>
        <div>
          <WeatherIcon code={props.forecast.icon} />
        </div>
        <div>
          <span>19 </span>
          <span>10</span>
        </div>
      </div>
    </div>
  );
}
