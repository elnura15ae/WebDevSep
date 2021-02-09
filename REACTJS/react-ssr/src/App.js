import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import './App.css';
import Users from './users'


const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/users" component={Users} />
  </Switch>
);

export default App;
