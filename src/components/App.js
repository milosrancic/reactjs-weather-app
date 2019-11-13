import React from "react";
import axios from "axios";

import DisplayWeather from "./DisplayWeather";
import "./../css/App.css";

const weatherKey = "b06eb1f3919ecfd295b8f717f2ad73c0";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: "",
      country: "",
      currLat: "",
      currLon: "",
      temp: "",
      tempCategory: "Celsius",
      currTempK: "",
      currTempC: "",
      currTempF: "",
      weatherDetail: "",
      isWeatherLoaded: false,
      isLocationLoaded: false
    };
  }

  UNSAFE_componentWillMount() {
    this.getLocation();
  }

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          this.setState({
            isLocationLoaded: true,
            currLat: latitude,
            currLon: longitude
          });
          this.getWeather();
        },
        error => {
          console.log(error);
          this.setState({
            isLocationLoaded: false
          });
        }
      );
    }
  };

  getWeather = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.currLat}&lon=${this.state.currLon}&APPID=${weatherKey}`
      )
      .then(response => {
        let tempK = response.data.main.temp;
        let tempC = tempK - 273.15;
        let tempF = tempC * 1.8 + 32;
        this.setState({
          city: response.data.name,
          country: response.data.sys.country,
          temp: tempC.toFixed(2).toString() + "°C",
          currTempK: tempK.toString() + "K",
          currTempF: tempF.toFixed(2).toString() + "°F",
          currTempC: tempC.toFixed(2).toString() + "°C",
          weatherDetail: response.data.weather[0].description,
          isWeatherLoaded: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleKelvin = () => {
    this.setState({ temp: this.state.currTempK, tempCategory: "Kelvin" });
  };

  handleCelsius = () => {
    this.setState({ temp: this.state.currTempC, tempCategory: "Celsius" });
  };

  handleFaren = () => {
    this.setState({ temp: this.state.currTempF, tempCategory: "Faren" });
  };

  render() {
    return (
      <div className="container" id="app">
        <h1>Current Weather</h1>
        <DisplayWeather
          setFaren={this.handleFaren}
          setCelsius={this.handleCelsius}
          setKelvin={this.handleKelvin}
          temp={this.state.temp}
          tempCategory={this.state.tempCategory}
          latitude={this.state.currLat}
          longitude={this.state.currLon}
          city={this.state.city}
          country={this.state.country}
          celsius={this.state.currTempC}
          faren={this.state.currTempF}
          weatherDetail={this.state.weatherDetail}
          isWeatherLoaded={this.state.isWeatherLoaded}
          isLocationLoaded={this.state.isLocationLoaded}
        />

        <p>
          <a
            href="https://github.com/milosrancic"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" />
          </a>
        </p>
      </div>
    );
  }
}

export default App;
