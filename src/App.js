import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavHome from './components/Navbar/navbar';

class App extends React.Component {
  render() {
    return(
      <div>
        <NavHome/>
        <Switch>
          <Route path="/"/>
          <Route path="/habitaciones"/>
          <Route path="/blog"/>
        </Switch>
      </div>
    )
  }
}

export default App;
