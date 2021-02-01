import React, { Component } from 'react'
import Info from "./components/info"
import Form from "./components/form"
import Weather from "./components/weather"

const API_KEY = "e3c72586aebd8ff49f894e2f133d874b"

export default class App extends Component {
  
  state={
    temp:undefined,
    city:undefined,
    country:undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  }

  getWeather = async (e) =>{
    e.preventDefault();
    const city=<e className="taret elements city value"></e>
     const api_url = await 
     fetch(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    const data= await api_url.json();
    console.log(data)

    this.setState({
      temp:data.main.temp,
      city:data.name,
      country: data.sys.country,
      sunrise:data.sys.sunrise,
      sunset:data.sys.sunset,
      error:""
    });
    }
  
  render() {
    return (
      <div>
        <Info />
        <Form weatherMethod={this.getWeather}/>
        <Weather 
        temp={this.state.temp}
        city={this.state.city}
        country={this.state.country}
        sunrise={this.state.sunrise}
        sunset={this.state.sunset}
        error={this.state.error}
        />
      </div>
    )
  }
}


