import React, { Component } from 'react'
import Info from "./components/info"
import Form from "./components/form"
import Weather from "./components/weather"

const API_KEY = "e3c72586aebd8ff49f894e2f133d874b"

export default class App extends Component {
  
  getWeather = async () =>{
     const api_url = await fetch(`api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`)
  }
  
  render() {
    return (
      <div>
        <Info/>
        <Form/>
        <Weather/>
      </div>
    )
  }
}
