import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './users'
import ContactUs from './components/contactForm';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/users" component={Users} />
    <Route path="/contactus" component={ContactUs} />
  </Switch>
);

export default App;
