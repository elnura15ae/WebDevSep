import React, { Component } from 'react'
import Info from "./components/info"
import Form from "./components/form"
import Weather from "./components/weather"

const API_KEY = "e3c72586aebd8ff49f894e2f133d874b"

export default class App extends Component {
  
  getWeather = async (e) =>{
    e.preventDefault();
    const city=<e className="taret elements city value"></e>
     const api_url = await 
     fetch(`api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`)
    const data= await api_url.json();
    console.log(data)
    }
  
  render() {
    return (
      <div>
        <Info />
        <Form weatherMethod={this.getWeather}/>
        <Weather />
      </div>
    )
  }
}


