import React from "react";

export default function WeatherIcon(props) {
  return (
    <div>
      <img src={props.code} alt={props.alt} />
    </div>
  );
}
