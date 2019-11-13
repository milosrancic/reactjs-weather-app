import React from "react";
import ReactLoading from "react-loading";
import Clock from "react-live-clock";

import "../css/DisplayWeather.css";

class DisplayWeather extends React.Component {
  render() {
    let lat = Number(this.props.latitude).toFixed(2) + "° N";
    let lon = Number(this.props.longitude).toFixed(2) + "° E";

    let isWeatherLoaded = this.props.isWeatherLoaded;
    let isLocationLoaded = this.props.isLocationLoaded;

    let tempCategory = this.props.tempCategory;

    return (
      <div
        className="display-weather text-center container"
        id="display-weather"
      >
        <p className="conditions-p mb-4">The current weather condition is:</p>

        {isWeatherLoaded ? (
          <div>
            <div className="row">
              <div className="col"></div>
              <div className="weather-div m-2 border border-warning rounded">
                <p className="weather-p m-0">{this.props.weatherDetail}</p>
                <p className="temperature-p">{this.props.temp}</p>
              </div>
              <div className="col"></div>
            </div>

            <p>
              {tempCategory === "Celsius" ? (
                <button
                  onClick={this.props.setCelsius}
                  type="button"
                  className="btn btn-warning btn-sm"
                >
                  Celsius
                </button>
              ) : (
                <button
                  onClick={this.props.setCelsius}
                  type="button"
                  className="btn btn-outline-warning btn-sm"
                >
                  Celsius
                </button>
              )}

              {tempCategory === "Faren" ? (
                <button
                  onClick={this.props.setFaren}
                  type="button"
                  className="btn btn-warning btn-sm m-2"
                >
                  Fahrenheit
                </button>
              ) : (
                <button
                  onClick={this.props.setFaren}
                  type="button"
                  className="btn btn-outline-warning btn-sm m-2"
                >
                  Fahrenheit
                </button>
              )}

              {tempCategory === "Kelvin" ? (
                <button
                  onClick={this.props.setKelvin}
                  type="button"
                  className="btn btn-warning btn-sm"
                >
                  Kelvin
                </button>
              ) : (
                <button
                  onClick={this.props.setKelvin}
                  type="button"
                  className="btn btn-outline-warning btn-sm"
                >
                  Kelvin
                </button>
              )}
            </p>
          </div>
        ) : (
          <ReactLoading
            className="loader-1"
            type={"spin"}
            color={"#FEC109"}
            height={50}
            width={50}
          />
        )}

        {isLocationLoaded ? (
          <div className="location-div my-4">
            <p>
              <small>Your approximate location is:</small>{" "}
              <span className="edit-span">
                {this.props.city}, {this.props.country}
              </span>
            </p>
            <p>
              <small>Your coordinates are:</small>{" "}
              <span className="edit-span">
                {lat}, {lon}
              </span>
            </p>
          </div>
        ) : (
          <ReactLoading
            className="loader-2"
            type={"spin"}
            color={"#FEC109"}
            height={50}
            width={50}
          />
        )}

        <Clock format={"HH:mm:ss"} ticking={true} className="clock" />
      </div>
    );
  }
}

export default DisplayWeather;
