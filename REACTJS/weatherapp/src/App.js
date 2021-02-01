import React from 'react'
import './App.css';

class App extends React.Component {

  componentDidMount(){ //whenever u refresh the browser
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        console.log(position.coords.latitude)
      })
    }else{
      console.log("not supported")
    }
  }

  render(){
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
