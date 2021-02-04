import React, { Component } from 'react'
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import NavigationBar from './components/NavigationBar'
import Home from './pages/Home'
import Blog from './pages/Blog'

/* 
npm install react-router-dom
*/

export default class App extends Component {
  render() {

    const myLocalDB=[  
      {
      id:1,
      title:"lorem ipsum",
      body:'ipsum lorem etc....'
      },
      {
        id:1,
        title:"lorem ipsum",
        body:'ipsum lorem etc....'
        },
        {
          id:1,
          title:"lorem ipsum",
          body:'ipsum lorem etc....'
          }
  ]
  
    return (
      <Router>
        <div>
        <NavigationBar />
        </div>
        <Route exact path='/' component={Home} />
        <Route path='/blog' render={()=> <Blog data={myLocalDB}/>} />
      </Router>
      
    )
  }
}
