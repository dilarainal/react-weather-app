import React, { useState } from "react";
import axios from "axios";
import { Puff } from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
    });
  }

  function search() {
    const apiKey = "o79b0b278ad643abf38d0abtfa4f526c";
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}`;
    axios.get(apiURL).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return (
      <Puff
        visible={true}
        height="80"
        width="80"
        color="orange"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    );
  }
}
