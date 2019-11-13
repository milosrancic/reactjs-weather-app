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
      <div className="display-weather" id="display-weather">
        <p className="conditions-p">The current weather condition is:</p>

        {isWeatherLoaded ? (
          <div>
            <div className="weather-div">
              <p className="weather-p ">{this.props.weatherDetail}</p>
              <p className="temperature-p">{this.props.temp}</p>
            </div>

            <p>
              {tempCategory === "Celsius" ? (
                <button onClick={this.props.setCelsius} type="button">
                  Celsius
                </button>
              ) : (
                <button onClick={this.props.setCelsius} type="button">
                  Celsius
                </button>
              )}

              {tempCategory === "Faren" ? (
                <button onClick={this.props.setFaren} type="button">
                  Fahrenheit
                </button>
              ) : (
                <button onClick={this.props.setFaren} type="button">
                  Fahrenheit
                </button>
              )}

              {tempCategory === "Kelvin" ? (
                <button onClick={this.props.setKelvin} type="button">
                  Kelvin
                </button>
              ) : (
                <button onClick={this.props.setKelvin} type="button">
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
          <div className="location-div">
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
